import pkg from 'bcrypt';
const {genSaltSync, hashSync, compareSync} = pkg;

import jwt from 'jsonwebtoken'

//import functions da models
import { testeRole, allUsers, usersById, insertUsers, modifyUser, deleteUsuarioById, usersByEmail } from "../models/usuario.js"

export const showTesteRole = (req,res)=>{
    testeRole((erro,results)=>{
        if(erro){
            res.send(erro)
        }else{
            res.json(results)
        }
    })
    
}

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
    const salt = genSaltSync(10)
    data.senha = hashSync(data.senha, salt)
    insertUsers(data, (erro,results) =>{
        if(erro){
            console.log(erro)
            return res.status(500).json({
                success:0,
                message: "Database connection error"
            })
        }else{
            console.log(results)
            return res.status(200).json({
                success:1,
                data: results
            })
        }
    })
}

//Atualiza usuario
export const updateUsers = (req,res)=>{
    const data = req.body
    const id = req.params.id
    const salt = genSaltSync(10)
    data.senha = hashSync(data.senha, salt)
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
export const showLogin = (req, res) => {
    const { email, password } = req.body
    //console.log(email,password)
    usersByEmail(email, (erro, results) => {
        if (erro){
            console.log(erro);
        }
        if(!results){
            return res.json({
                success: 0,
                data: "Invalid email or senha"
            })
        }
        const result = compareSync(password, results.senha)
        //console.log(results.senha)
        if(result){
            results.senha = undefined;
            const jsontoken = jwt.sign({ result: results}, "qwe1234", {
                expiresIn: "1d"
            })
            console.log({
                success:1,
                message: "login successfully",
                token: jsontoken
            })
            
            /*res.status(201).send({
                message:'Login feito com sucesso'
            })*/
        } else{
            return res.json({
                success: 0,
                data: "Invalid email or senha"
            })
        }
    });
}