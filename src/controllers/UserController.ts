import { Request, Response, NextFunction } from 'express';
import database from '../services/prisma';

export class UserController {
  public static async register(
    _req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const createdUser = await database.user.create({
        data: {
          name: 'Murilo',
          username: 'muhhx',
          email: 'muriloue@gmail.com',
          password: '3124f'
        }
      });

      return res.status(201).json(createdUser);
    } catch (err) {
      next(err);
    }
  }
}
