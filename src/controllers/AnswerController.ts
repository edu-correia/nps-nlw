import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {
    async execute(req: Request, res: Response){
        const {id} = req.params;
        const {u} = req.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({id: String(u)});

        if(!surveyUser) return res.status(400).json({error: "Survey User does not exists"});

        surveyUser.value = Number(id);

        await surveysUsersRepository.save(surveyUser);

        return res.status(200).json(surveyUser);
    }
}

export {AnswerController};