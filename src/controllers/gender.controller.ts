import {Request,Response} from 'express';
import {Genders} from 'models';


/**
 * SELECT * FROM Genders
 * @param req 
 * @param res 
 */
export const getGenders = async (req: Request, res: Response) => {
    res.json(await Genders.findAll())
}

export const createGender = async (req: Request, res: Response) => {
    res.status(201).json(await Genders.create(req.body))
}