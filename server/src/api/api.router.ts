import { Router } from 'express';

import youtubeRouter from './youtube/youtube.router';

const apiRouter = Router();

/**
 * @swagger
 * tags:
 *   -  name: YouTube
 *      description: Routes for YouTube data
 */

apiRouter.use('/youtube', youtubeRouter);

export default apiRouter;
