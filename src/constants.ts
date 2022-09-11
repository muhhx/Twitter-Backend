import dotenv from 'dotenv';

dotenv.config();

export class Constants {
  public static readonly PORT = process.env.PORT
    ? parseInt(process.env.PORT)
    : 5000;
}
