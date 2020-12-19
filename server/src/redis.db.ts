import redis, { RedisClient } from 'redis';

const redisClient: RedisClient = redis.createClient();

redisClient.on('error', (error) => {
  console.error('🔴 Failed to connect to the redis server :(');
  console.error(error);
});

redisClient.on('connect', () => {
  console.log('🟢 Successfully connected to the redis server 🎉!');
});

export default redisClient;
