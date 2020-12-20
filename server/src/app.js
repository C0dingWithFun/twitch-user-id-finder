"use strict";
exports.__esModule = true;
var express_1 = require("express");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var compression_1 = require("compression");
var helmet_1 = require("helmet");
var constants_1 = require("./constants");
var cors_config_1 = require("./configs/cors.config");
var errors_middleware_1 = require("./middlewares/errors.middleware");
var api_router_1 = require("./api/api.router");
var app = express_1["default"]();
app.use(cors_1["default"](cors_config_1["default"]));
app.use(express_1["default"].json());
app.use(morgan_1["default"](constants_1.__PROD__ ? 'common' : 'dev'));
app.use(compression_1["default"]());
app.use(helmet_1["default"]());
app.get('/', function (_, res) {
    res.status(200);
    res.json({
        message: 'Welcome to the API for the Twitch User ID Finder!'
    });
});
app.use('/api/v1', api_router_1["default"]);
app.use(errors_middleware_1.notFoundHandler);
app.use(errors_middleware_1.errorHandler);
exports["default"] = app;
