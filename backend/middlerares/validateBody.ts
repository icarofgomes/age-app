import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';

export default (schema: ObjectSchema) => (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
        throw error;
    }

    next();
};
