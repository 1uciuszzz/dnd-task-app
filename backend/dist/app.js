"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const util_1 = require("./util");
const user_1 = require("./router/user");
const auth_1 = require("./router/auth");
const todo_1 = require("./router/todo");
dotenv_1.default.config();
util_1.db;
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/user", user_1.user);
app.use("/api/auth", auth_1.auth);
app.use("/api/todo", todo_1.todo);
app.get("/", (req, res, next) => {
    res.status(200).json({
        ping: "pong!",
    });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
