import { CorsOptions } from 'cors';

import { __PROD__ } from '../constants';

const corsOptions: CorsOptions = {
  origin: __PROD__
    ? ['https://twitch-user-id-finder.vercel.app']
    : ['http://localhost:8081'],
  methods: ['GET', 'POST'],
};

export default corsOptions;
