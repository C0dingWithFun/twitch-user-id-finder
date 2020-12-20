"use strict";
exports.__esModule = true;
var redis_1 = require("redis");
var redisClient = redis_1["default"].createClient();
redisClient.on('error', function (error) {
    console.error('🔴 Failed to connect to the redis server :(');
    console.error(error);
});
redisClient.on('connect', function () {
    console.log('🟢 Successfully connected to the redis server 🎉!');
});
exports["default"] = redisClient;
