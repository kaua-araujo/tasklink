import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import TaskControler from './app/controllers/TaskControler';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);


// Todas rotas abaixo desse middleware precisa estar autenticado.
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/tasks', TaskControler.store);
routes.get('/tasks', TaskControler.index);
routes.put('/tasks/:task_id', TaskControler.update);
routes.delete('/tasks/:task_id', TaskControler.destroy);

export default routes;
