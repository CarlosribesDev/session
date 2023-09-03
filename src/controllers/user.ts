import User from '../model/user';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.status(StatusCodes.OK).send(users);
};

const getUserByUsername = async (req: Request, res: Response) => {
  const { username } = req.params;
  const user = await User.find({ username });

  if (user.length === 0) {
    res.status(StatusCodes.NOT_FOUND).send({
      message: 'User not found'
    });
    return;
  }

  res.status(StatusCodes.OK).send(user[0]);
};

const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  await newUser.save();
  res.status(StatusCodes.CREATED).send(newUser);
};

const deleteUser = async (req: Request, res: Response) => {
  const { username } = req.params;
  await User.findOneAndDelete({ username });
  res.status(StatusCodes.NO_CONTENT);
};

const patchUser = async (req: Request, res: Response) => {
  const { username } = req.params;
  const { email, password } = req.body;
  
  // Busca al usuario por username.
  const user = await User.findOne({ username });
    
  // Si el usuario no existe, devuelve un error 404 (Not Found).
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
    user.password = password;
  }
  
  await user.save();
  
  res.status(StatusCodes.OK).send(user);
};


export default {
  getAllUsers,
  createUser,
  deleteUser,
  getUserByUsername,
  patchUser
};
