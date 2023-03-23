import express from 'express';
import { controllerShowAvaliacoes, controllerCreateAvaliacoes } from '../controller/avaliacoes.js';

const router = express.Router()

router.get('/avaliacoes', controllerShowAvaliacoes)
router.get('/avaliacoes/:id', controllerCreateAvaliacoes)

export default router