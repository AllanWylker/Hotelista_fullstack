import conn from "../config/database.js";

export const modelAllAvaliacoes = (result) => {
    conn.query('SELECT * FROM avaliacoes', (erro, results) => {
        if(erro) {
            console.log(erro)
            result(erro, null)
        } else {
            result(null, results)
        }
    })
}


export const modelInsertAvaliacoes = (dados, result) => {
    console.log("modelInsertAvaliacoes", dados);
    const values = [dados.idAvaliacoes, dados.dataAvaliacao, dados.pontuacao, dados.descricao, dados.idUsuario]
    conn.query(
        "INSERT INTO avaliacoes (idAvaliacoes, dataAvaliacao, pontuacao, descricao, idUsuario ) VALUES (?, ?, ?, ?, ?)"
        , values, (erro, results) => {
            if (erro) {
                console.log(erro)
                result(erro, null)
            } else {
                result(null, results)
            }
        }
    )
}