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

import { checkToken } from "../auth/token.validation.js";

//express router
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h4>APIs</h4>");
});
//mostra usuarios e hospedes
router.get("/usuario", showUsers); 

//mostra usuarios e hospedes pelo id
router.get("/usuario/user/:id", checkToken, showUsersById); 

//cria usuario
router.post("/usuario", createUsers);

//atualiza pelo id
router.put("/usuario/user/:id", checkToken, updateUsers);

//deleta pelo id
router.delete("/usuario/user/:id",  deleteUsuario); 

//mostra todos os hospedes
router.get("/usuario/teste", showTesteRole);


router.post("/usuario/login", showLogin)



export default router;
