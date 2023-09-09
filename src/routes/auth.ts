import { Router } from 'express';
import AuthController  from '../controllers/auth';
import { loginValidation } from '../validation/auth';
import { validationErrorMiddelWare } from '../middelware';

const router = Router();

router.route('/login')
  .post(loginValidation, validationErrorMiddelWare, AuthController.login);

export default router;

