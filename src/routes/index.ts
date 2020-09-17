// tslint:disable: import-name
import { Router } from 'express';
import todoRouter from './todos';

const router = Router();
// Set routes
router.use('/todos', todoRouter);

export default router;
