"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_db_1 = __importDefault(require("../../redis.db"));
const userIdCacheMiddleware = (req, res, next) => {
    var _a, _b, _c;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.loginName) && ((_b = req.body) === null || _b === void 0 ? void 0 : _b.loginName.trim())) {
        const loginName = (_c = req.body) === null || _c === void 0 ? void 0 : _c.loginName.trim();
        redis_db_1.default.get(loginName, (err, data) => {
            if (err) {
                next(err);
                return;
            }
            if (!data) {
                next();
                return;
            }
            res.status(200);
            res.json({
                data: JSON.parse(data),
                isCached: true,
                message: 'Successfully fetched the Twitch User ID',
            });
        });
    }
};
exports.default = userIdCacheMiddleware;
//# sourceMappingURL=user-id.cache.middleware.js.map