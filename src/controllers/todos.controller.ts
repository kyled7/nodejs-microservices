import { RequestHandler } from 'express';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todos.service';

const todoService = new TodoService(Todo);

export const listTodo: RequestHandler = async (req, res) => {
  try {
    const todos = await todoService.index();
    res.json({ data: todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createTodo: RequestHandler = async (req, res) => {
  try {
    const todo = await todoService.create(req.body);
    res.json({ data: todo });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const readTodo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoService.read(id);
    if (!todo) {
      res.status(404).json({ error: 'NOT FOUND!' });
    }
    res.json({ data: todo });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateTodo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoService.update(id, req.body);
    if (!todo) {
      res.status(404).json({ error: 'NOT FOUND!' });
    }
    res.json({ data: todo });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteTodo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await todoService.delete(id);
    res.json({ data: true });
  } catch (error) {
    res.status(500).json({ error });
  }
};
