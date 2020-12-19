/* eslint-disable */
import dotenv from 'dotenv';
import path from 'path';

const dotenvConfig = dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});
if (dotenvConfig.error) {
  throw dotenvConfig.error;
}

import { __PORT__ } from './constants';
import app from './app';
import './redis.db';

app.listen(__PORT__, () => {
  console.info(`🎉 Application has started sucessfully at http://localhost:${__PORT__}`);
});
