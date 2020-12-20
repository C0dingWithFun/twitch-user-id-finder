"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const redisClient = redis_1.default.createClient();
redisClient.on('error', (error) => {
    console.error('🔴 Failed to connect to the redis server :(');
    console.error(error);
});
redisClient.on('connect', () => {
    console.log('🟢 Successfully connected to the redis server 🎉!');
});
exports.default = redisClient;
//# sourceMappingURL=redis.db.js.map