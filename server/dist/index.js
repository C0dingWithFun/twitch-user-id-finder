"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const dotenvConfig = dotenv_1.default.config({
    path: path_1.default.resolve(process.cwd(), '.env'),
});
if (dotenvConfig.error) {
    throw dotenvConfig.error;
}
const constants_1 = require("./constants");
const app_1 = __importDefault(require("./app"));
require("./redis.db");
app_1.default.listen(constants_1.__PORT__, () => {
    console.info(`🎉 Application has started sucessfully at http://localhost:${constants_1.__PORT__}`);
});
//# sourceMappingURL=index.js.map