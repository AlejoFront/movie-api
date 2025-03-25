import {Request,Response} from 'express';
import {Movies, Actors, Genders, Directors} from 'models';


/**
 * SELECT * FROM Movies (Actor, Genero, Director)
 * @param req 
 * @param res 
 */
export const getMovies = async (req: Request, res: Response) => {
    const movies =  await Movies.findAll({include: [Actors, Genders, Directors]});
    res.json(movies);
}

export const createMovie = async (req: Request, res: Response) => {

    const {title, description, year, duration,genderId, directorId, actorIds} = req.body;
    const movie = await Movies.create({title,description, year,duration,genderId, directorId});
    if(actorIds) await movie.$set('actors',actorIds);
    res.status(201).json(movie)
}