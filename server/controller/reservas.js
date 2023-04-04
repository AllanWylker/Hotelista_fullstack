import { modelAllReservas } from "../models/reservas.js"

export const controllerShowReservas = (req, res) => {
    modelAllReservas((erro, results) => {
        if(erro) {
            res.send(erro)
        } else {
            res.json(results)
        }
    })
}