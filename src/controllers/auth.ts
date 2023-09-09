import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../model/user';
import bcrypt from 'bcrypt';

const login = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  
  const authCorrect = user === null ? false : await bcrypt.compare(password, user.password);  
  
  if (!authCorrect) {
    res.status(StatusCodes.UNAUTHORIZED).send({ message: 'Invalid username or password' });
    return;
  }
  
  res.status(StatusCodes.OK).send(user);
});

export default { login };
