import { Request, Response } from "express";
import { Todo } from "../models/todo.model";
import { MongooseDocument } from "mongoose";

export class TodoService {

  public index(req: Request, res: Response) {
    Todo.find({}, (error: Error, todos: MongooseDocument) => {
      if (error) {
        res.status(500).json(error);
      }

      res.json(todos)
    })
  }

  public create(req: Request, res: Response) {
    const todo = new Todo(req.body);
    console.log(todo);
    todo.save((error: Error, todo: MongooseDocument) => {
      if (error) {
        res.status(500).json(error);
      }

      res.json(todo)
    })
  }

  public read(req: Request, res: Response) {
    const id = req.params.id;
    Todo.findById(id, (error: Error, todo: MongooseDocument) => {
      if (error) {
        res.status(500).json(error);
      }
      if (!todo) {
        res.status(404).send('Not found!');
      }

      res.json(todo)
    });
  }

  public update(req: Request, res: Response) {
    const id = req.params.id;
    Todo.findByIdAndUpdate(
      id,
      req.body,
      (error: Error, todo: any) => {
        if (error) {
          res.status(500).json(error);
        }
        if (!todo) {
          res.status(404).send('Not found!');
        }
        
        res.send('Updated successfully!');
      }
    )
  }

  public delete(req: Request, res: Response) {
    const id = req.params.id;
    Todo.findByIdAndDelete(
      id,
      req.body,
      (error: Error, todo: any) => {
        if (error) {
          res.status(500).json(error);
        }
        if (!todo) {
          res.status(404).send('Not found!');
        }
        
        res.send('Deleted successfully!');
      }
    )
  }
}