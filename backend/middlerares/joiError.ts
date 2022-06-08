import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

export default (err: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (!Joi.isError(err)) return next(err);

  const [code, message] = err.message.split('-');

  return res.status(Number(code)).json({ error: message });
};
