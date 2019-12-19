import { Application } from 'express';
import { TodoService } from './../services/todos.service';

export class TodoController {
  private todoService: TodoService;

  constructor(private app: Application) {
    this.todoService = new TodoService();
    this.routes();
  }

  public routes() {
    const service = this.todoService;
    this.app.route('/')
      .get(service.index)
      .post(service.create);
    this.app.route('/:id')
      .get(service.read)
      .put(service.update)
      .delete(service.delete)
  }
}