import express from 'express';
import { controllerShowReservas } from '../controller/reservas.js';

const router = express.Router()

router.get('/reservas', controllerShowReservas)

export default router