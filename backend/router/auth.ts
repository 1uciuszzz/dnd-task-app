import express, { NextFunction, Request, Response } from "express";
import { User } from "../model";
import { genToken } from "../util";
import { encryptPassword } from "./../util/encrypt";

export const auth = express.Router();

auth.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: UserIn = req.body;
  const hasVerify = await User.findOne({
    username,
    password: encryptPassword(password),
  });
  if (hasVerify) {
    return res.status(200).json({
      msg: "authenticate success",
      accessToken: genToken({
        uid: hasVerify._id,
      }),
    });
  } else {
    return res.status(200).json({
      msg: "authenticate fail or user doesn't exist",
    });
  }
});
