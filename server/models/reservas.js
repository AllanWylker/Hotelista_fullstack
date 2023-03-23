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