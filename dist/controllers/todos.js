"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
exports.createTodo = (req, res, next) => {
    const { text } = req.body;
    const newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Create the todo.", createdTodo: newTodo });
};
exports.getTodos = (req, res, next) => {
    res.status(200).json({ message: "Fetched todos", Todos: TODOS });
};
