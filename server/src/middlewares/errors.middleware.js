"use strict";
exports.__esModule = true;
exports.errorHandler = exports.notFoundHandler = void 0;
var constants_1 = require("../constants");
var notFoundHandler = function (_, res, next) {
    res.status(404);
    next(new Error('The requested route does not exists.'));
};
exports.notFoundHandler = notFoundHandler;
// eslint-disable-next-line
var errorHandler = function (err, req, res, _next) {
    var statusCode = res.statusCode !== 200 ? Number(res.statusCode) : 500;
    res.status(statusCode);
    return res.json({
        errorCode: statusCode,
        message: err.message,
        requestURL: req.originalUrl,
        stack: constants_1.__PROD__ ? '' : err.stack
    });
};
exports.errorHandler = errorHandler;
