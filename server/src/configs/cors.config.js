"use strict";
exports.__esModule = true;
var constants_1 = require("../constants");
var corsOptions = {
    origin: constants_1.__PROD__
        ? ['https://twitch-user-id-finder.vercel.app']
        : ['http://localhost:8081'],
    methods: ['GET', 'POST']
};
exports["default"] = corsOptions;
