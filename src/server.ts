import express from 'express';
import http from 'http';
import cors from 'cors';
import 'dotenv/config';
import 'express-async-errors';

import { version, author } from '../package.json';
import { Constants } from './constants';
import { routes } from './routes';
import { errorHandler } from './middlewares/errorHandler';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(`/api/v${version}`, routes);
    this.server.use(errorHandler);
  }
}

const PORT = Constants.PORT;
const app = new App();
const server = http.createServer(app.server);

server.listen(PORT, () => {
  console.log(`[Twitter API] v${version}, by ${author}`);
  console.log(`[Twitter API] Application currently running on port ${PORT}...`);
});
