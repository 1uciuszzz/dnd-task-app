"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.encryptPassword = void 0;
const crypto_1 = require("crypto");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.SECRET_KEY;
const encryptPassword = (rawPassword) => {
    return (0, crypto_1.createHmac)("sha256", secretKey)
        .update(rawPassword)
        .digest("base64");
};
exports.encryptPassword = encryptPassword;
const verifyPassword = (rawPassword, encryptedPassword) => {
    return encryptedPassword === (0, exports.encryptPassword)(rawPassword);
};
exports.verifyPassword = verifyPassword;
