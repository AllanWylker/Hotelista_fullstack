import express from 'express';

import { showAcomodacoes } from '../controller/acomodacoes.js';

const router = express.Router()

router.get('/acomodacoes', showAcomodacoes)

export default router