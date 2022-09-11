export abstract class ApplicationError extends Error {
  abstract errorCode: number;
  abstract errorType: string;
  abstract errorDetails?: string;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, ApplicationError.prototype);
  }

  abstract serializeError(): {
    type: string;
    message: string;
    details?: string;
  };
}

//General errors (dealed with next)
//Validation errors
//Database errors
//Authentication errors
