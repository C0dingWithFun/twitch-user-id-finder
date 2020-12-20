"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const constants_1 = require("./constants");
const cors_config_1 = __importDefault(require("./configs/cors.config"));
const errors_middleware_1 = require("./middlewares/errors.middleware");
const api_router_1 = __importDefault(require("./api/api.router"));
const app = express_1.default();
app.use(cors_1.default(cors_config_1.default));
app.use(express_1.default.json());
app.use(morgan_1.default(constants_1.__PROD__ ? 'common' : 'dev'));
app.use(compression_1.default());
app.use(helmet_1.default());
app.get('/', (_, res) => {
    res.status(200);
    res.json({
        message: 'Welcome to the API for the Twitch User ID Finder!',
    });
});
app.use('/api/v1', api_router_1.default);
app.use(errors_middleware_1.notFoundHandler);
app.use(errors_middleware_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map