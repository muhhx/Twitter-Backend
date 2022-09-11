import { Request, Response, NextFunction } from 'express';

import { ApplicationError } from '../errors/ApplicationError';
import { UncaughtError } from '../errors/UncaughtError';

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ApplicationError) {
    return res.status(err.errorCode).json(err.serializeError());
  }

  const uncaughtError = new UncaughtError(err);
  return res
    .status(uncaughtError.errorCode)
    .json(uncaughtError.serializeError());
}
