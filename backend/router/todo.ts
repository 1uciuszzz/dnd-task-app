import express, { NextFunction, Request, Response } from "express";
import { Todo } from "../model";
import { verifyToken } from "../util";

export const todo = express.Router();

todo.use((req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (authorization) {
    const { payload, status } = verifyToken(authorization);
    if (status) {
      req.body.uid = payload.uid;
      next();
    } else {
      return res.status(401).json({
        msg: "authenticate fail",
      });
    }
  } else {
    return res.status(200).json({
      msg: "token is missing",
    });
  }
});

todo.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { title }: TodoIn = req.body;
  const { uid } = req.body;
  const newTodo = await Todo.create({
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
});

todo.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { uid } = req.body;
  const hasTodo = await Todo.findOne({ _id: id, uid: uid });
  if (hasTodo) {
    hasTodo.delete();
    return res.status(200).json({
      msg: "delete success",
    });
  } else {
    return res.status(200).json({
      msg: "not found todo",
    });
  }
});

todo.patch("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { uid, status } = req.body;
  const hasTodo = await Todo.findOne({ _id: id, uid: uid });
  if (hasTodo) {
    hasTodo.status = status;
    hasTodo.save();
    return res.status(200).json({
      msg: "status updated",
    });
  } else {
    return res.status(200).json({
      msg: "not found todo",
    });
  }
});

todo.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const { uid } = req.body;
  const todos = await Todo.find({ uid: uid });
  return res.status(200).json({
    msg: "query success",
    todos: todos,
  });
});
