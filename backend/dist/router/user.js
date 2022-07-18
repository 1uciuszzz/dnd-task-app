"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_1 = __importDefault(require("express"));
const model_1 = require("../model");
const encrypt_1 = require("./../util/encrypt");
exports.user = express_1.default.Router();
exports.user.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const hasUser = yield model_1.User.findOne({ username: username });
    if (!hasUser) {
        const newUser = yield model_1.User.create({
            username,
            password: (0, encrypt_1.encryptPassword)(password),
        });
        return res.status(200).json({
            msg: "register success",
            user: {
                _id: newUser._id,
                username,
            },
        });
    }
    else {
        return res.status(200).json({
            msg: "user existed",
            user: {
                _id: hasUser._id,
                username: hasUser.username,
            },
        });
    }
}));
