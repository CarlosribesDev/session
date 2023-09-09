import { check } from 'express-validator';

const newUserValidation = [
  check('username').exists().withMessage('username required')
    .bail()
    .not().isEmpty().withMessage('username cannot be empty'),

  check('password').exists().withMessage('password required'),

  check('email').exists().withMessage('email required')
    .bail()
    .isEmail().withMessage('email must be valid'),
];

const userTypeValidation = [
  check('username').isString().withMessage('username must be a string'),
  check('password').isString().withMessage('password must be a string'),
  check('email').isString().withMessage('email must be a string')
];

export { newUserValidation, userTypeValidation };