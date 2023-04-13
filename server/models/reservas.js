import conn from "../config/database.js";

export const modelAllReservas = (result) => {
    conn.query('SELECT * FROM Reservas', (erro, results) => {
        if(erro) {
            console.log(erro)
            result(erro, null)
        } else {
            result(null, results)
        }
    })
}

export const modelReservasById = (id, result) => {
    conn.query('SELECT * FROM Reservas WHERE idReservas=?', [id], (erro, results) => {
        if (erro) {
            console.log(erro)
            result(erro, null)
        } else {
            result (null, results[0])
        }
    })
}

export const modelInsertReserva = (dados, result) => {
    console.log("modelInsertUsers", dados);
    const values = [dados.idReservas, dados.data_checkin, dados.data_checkout, dados.qtd_pessoas,
                    dados.valor_total_reserva, dados.idUsuario, dados.idAcomodacoes]
    conn.query("INSER INTO Reservas (idReservas, data_checkin, data_checkout, qtd_pessoas, valor_total_reserva, idUsuario, idAcomodacoes) VALUES (?, ?, ?, ?, ?, ?, ?)", 
    values, (erro, results) => {
        if(erro) {
            console.log(erro)
            result(erro, null)
        } else {
            result(null, results)
        }
    } 
    )
}

export const modelModifyReserva = (data, id, result) => {
    console.log("Modify Reservas OK")
    conn.query("UPDATE `Reservas` SET `data_checkin` = ?, `data_checkout` = ?, `qtd_pessoas` = ?, `valor_total_reserva` = ?, `idAcomodacoes` = ? WHERE `idReservas` = ?",
    [
        data.data_checkin,
        data.data_checkout,
        data.qtd_pessoas,
        data.valor_total_reserva,
        data.idAcomodacoes,
        id,
    ],
        (erro, results) => {
            if (erro) {
                console.log(erro)
                result(erro, null)
            } else {
                result(null, results)
            }
        })
}

export const modelDeleteReserva = (id, result) => {
    conn.query("DELETE FROM Reservas WHERE idReservas = ?", [id],
    (erro, results) => {
        if(erro) {
            console.log(erro)
            result(erro, null)
        } else {
            result(null, results)
        }
    })
}