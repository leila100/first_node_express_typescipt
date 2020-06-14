"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
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
exports.updateTodo = (req, res, next) => {
    const { text } = req.body;
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0)
        throw new Error("Wrong todo id");
    TODOS[todoIndex] = new todo_1.Todo(TODOS[todoIndex].id, text);
    res.json({ message: "todo updated.", todo: TODOS[todoIndex] });
};
