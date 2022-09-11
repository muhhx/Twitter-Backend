import { Request, Response, NextFunction } from 'express';
import { AnySchema, ValidationError as YupValidationError } from 'yup';
import { ValidationError } from '../errors/ValidationError';

export const validationHandler =
  (schema: AnySchema) =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const validatedRequestBody = await schema.validate(req.body, {
        abortEarly: false
      });

      req.body = validatedRequestBody;

      next();
    } catch (err) {
      if (err instanceof YupValidationError) {
        throw new ValidationError(err);
      }

      next(err);
    }
  };
