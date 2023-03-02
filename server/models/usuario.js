//importa a database
import conn from "../config/database.js";

//mostra os usuarios
export const allUsers = (result)=>{
    conn.query('SELECT * FROM Usuario', (erro,results)=>{
        if(erro){
            console.log(erro)
            result(erro, null)
        }else{
            result(null,results)
        }
    })
}

//mostra usuario pelo id
export const usersById = (id,result) => {
    conn.query('SELECT * FROM Usuario WHERE idUsuario=?', [id],
    (erro, results)=>{
        if (erro){
            console.log(erro)
            result(erro,null)
        }else{
            result(null,results[0])
        }
    })
}

//insere usuario
export const insertUsers = (data, result)=>{
    conn.query(
        "INSERT INTO `Usuario` SET `nome`=?, `email`=?, `senha`=?, `telefone`=?, `data_nascimento`=?, `nacionalidade`=?, `genero`=?, `endereco`=?"
        ,[
            data.nome, data.email, data.senha, data.telefone, 
            data.data_nascimento, data.nacionalidade, data.genero, 
            data.endereco
        ], 
        (erro,results)=>{
        if (erro){
            console.log(erro)
            result(erro,null)
        }else{
            result(null,results)
        }
    })
}
/*
//atualiza usuario
export const modifyUser = (req,res)=>{
    console.log("Put Method Working")
    const data = [req.body.nome,req.body.email,req.params.id] //funciona no postman 
    conn.query("UPDATE `Usuario` SET `nome`=?, `email`=? WHERE `idUsuario`=?",data,
        (erro,result)=> {
        if (erro){
            console.log(erro)
            res.status(erro).send('bad')
        }else{
            res.status(200).send(result)
        }
    })
}*/

export const modifyUser = (data,id,result)=>{
    console.log("Put Method Working")
    conn.query("UPDATE `Usuario` SET `nome`=?, `email`=?, `senha`=?, `telefone`=?, `genero`=?, `endereco`=? WHERE `idUsuario`=?",
    [
        data.nome,
        data.email,
        data.senha,
        data.telefone,
        data.genero,
        data.endereco,
        id,
    ],
        (erro,results)=> {
        if (erro){
            console.log(erro)
            result(erro,null)
        }else{
            result(null,results)
        }
    })
}

// deleta um usuario no banco
export const deleteUsuarioById = (id, result) => {
    conn.query("DELETE FROM Usuario WHERE idUsuario = ?", [id], 
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    });
  };