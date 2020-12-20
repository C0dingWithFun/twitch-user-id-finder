import redis, { RedisClient } from 'redis';
import { __REDIS_URL__ } from './constants';

const redisClient: RedisClient = redis.createClient(__REDIS_URL__);

redisClient.on('error', (error) => {
  console.error('🔴 Failed to connect to the redis server :(');
  console.error(error);
});

redisClient.on('connect', () => {
  console.log('🟢 Successfully connected to the redis server 🎉!');
});

export default redisClient;
