import { check } from "express-validator";
import { Request, Response, NextFunction } from 'express'

const userValidation = [
    check('username').exists().withMessage('username required')
    .bail()
    .not().isEmpty().withMessage('username cannot be empty'),

    check('password').exists().withMessage('password required'),

    check('email').exists().withMessage('email required')
    .bail()
    .isEmail().withMessage('email must be valid'),
]

import { validationResult } from "express-validator";

const validationErrorHandler = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export { userValidation, validationErrorHandler };