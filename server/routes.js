import express from 'express';

// controller imports
import basciController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';

const routes = express();

// basic routes
routes.get('/', basciController.get);

// user routes
routes.post('/signup', userController.post);

// post routes
routes.post('/post', postController.post);
routes.get('/post', postController.getAll);

export default routes;
