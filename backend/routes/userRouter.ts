import express from 'express';
import userController from '../controllers/userController';
import * as middlewares from '../middlerares';
import * as joiSchema from '../utils/joiSchemas';

const userRouter = express.Router();

userRouter.post(
    '/',
    middlewares.validateBody(joiSchema.user),
    userController.create,
)

userRouter.get(
    '/',
    userController.getAll,
)

export default userRouter;
