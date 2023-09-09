import User from '../model/user';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';

const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(StatusCodes.OK).send(users);
});

const getUserByUsername = asyncHandler(async (req: Request, res: Response) => {
  const { username } = req.params;
  const user = await User.find({ username });

  if (user.length === 0) {
    res.status(StatusCodes.NOT_FOUND).send({
      message: 'User not found'
    });
    return;
  }

  res.status(StatusCodes.OK).send(user[0]);
});

const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, passwordHash });
  await newUser.save();
  res.status(StatusCodes.CREATED).send(newUser);
});

const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const { username } = req.params;
  
  const result = await User.findOneAndDelete({ username });
  
  if (!result) {
    res.status(StatusCodes.NOT_FOUND).send({ message: 'User not found' });
    return;
  }
  
  res.status(StatusCodes.NO_CONTENT).end();
});

const patchUser = asyncHandler(async (req: Request, res: Response) => {
  const { username } = req.params;
  const { email, password } = req.body;
  
  const user = await User.findOne({ username });
    
  if (!user) {
    res.status(StatusCodes.NOT_FOUND).send({
      message: 'User not found'
    });
    return;
  }

  if (email) {
    user.email = email;
  }

  if (password) {
    const passwordHash = await bcrypt.hash(password, 10);
    user.password = passwordHash;
  }
  
  await user.save();
  
  res.status(StatusCodes.OK).send(user);
});

export default {
  getAllUsers,
  createUser,
  deleteUser,
  getUserByUsername,
  patchUser
};

