import express from 'express';
import {getGenders,createGender} from 'controllers/gender.controller';

const router = express.Router();

router.get('/', getGenders);
router.post('/',createGender);

export default router;