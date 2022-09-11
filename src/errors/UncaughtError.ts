import { ApplicationError } from './ApplicationError';

export class UncaughtError extends ApplicationError {
  public errorCode = 500;
  public errorType = 'UNCAUGHT_ERROR';
  public errorDetails?: string;

  constructor(error: Error) {
    super('Some unknown error ocurred in our application.');

    this.errorDetails = error.message;

    Object.setPrototypeOf(this, UncaughtError.prototype);
  }

  public serializeError() {
    return {
      type: this.errorType,
      message: this.message,
      details: this.errorDetails
    };
  }
}
