import { Router } from 'express';
import { UserController } from '../controllers/UserController';

import { validationHandler } from '../middlewares/validationHandler';
import { object, string, SchemaOf } from 'yup';

interface IRegisterUser {
  name?: string;
  username: string;
  password: string;
  email: string;
}

const registerUserSchema: SchemaOf<IRegisterUser> = object({
  name: string().max(50),
  username: string().min(6).max(15).required(),
  email: string().email().required(),
  password: string().required()
});

export const userRoutes = Router();

userRoutes.post(
  '/',
  validationHandler(registerUserSchema),
  UserController.register
);
