import { Router } from 'express';
import userIdController from './v1/user-id.controller';

const apiRouter = Router();

apiRouter.post('/user-id', userIdController);

export default apiRouter;
