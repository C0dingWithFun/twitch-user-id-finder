"use strict";
var _a, _b;
exports.__esModule = true;
exports.__TWITCH_CLIENT_SECRET__ = exports.__TWITCH_CLIENT_ID__ = exports.__PORT__ = exports.__PROD__ = void 0;
exports.__PROD__ = process.env.NODE_ENV === 'production';
exports.__PORT__ = process.env.PORT ? Number(process.env.PORT) : 9000;
exports.__TWITCH_CLIENT_ID__ = (_a = process.env.TWITCH_CLIENT_ID) === null || _a === void 0 ? void 0 : _a.toString();
exports.__TWITCH_CLIENT_SECRET__ = (_b = process.env.TWITCH_CLIENT_SECRET) === null || _b === void 0 ? void 0 : _b.toString();
