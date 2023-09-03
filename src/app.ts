import express from 'express';
import User from './model/user';
import UserRouter from './routes/user';
import './db/mogoConnection'
import { Request, Response, NextFunction } from 'express'

const app = express()

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).send('¡Algo salió mal!');
});

app.use(express.json())
app.use('/api/user',UserRouter)

export default app
