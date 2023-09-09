import { Router } from 'express';
import UserController from '../controllers/user';
import { newUserValidation, userTypeValidation } from '../validation/user';

const router = Router();

router.use(userTypeValidation);

router.route('/')
  .get(UserController.getAllUsers)
  .post(newUserValidation, UserController.createUser);

router.route('/:username')
  .get(UserController.getUserByUsername)
  .patch(UserController.patchUser)
  .delete(UserController.deleteUser);

export default router;