import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {  
  console.log(req.method);
  console.log(req.path);
  console.log(req.body);
  console.log('------------');
  next();
};