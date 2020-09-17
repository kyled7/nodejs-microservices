import { Router } from 'express';
import * as controller from '../controllers/todos.controller';

const todosRouter = Router();

todosRouter.route('/')
  .get(controller.listTodo)
  .post(controller.createTodo);
todosRouter.route('/:id')
  .get(controller.readTodo)
  .put(controller.updateTodo)
  .delete(controller.deleteTodo);

export default todosRouter;
