import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import { __PROD__ } from './constants';
import corsOptions from './configs/cors.config';
import { errorHandler, notFoundHandler } from './middlewares/errors.middleware';
import apiRouter from './api/api.router';

const app: Express = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan(__PROD__ ? 'common' : 'dev'));
app.use(compression());
app.use(helmet());

app.get('/', (_, res) => {
  res.status(200);
  res.json({
    message: 'Welcome to the API for the playground toolkit 🧰!',
  });
});

app.use('/api/v1', apiRouter);

const swaggerSpecs = swaggerJSDoc(swaggerJSDocConfig);
app.use('/docs', swaggerUI.serve);
app.get('/docs', swaggerUI.setup(swaggerSpecs, { explorer: true }));

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
