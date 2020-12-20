"use strict";
exports.__esModule = true;
/* eslint-disable */
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var dotenvConfig = dotenv_1["default"].config({
    path: path_1["default"].resolve(process.cwd(), '.env')
});
if (dotenvConfig.error) {
    throw dotenvConfig.error;
}
var constants_1 = require("./constants");
var app_1 = require("./app");
require("./redis.db");
app_1["default"].listen(constants_1.__PORT__, function () {
    console.info("\uD83C\uDF89 Application has started sucessfully at http://localhost:" + constants_1.__PORT__);
});
