//import express
import express from "express";

//import function do controller
import {
  showTesteRole,
  showUsers,
  showUsersById,
  createUsers,
  updateUsers,
  deleteUsuario,
  showLogin
} from "../controller/usuarios.js";

//express router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h4>APIs</h4>");
});
//mostra usuarios e hospedes
router.get("/usuario", showUsers); //pegando
//mostra usuarios e hospedes pelo id
router.get("/usuario/user/:id", showUsersById); //pegando
//cria usuario
router.post("/usuario", createUsers); //pegando no postman
//atualiza pelo id
router.put("/usuario/user/:id", updateUsers); //pegando no postman
//deleta pelo id
router.delete("/usuario/user/:id", deleteUsuario); //pegando
//mostra todos os hospedes
router.get("/usuario/teste", showTesteRole);

router.post("/usuarios/login", showLogin)

export default router;
