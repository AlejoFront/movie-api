import {Request,Response} from 'express';
import {Actors} from 'models';


/**
 * SELECT * FROM Actors
 * @param req 
 * @param res 
 */
export const getActors = async (req: Request, res: Response) => {
    res.json(await Actors.findAll())
}

export const createActor = async (req: Request, res: Response) => {
    res.status(201).json(await Actors.create(req.body))
}