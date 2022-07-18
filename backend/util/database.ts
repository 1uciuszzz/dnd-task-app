import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

export default mongoose
  .connect(databaseUrl as string)
  .then((r) => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e);
  });
