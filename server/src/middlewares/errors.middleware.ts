import { ErrorRequestHandler, RequestHandler } from 'express';
import { __PROD__ } from '../constants';

export const notFoundHandler: RequestHandler = (_, res, next) => {
  res.status(404);
  next(new Error('The requested route does not exists.'));
};

// eslint-disable-next-line
export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  const statusCode = res.statusCode !== 200 ? Number(res.statusCode) : 500;
  res.status(statusCode);
  return res.json({
    errorCode: statusCode,
    message: err.message,
    requestURL: req.originalUrl,
    stack: __PROD__ ? '' : err.stack,
  });
};
