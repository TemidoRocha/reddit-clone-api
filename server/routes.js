import express from 'express';

// controller imports
import basciController from './controllers/basicController';
import userController from './controllers/userController';

const routes = express();

// basic routes
routes.get('/', basciController.get);

// user routes
routes.post('/signup', userController.post);

export default routes;
