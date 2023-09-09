import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../model/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  
  const authCorrect = !user ? false : await bcrypt.compare(password, user.password);  
  
  if (!user || !authCorrect) {
    res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Invalid username or password' });
    return;
  }

  const userForToken = {
    id: user._id,
    username: user.username,
  };

  const token = jwt.sign(userForToken, process.env.SECRET_KEY || 'secret');
  
  res.status(StatusCodes.OK).send(token);
});

export default { login };
