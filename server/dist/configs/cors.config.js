"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const corsOptions = {
    origin: constants_1.__PROD__
        ? ['https://twitch-user-id-finder.vercel.app']
        : ['http://localhost:8081'],
    methods: ['GET', 'POST'],
};
exports.default = corsOptions;
//# sourceMappingURL=cors.config.js.map