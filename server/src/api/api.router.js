"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_id_cache_middleware_1 = require("./v1/user-id.cache.middleware");
var user_id_controller_1 = require("./v1/user-id.controller");
var apiRouter = express_1.Router();
apiRouter.post('/user-id', user_id_cache_middleware_1["default"], user_id_controller_1["default"]);
exports["default"] = apiRouter;
