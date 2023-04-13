import { modelAllReservas, modelReservasById, modelInsertReserva, modelModifyReserva, modelDeleteReserva } from "../models/reservas.js"

export const controllerShowReservas = (req, res) => {
    modelAllReservas((erro, results) => {
        if(erro) {
            res.send(erro)
        } else {
            res.json(results)
        }
    })
}

export const controllerShowReservasById = (req, res) => {
    modelReservasById(req.params.id, (erro, results) => {
        if (erro) {
            res.send(erro)
        } else {
            res.json(results)
        }
    })
}

export const controllerInsertReserva = (req, res) => {
    const dados = req.body
    modelInsertReserva (dados, (erro, results) => {
        if(erro) {
            res.send(erro)
        } else {
            res.json(results)
        }
    })
}

export const controllerModifyReserva = (req, res) => {
    const data = req.body
    const id = req.params.id
    modelModifyReserva (data, id, (erro, results) => {
        if(erro) {
            res.send(erro)
        } else {
            res.json(results)
        }
    })
}

export const controllerDeleteReserva = (req, res) => {
    const id = req.params.id
    modelDeleteReserva (id, (erro, results) => {
        if(erro) {
            res.send(erro)
        } else {
            res.json(results)
        }
    })
}