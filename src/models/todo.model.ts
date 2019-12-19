import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  created_at: Date
})

export const Todo = mongoose.model("Todo", TodoSchema);