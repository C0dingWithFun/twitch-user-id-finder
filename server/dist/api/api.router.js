"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_id_cache_middleware_1 = __importDefault(require("./v1/user-id.cache.middleware"));
const user_id_controller_1 = __importDefault(require("./v1/user-id.controller"));
const apiRouter = express_1.Router();
apiRouter.post('/user-id', user_id_cache_middleware_1.default, user_id_controller_1.default);
exports.default = apiRouter;
//# sourceMappingURL=api.router.js.map