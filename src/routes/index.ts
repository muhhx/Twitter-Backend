import { Router } from 'express';
import { version } from '../../package.json';

import { userRoutes } from './UserRoute';

export const routes = Router();

routes.get('/', (request, response) => {
  response.send(
    `Twitter API running successfully on version ${version}. Made by Murilo Santos.`
  );
});

routes.use('/user', userRoutes);
