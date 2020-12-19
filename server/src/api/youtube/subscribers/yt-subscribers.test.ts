// eslint-disable-next-line
import supertest from 'supertest';

import app from '../../../app';
import redisClient from '../../../redis.db';
import { ERedisKeys } from '../../../constants';

describe('GET /api/v1/youtube/subscribers', () => {
  // Making sure that cached value does not exists in redis db
  redisClient.del(ERedisKeys.YTSubscribers);

  it('should respond with subscribers', async () => {
    const response = await supertest(app)
      .get('/api/v1/youtube/subscribers')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message)
      .toEqual('Successfully fetched YT subscribers count');
    expect(response.body.data.subscribers)
      .toBeDefined();
    expect(response.body.data.isCached)
      .not.toBeDefined();
  });

  it('should respond with cached subscribers', async () => {
    const response = await supertest(app)
      .get('/api/v1/youtube/subscribers')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.message)
      .toEqual('Successfully fetched YT subscribers count');
    expect(response.body.data.subscribers)
      .toBeDefined();
    expect(response.body.data.isCached)
      .toEqual(true);
  });
});
