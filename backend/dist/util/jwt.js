"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.genToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jwtKey = process.env.JWT_KEY;
const genToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, jwtKey, { expiresIn: "1d" });
};
exports.genToken = genToken;
const verifyToken = (token) => {
    const result = {
        payload: {
            uid: "",
        },
        status: true,
    };
    try {
        result.payload = jsonwebtoken_1.default.verify(token, jwtKey);
    }
    catch (e) {
        result.status = false;
    }
    return result;
};
exports.verifyToken = verifyToken;
