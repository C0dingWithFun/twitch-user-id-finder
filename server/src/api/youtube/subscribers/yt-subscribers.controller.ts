import { NextFunction, Request, Response } from 'express';
import { google } from 'googleapis';
import redisClient from '../../../redis.db';
import { ytServiceBaseConfig, YTServicePartsOptionEnum } from '../../../configs/ytService.config';
import { ERedisKeys } from '../../../constants';

/**
 * Controller for /api/v1/youtube/subscribers endpoint and returns current channel subscribers
 * @param {Express.Request} req Express Request object
 * @param {Express.Response} res Express Response object
 * @param {NextFunction} next Express Next Function
 */
const ytSubscribersController = (req: Request, res: Response, next: NextFunction) => {
  const ytService = google.youtube('v3');
  const ytServiceOptions = {
    ...ytServiceBaseConfig,
    part: [YTServicePartsOptionEnum.STATISTICS],
  };

  ytService.channels.list(ytServiceOptions, (err, response) => {
    if (err) {
      next(new Error(err.message));
      return;
    }

    const subscribers = response?.data.items![0]?.statistics?.subscriberCount;

    // Saving data to redis client for cache
    redisClient.setex(ERedisKeys.YTSubscribers, 15 * 60, subscribers);

    res.status(200);
    res.json({
      message: 'Successfully fetched YT subscribers count',
      data: { subscribers, isCached: false },
      requestedURL: req.originalUrl,
    });
  });
};

export default ytSubscribersController;
