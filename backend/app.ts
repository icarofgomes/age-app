import express from 'express';
const cors = require('cors');
import { domainError, joiError } from './middlerares';

import { userRouter } from './routes';
import { user } from './utils/joiSchemas';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userRouter);

app.use(joiError);
app.use(domainError);


export default app;
