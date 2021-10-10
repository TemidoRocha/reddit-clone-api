import express from 'express';

// controller imports
import basciController from './controllers/basicController';
import userController from './controllers/userController';
import postController from './controllers/postController';
import commentController from './controllers/commentController';

const routes = express();

// basic routes
routes.get('/', basciController.get);

// user routes
routes.post('/signup', userController.post);

// post routes
routes.post('/post', postController.post);
routes.get('/post', postController.getAll);

// comment routes
routes.post('/comment', commentController.post);

export default routes;
