//importa a database
import conn from "../config/database.js";

//import pkg from "jsonwebtoken";
//const { Jwt } = pkg;
//import { signupValidation, loginValidation } from "../validation.js";

export const testeRole = (result) => {
  conn.query(
    "SELECT email,senha FROM Usuario WHERE role='usuario'",
    (erro, results) => {
      if (erro) {
        console.log(erro);
      } else {
        result(null, results);
      }
    }
  );
};

//mostra os usuarios
export const allUsers = (result) => {
  conn.query("SELECT * FROM Usuario", (erro, results) => {
    if (erro) {
      console.log(erro);
      result(erro, null);
    } else {
      result(null, results);
    }
  });
};

//mostra usuario pelo id
export const usersById = (id, result) => {
  conn.query(
    "SELECT * FROM Usuario WHERE idUsuario=?",
    [id],
    (erro, results) => {
      if (erro) {
        console.log(erro);
        result(erro, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};
export const insertUsers = (dados, result) => {
  console.log("insertUsers", dados);
  const values = [
    dados.nome,
    dados.email,
    dados.senha,
    dados.telefone,
    dados.data_nascimento,
    dados.nacionalidade,
    dados.genero,
    dados.endereco,
  ];
  conn.query(
    "INSERT INTO Usuario (nome,email,senha,telefone,data_nascimento,nacionalidade,genero,endereco) VALUES (?,?,?,?,?,?,?,?)",
    values,
    (erro, results) => {
      if (erro) {
        console.log(erro);
        result(erro, null);
      } else {
        result(null, results);
      }
    }
  );
};
/*
export const criptSenha =
  (signupValidation,
  (req, res) => {
    bcrypt.hash(req.body.senha, 10, (err, hash) => {
      if (err) {
        return res.status(500).send({
          msg: err,
        });
      } else {
        // has hashed pw => add to database
        conn.query(
          `INSERT INTO Usuario (nome, email, senha) VALUES ('${
            req.body.nome
          }', ${conn.escape(req.body.email)}, ${conn.escape(hash)})`,
          (err, result) => {
            if (err) {
              throw err;
              return res.status(400).send({
                msg: err,
              });
            }
            return res.status(201).send({
              msg: "The user has been registerd with us!",
            });
          }
        );
      }
    });
  });*/

//insere usuario
/*export const insertUsers = (req,res, data, result)=>{
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
}*/

/**
         // username is available
            bcrypt.hash(req.body.senha, 10, (err, hash) => {
              if (err) {
                return res.status(500).send({
                  msg: err,
                });
              } else {
                // has hashed pw => add to database
                conn.query(
                  `INSERT INTO Usuario (nome, email, senha, telefone, data_nascimento,
                    nacionalidade, genero, endereco) VALUES ('${
                    req.body.nome
                  }', ${conn.escape(hash)}`, 
                  [data.email,data.telefone, 
                  data.data_nascimento, data.nacionalidade, data.genero, 
                  data.endereco],
                  (err, result) => {
                    if (err) {
                      throw err;
                      return res.status(400).send({
                        msg: err,
                      });
                    }
                    return res.status(201).send({
                      msg: "The user has been registerd with us!",
                    });
                  }
                );
              }
            });
*/

export const modifyUser = (data, id, result) => {
  console.log("Put Method Working");
  conn.query(
    "UPDATE `Usuario` SET `nome`=?, `email`=?, `senha`=?, `telefone`=?, `genero`=?, `endereco`=? WHERE `idUsuario`=?",
    [
      data.nome,
      data.email,
      data.senha,
      data.telefone,
      data.genero,
      data.endereco,
      id,
    ],
    (erro, results) => {
      if (erro) {
        console.log(erro);
        result(erro, null);
      } else {
        result(null, results);
      }
    }
  );
};

// deleta um usuario no banco
export const deleteUsuarioById = (id, result) => {
  conn.query(
    "DELETE FROM Usuario WHERE idUsuario = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//login usuario
export const getLogin = (email, senha, result) => {
  conn.query("SELECT idUsuario, nome, role FROM Usuario WHERE email = ? and senha = ?",
  [email, senha],
  (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};