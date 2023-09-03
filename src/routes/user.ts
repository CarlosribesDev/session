import { Router } from 'express';
import UserController from '../controllers/user';
import { userValidation, validationErrorHandler } from './validation';

const router = Router();

router.route('/')
  .get(UserController.getAllUsers)
  .post(userValidation, validationErrorHandler, UserController.createUser);

router.route('/:username')
  .get(UserController.getUserByUsername)
  .patch(UserController.patchUser)
  .delete(UserController.deleteUser);

export default router;

