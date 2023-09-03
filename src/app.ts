import express from 'express';
import UserRouter from './routes/user';
import './db/mogoConnection';
import { errorMiddelWare, logMiddelWare } from './middelware';

const app = express();

app.use(express.json());
app.use(logMiddelWare);

app.use('/api/user', UserRouter);

app.use(errorMiddelWare);

export default app;

