import express from 'express';
import {getActors,createActor} from 'controllers/actor.controller';

const router = express.Router();

router.get('/', getActors);
router.post('/',createActor);

export default router;