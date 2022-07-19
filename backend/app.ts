import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./util";
import { user } from "./router/user";
import { auth } from "./router/auth";
import { todo } from "./router/todo";

dotenv.config();
db;

const port = process.env.PORT;

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/todo", todo);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    ping: "pong!",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
