import { check } from 'express-validator';

const loginValidation = [
  check('username')
    .exists().withMessage('username required')
    .bail()
    .not().isEmpty().withMessage('username cannot be empty')
    .isString().withMessage('username must be a string'),

  check('password')
    .exists().withMessage('password required')
    .bail()
    .isString().withMessage('password must be a string'),

];

export { loginValidation };