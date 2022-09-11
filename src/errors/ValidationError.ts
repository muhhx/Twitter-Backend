import { ApplicationError } from './ApplicationError';
import { ValidationError as YupValidationError } from 'yup';

interface IValidation {
  field: string;
  message: string;
}

export class ValidationError extends ApplicationError {
  public errorCode = 400;
  public errorType = 'VALIDATION_ERROR';
  public errorDetails =
    'Something went wrong when validating the request body.';
  public validations: IValidation[];

  constructor(err: YupValidationError) {
    super('Validation error.');

    this.validations = err.inner.map((error) => {
      return {
        field: error.path!,
        message: error.message
      };
    });

    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  public serializeError(): {
    type: string;
    message: string;
    details?: string;
    validations: IValidation[];
  } {
    return {
      type: this.errorType,
      message: this.message,
      details: this.errorDetails,
      validations: this.validations
    };
  }
}
