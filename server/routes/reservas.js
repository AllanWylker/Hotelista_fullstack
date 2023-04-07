import express from 'express';
import { controllerShowReservas, controllerShowReservasById, controllerInsertReserva, controllerModifyReserva, controllerDeleteReserva } from '../controller/reservas.js';

const router = express.Router()

router.get('/reservas', controllerShowReservas)
router.get('/reservas/:id', controllerShowReservasById)

router.post('/reservas', controllerInsertReserva)
router.put('/reservas/:id', controllerModifyReserva)
router.delete('/reservas/:id', controllerDeleteReserva)

export default router