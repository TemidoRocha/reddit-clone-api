import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import routes from './routes';

const MONGODB_URI = 'mongodb://localhost:27017/devcoffe';

mongoose.connect(MONGODB_URI, () => {
  console.log('conected to mongodb...');
});

const app = express();

// MIddleware

app.use(bodyParser.json());
app.use('/api', routes);

export default app;
