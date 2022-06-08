import Joi from 'joi';

export const user = Joi.object({
    username: Joi.string().min(2).required().messages({
      'string.base': '422-Username must be a string',
      'any.required': '400-Username is required',
    }),
    birth: Joi.date().required().messages({
      'any.required': '400-Birth is required',
    }),
  });
