import { Router } from 'express';
import userIdCacheMiddleware from './v1/user-id.cache.middleware';
import userIdController from './v1/user-id.controller';

const apiRouter = Router();

apiRouter.post('/user-id', userIdCacheMiddleware, userIdController);

export default apiRouter;
