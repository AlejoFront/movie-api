import express from 'express';
import {getMovies,createMovie} from 'controllers/movie.controller';

const router = express.Router();

router.get('/', getMovies);
router.post('/',createMovie);

export default router;