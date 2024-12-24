import { todo } from "node:test";
import { ITask } from "./types/task";

const baseURL = `http://localhost:3001`;
export const GetAll = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseURL}/task`, { cache: "no-store" });
  const todos = await response.json();
  return todos;
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const response = await fetch(`${baseURL}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo), 
  });
  const newTodo = await response.json();
  return newTodo;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const response = await fetch(`${baseURL}/task/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo), 
  });
  const updatedTodo = await response.json();
  return updatedTodo;

};

export const deleteTodo = async (id:string): Promise<void> => {
  await fetch(`${baseURL}/task/${id}`, {
    method: "DELETE",
  });
  

};
