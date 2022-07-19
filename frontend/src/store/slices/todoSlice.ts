import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../interfaces";
import type { RootState } from "../index";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodoHandler: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodoHandler: (state, action) => {
      state.todos = state.todos.filter(
        (todo: Todo) => todo._id !== action.payload.id
      );
    },
    changeStatusHandler: (state, action) => {
      state.todos.forEach((todo: Todo) => {
        if (todo._id === action.payload.id) {
          todo.status = action.payload.status;
        }
      });
    },
    getTodosHandler: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const {
  createTodoHandler,
  deleteTodoHandler,
  changeStatusHandler,
  getTodosHandler,
} = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo.todos;
export default todoSlice.reducer;
