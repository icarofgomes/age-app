import { NextFunction, Request, Response } from 'express';

export default (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const [code, message] = err.message.split('-');

  return res.status(Number(code)).json({ error: message });
};
