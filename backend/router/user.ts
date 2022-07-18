import express, { Request, Response, NextFunction } from "express";
import { User } from "../model";
import { encryptPassword } from "./../util/encrypt";

export const user = express.Router();

user.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: UserIn = req.body;
  const hasUser = await User.findOne({ username: username });
  if (!hasUser) {
    const newUser = await User.create({
      username,
      password: encryptPassword(password),
    });
    return res.status(200).json({
      msg: "register success",
      user: {
        _id: newUser._id,
        username,
      },
    });
  } else {
    return res.status(200).json({
      msg: "user existed",
      user: {
        _id: hasUser._id,
        username: hasUser.username,
      },
    });
  }
});
