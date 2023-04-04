import { modelAllAvaliacoes, modelInsertAvaliacoes } from "../models/avaliacoes.js"

export const controllerShowAvaliacoes= (req, res) => {
    modelAllAvaliacoes ((erro, results) => {
        if(erro) {
            res.send(erro)
        } else {
            res.json(results)
        }
    })
}

export const controllerCreateAvaliacoes = (req, res) => {
    const dados = req.body
    modelInsertAvaliacoes(dados, (erro, results) => {
        if (erro) {
            res.send(erro)
        } else {
            res.json(results)
        }
    })
}