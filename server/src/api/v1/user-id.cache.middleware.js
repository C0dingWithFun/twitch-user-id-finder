"use strict";
exports.__esModule = true;
var redis_db_1 = require("../../redis.db");
var userIdCacheMiddleware = function (req, res, next) {
    var _a, _b, _c;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.loginName) && ((_b = req.body) === null || _b === void 0 ? void 0 : _b.loginName.trim())) {
        var loginName = (_c = req.body) === null || _c === void 0 ? void 0 : _c.loginName.trim();
        redis_db_1["default"].get(loginName, function (err, data) {
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
                message: 'Successfully fetched the Twitch User ID'
            });
        });
    }
};
exports["default"] = userIdCacheMiddleware;
