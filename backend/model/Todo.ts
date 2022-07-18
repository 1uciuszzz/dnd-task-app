import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  status: Number,
  uid: mongoose.Types.ObjectId,
});

export const Todo = mongoose.model("Todo", todoSchema);
