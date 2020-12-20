"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const redis_db_1 = __importDefault(require("../../redis.db"));
const constants_1 = require("../../constants");
const userIdController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield node_fetch_1.default(`https://id.twitch.tv/oauth2/token?client_id=${constants_1.__TWITCH_CLIENT_ID__}&client_secret=${constants_1.__TWITCH_CLIENT_SECRET__}&grant_type=client_credentials`, {
        method: 'POST',
    })
        .then((res) => res.json())
        .then((data) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const loginName = (_a = req.body) === null || _a === void 0 ? void 0 : _a.loginName;
        if (!loginName) {
            next(new Error("Channel's Login Name is required!"));
            return;
        }
        if (!loginName.trim()) {
            next(new Error("Channel's Login Name is required!"));
            return;
        }
        yield node_fetch_1.default(`https://api.twitch.tv/helix/users?login=${loginName}`, {
            headers: {
                'Client-ID': constants_1.__TWITCH_CLIENT_ID__,
                Authorization: `Bearer ${data.access_token}`,
            },
        })
            .then((res) => res.json())
            .then((stats) => __awaiter(void 0, void 0, void 0, function* () {
            var _b;
            const response = {
                loginName,
                userId: (_b = stats === null || stats === void 0 ? void 0 : stats.data[0]) === null || _b === void 0 ? void 0 : _b.id,
                stats: stats === null || stats === void 0 ? void 0 : stats.data[0],
            };
            res.status(200);
            res.json({
                data: response,
                message: 'Successfully fetched the Twitch User ID',
            });
            redis_db_1.default.setex(loginName, 30 * 24 * 60 * 60, JSON.stringify(response));
        }))
            .catch((err) => next(err));
    }))
        .catch((err) => next(err));
});
exports.default = userIdController;
//# sourceMappingURL=user-id.controller.js.map