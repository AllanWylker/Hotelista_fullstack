import bcrypt from "bcryptjs";

function criptografarSenha(senha){
	const salt = bcrypt.genSaltSync(10)
	const hash = bcrypt.hashSync(senha, salt)
	return hash
}

function descriptografarSenha(senha, senhaCripto){
    const comparaSenha = bcrypt.compareSync(senha, senhaCripto)
    return comparaSenha
}

export default {criptografarSenha, descriptografarSenha}