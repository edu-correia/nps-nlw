import { Router } from 'express';

import {UserController} from './controllers/UserController';
import {SurveysController} from './controllers/SurveysController';
import {SendMailController} from './controllers/SendMailController';
import {AnswerController} from './controllers/AnswerController';
import {NpsController} from './controllers/NpsController';

const routes = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

routes.post("/users", userController.create);

routes.get("/surveys", surveysController.show);
routes.post("/surveys", surveysController.create);

routes.post("/sendMail", sendMailController.execute);

routes.get("/answers/:id", answerController.execute);

routes.get("/nps/:survey_id", npsController.execute);

export {routes};