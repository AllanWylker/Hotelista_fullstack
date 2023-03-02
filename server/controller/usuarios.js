//import functions da models
import { allUsers, usersById, insertUsers, modifyUser, deleteUsuarioById } from "../models/usuario.js"

export const showUsers = (req,res) =>{
    allUsers((erro,results)=>{
        if(erro){
            res.send(erro)
        }else{
            res.json(results)
        }
    })
}

export const showUsersById = (req,res)=>{
    usersById(req.params.id, (erro,results)=>{
        if(erro){
            res.send(erro)
        }else{
            res.json(results)
        }
    })
}

export const createUsers = (req,res)=>{
    const data = req.body
    insertUsers(data, (erro,results)=>{
        if(erro){
            res.send(erro)
        }else{
            res.json(results)
        }
    })
}
/*
//Atualiza usuario
export const updateUsers = (req,res)=>{
    const nome = req.body.nome;
    const email = req.params.email
    modifyUser(nome, email, (erro,results)=>{
        if(erro){
            res.send(erro)
        }else{
            res.json(results)
        }
    })

}
*/
export const updateUsers = (req,res)=>{
    const data = req.body
    const id = req.params.id
    modifyUser(data,id, (err,results)=>{
        if(err){
            res.send(err)
        }else{
            res.json(results)
        }
    })

}
// Deleta o usuario
export const deleteUsuario = (req, res) => {
    const id = req.params.id;
    deleteUsuarioById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}