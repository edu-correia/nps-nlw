import { Router } from 'express';

import {UserController} from './controllers/UserController';
import {SurveysController} from './controllers/SurveysController';

const routes = Router();

const userController = new UserController();
const surveysController = new SurveysController();

routes.post("/users", userController.create);
routes.post("/surveys", surveysController.create);
routes.get("/surveys", surveysController.show);

export {routes};