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
exports.auth = void 0;
const express_1 = __importDefault(require("express"));
const model_1 = require("../model");
const util_1 = require("../util");
const encrypt_1 = require("./../util/encrypt");
exports.auth = express_1.default.Router();
exports.auth.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const hasVerify = yield model_1.User.findOne({
        username,
        password: (0, encrypt_1.encryptPassword)(password),
    });
    if (hasVerify) {
        return res.status(200).json({
            msg: "authenticate success",
            accessToken: (0, util_1.genToken)({
                uid: hasVerify._id,
            }),
        });
    }
    else {
        return res.status(200).json({
            msg: "authenticate fail or user doesn't exist",
        });
    }
}));
