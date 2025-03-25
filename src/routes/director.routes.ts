import express from 'express';
import {getDirectors,createDirector} from 'controllers/director.controller';

const router = express.Router();

router.get('/', getDirectors);
router.post('/',createDirector);

export default router;