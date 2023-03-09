//importa a database
import conn from "../config/database.js";

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

//cria usuario
export const insertUsers = (dados, callback) => {
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
        return callback(erro, null);
      } else {
        return callback(null, results);
      }
    }
  );
};

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
export const usersByEmail = (email, callback) => {
  conn.query("SELECT * FROM Usuario WHERE email = ?",
  [email],
  (erro, results) => {
    if (erro) {
      console.log(erro);
      callback(erro, null);
    } else {
      callback(null, results[0]);
    }
  });
};