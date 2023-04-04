import { allAcomodacoes } from "../models/acomodacoes.js"

export const showAcomodacoes = (req, res) => {
    allAcomodacoes((erro, results) => {
        if(erro) {
            res.send(erro)
        } else {
            res.json(results)
        }
    })
}