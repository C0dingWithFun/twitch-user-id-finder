import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import {
  __TWITCH_CLIENT_ID__,
  __TWITCH_CLIENT_SECRET__,
} from '../../constants';

const userIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${__TWITCH_CLIENT_ID__}&client_secret=${__TWITCH_CLIENT_SECRET__}&grant_type=client_credentials`,
    {
      method: 'POST',
    }
  )
    .then((res) => res.json())
    .then(async (data) => {
      const loginName = req.body?.loginName;
      if (!loginName) {
        next(new Error("Channel's Login Name is required!"));
        return;
      }
      if (!loginName.trim()) {
        next(new Error("Channel's Login Name is required!"));
        return;
      }
      await fetch(`https://api.twitch.tv/helix/users?login=${loginName}`, {
        headers: {
          'Client-ID': __TWITCH_CLIENT_ID__ as string,
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then((res) => res.json())
        .then(async (stats) => {
          res.status(200);
          res.json({
            data: {
              loginName,
              userId: stats?.data[0]?.id,
              stats: stats?.data[0],
            },
          });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

export default userIdController;
