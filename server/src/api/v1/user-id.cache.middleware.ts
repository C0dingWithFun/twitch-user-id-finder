import { NextFunction, Request, Response } from 'express';
import redisClient from '../../redis.db';

const userIdCacheMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body?.loginName && req.body?.loginName.trim()) {
    const loginName = req.body?.loginName.toString().trim();
    redisClient.get(loginName, (err, data) => {
      if (err) {
        next(err);
        return;
      }

      if (!data) {
        next();
        return;
      }

      res.status(200);
      res.json({
        data: JSON.parse(data),
        isCached: true,
        message: 'Successfully fetched the Twitch User ID',
      });
    });
  }
};

export default userIdCacheMiddleware;
