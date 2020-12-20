export const __PROD__ = process.env.NODE_ENV === 'production';
export const __PORT__ = process.env.PORT ? Number(process.env.PORT) : 9000;
export const __REDIS_URL__ = process.env.REDIS_URL
  ? process.env.REDIS_URL
  : 'redis://localhost:6379';

export const __TWITCH_CLIENT_ID__ = process.env.TWITCH_CLIENT_ID?.toString();
export const __TWITCH_CLIENT_SECRET__ = process.env.TWITCH_CLIENT_SECRET?.toString();
