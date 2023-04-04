import conn from "../config/database.js";

/*export async function selectAcomodacoes(){
    const connect = await conecta()
    const [rows] = await connect.query('SELECT * FROM Acomodacoes')
    console.log(rows)
    return JSON.stringify(rows)
}
selectAcomodacoes()*/

export const allAcomodacoes = (result) => {
    conn.query('SELECT * FROM Acomodacoes', (erro, results) => {
        if(erro){
            console.log(erro)
            result(erro, null)
        } else {
            result(null, results)
        }
    })
}