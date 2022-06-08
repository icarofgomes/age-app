import express from 'express';
import { domainError, joiError } from './middlerares';

import { userRouter } from './routes';

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.use(joiError);
app.use(domainError);

export default app;
