import {Request,Response} from 'express';
import {Directors} from 'models';


/**
 * SELECT * FROM Directors
 * @param req 
 * @param res 
 */
export const getDirectors = async (req: Request, res: Response) => {
    res.json(await Directors.findAll())
}

export const createDirector = async (req: Request, res: Response) => {
    res.status(201).json(await Directors.create(req.body))
}