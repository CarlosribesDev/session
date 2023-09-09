import express from 'express';
import { UserRouter, AuthRouter } from './routes';
import './db/mogoConnection';
import { errorMiddelWare, logMiddelWare, validationErrorMiddelWare } from './middelware';

const app = express();

app.use(express.json());
app.use(logMiddelWare);
app.use(validationErrorMiddelWare);

app.use('/api/user', UserRouter);
app.use('/api/auth', AuthRouter);

app.use(errorMiddelWare);

export default app;

