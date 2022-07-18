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
exports.todo = void 0;
const express_1 = __importDefault(require("express"));
const model_1 = require("../model");
const util_1 = require("../util");
exports.todo = express_1.default.Router();
exports.todo.use((req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
        const { payload, status } = (0, util_1.verifyToken)(authorization);
        if (status) {
            req.body.uid = payload.uid;
            next();
        }
        else {
            return res.status(401).json({
                msg: "authenticate fail",
            });
        }
    }
    else {
        return res.status(200).json({
            msg: "token is missing",
        });
    }
});
exports.todo.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = req.body;
    const { uid } = req.body;
    const newTodo = yield model_1.Todo.create({
        title,
        status: 0,
        uid: uid,
    });
    return res.status(200).json({
        msg: "created a new todo",
        todo: {
            _id: newTodo._id,
            title: newTodo.title,
            status: newTodo.status,
        },
    });
}));
exports.todo.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { uid } = req.body;
    const hasTodo = yield model_1.Todo.findOne({ _id: id, uid: uid });
    if (hasTodo) {
        hasTodo.delete();
        return res.status(200).json({
            msg: "delete success",
        });
    }
    else {
        return res.status(200).json({
            msg: "not found todo",
        });
    }
}));
exports.todo.patch("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { uid, status } = req.body;
    const hasTodo = yield model_1.Todo.findOne({ _id: id, uid: uid });
    if (hasTodo) {
        hasTodo.status = status;
        hasTodo.save();
        return res.status(200).json({
            msg: "status updated",
        });
    }
    else {
        return res.status(200).json({
            msg: "not found todo",
        });
    }
}));
exports.todo.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.body;
    const todos = yield model_1.Todo.find({ uid: uid });
    return res.status(200).json({
        msg: "query success",
        todos: todos,
    });
}));
