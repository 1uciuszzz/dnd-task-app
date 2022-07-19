import { request } from "../util/request";

export const getTodos = () => {
  return request.get("/todo");
};

export const createTodo = (newTodo: { title: string }) => {
  return request.post("/todo", newTodo);
};

export const deleteTodo = (todoId: string) => {
  return request.delete(`/todo/${todoId}`);
};

export const changeStatus = (todoId: string, status: number) => {
  return request.patch(`/todo/${todoId}`, { status });
};

export const signIn = (username: string, password: string) => {
  return request.post(`/auth`, {
    username: username,
    password: password,
  });
};
