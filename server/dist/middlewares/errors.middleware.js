"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundHandler = void 0;
const constants_1 = require("../constants");
const notFoundHandler = (_, res, next) => {
    res.status(404);
    next(new Error('The requested route does not exists.'));
};
exports.notFoundHandler = notFoundHandler;
const errorHandler = (err, req, res, _next) => {
    const statusCode = res.statusCode !== 200 ? Number(res.statusCode) : 500;
    res.status(statusCode);
    return res.json({
        errorCode: statusCode,
        message: err.message,
        requestURL: req.originalUrl,
        stack: constants_1.__PROD__ ? '' : err.stack,
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errors.middleware.js.map