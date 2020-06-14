import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const { text } = req.body as { text: string };
  const newTodo = new Todo(Math.random().toString(), text);
  TODOS.push(newTodo);
  res.status(201).json({ message: "Create the todo.", createdTodo: newTodo });
};