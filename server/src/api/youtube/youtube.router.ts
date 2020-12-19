import { Router } from 'express';
import { ytSubsCacheMiddleware } from './subscribers/yt-subscribers.cache';

import ytSubscribersController from './subscribers/yt-subscribers.controller';

const youtubeRouter = Router();

/**
 * @swagger
 * path:
 *  /youtube/subscribers:
 *    get:
 *      summary: Returns the subscribers count for YouTube channel
 *      tags: [YouTube]
 *      responses:
 *        "200":
 *          description: Response has latest subscribers count for the YouTube Channel
 *        "500":
 *          description: Internal Server Error. Look at the stack for more information
 */
youtubeRouter.get('/subscribers', ytSubsCacheMiddleware, ytSubscribersController);

export default youtubeRouter;
