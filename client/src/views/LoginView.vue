<template>
	<html>
	<main>
		<section>
			<form class="login" action="">
				<h1>Faça seu login!</h1>
				<label for="email">E-mail:</label>
				<input name="email" id="email" placeholder="Seu e-mail" type="email" required />
				<label for="senha">Senha:</label>
				<input name="senha" id="senha" placeholder="Sua senha" type="password" required />
				<p class="dadosInvalidos" id="dadosInvalidos">E-mail ou senha incorretos!</p>
				<router-link to="/cadastro">Não possui conta?</router-link>
				<button class="button" type="submit" id="submit" value="Confirmar" @click="validar($event)">
					<div class="button-text">Confirmar</div>
					<p class="button-arrow">→</p>
				</button>
				<a href="#EsqueceuSenha">Esqueceu sua senha?</a>
				<router-link to="/loginAdmin">É um funcionário?</router-link>
			</form>
		</section>
	</main>

	</html>
</template>

<script>
export default {
	methods: {
		validar(e) {
			e.preventDefault();

			const falhaAviso = document.querySelector('#dadosInvalidos');
			const senhaInput = document.querySelector('#senha');
			const emailInput = document.querySelector('#email');

			const replaceRegex = /[\s\n'"]/gi;
			emailInput.value = emailInput.value.replaceAll(replaceRegex, "");
			senhaInput.value = senhaInput.value.replaceAll(replaceRegex, "");

			if (senhaInput.value == "" || emailInput.value == "") {
				falhaAviso.style.display = "block";
				falhaAviso.style.opacity = 1;
				falhaAviso.textContent = "Alguns campos estão vazios!";
				return;
			}

			let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
			if (!emailRegex.test(emailInput.value)) {
				falhaAviso.style.display = "block";
				falhaAviso.style.opacity = 1;
				emailInput.style.backgroundColor = '#ffe8e7';
				falhaAviso.textContent = "O e-mail informado não existe!";
				return;
			}
			else {
				falhaAviso.style.display = "none";
				falhaAviso.style.opacity = 0;
				emailInput.style.backgroundColor = 'white';
			}

			let senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/;
			if (!senhaRegex.test(senhaInput.value)) {
				falhaAviso.style.display = "block";
				falhaAviso.style.opacity = 1;
				senhaInput.style.backgroundColor = '#ffe8e7';
				falhaAviso.textContent = "Senha incorreta (deve ter pelo menos 1 letra maiúscula, 1 minúscula, 1 número e 8 caractéres)!";
				return;
			}
			else {
				falhaAviso.style.display = "none";
				falhaAviso.style.opacity = 0;
				senhaInput.style.backgroundColor = 'white';
			}

			localStorage.setItem('email', emailInput.value);
			localStorage.setItem('senha', senhaInput.value);

			this.$router.push({ path: '/' });
		}
	}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins");

* {
	font-family: "Poppins";
}

.dadosInvalidos {
	color: red;
	opacity: 0;
	transition: 0.25s;
	margin: 0;
	display: none;
	font-size: 14px;
	padding: 0 0 1em 0;
}

/* PADRÕES */
.button-wrap {
	margin: 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
}

button.button {
	display: flex;
	padding: 1.5em 2.5em;
	margin: 1em 0 2em 0;
	align-items: center;
	text-align: center;
	flex: 0 0 auto;
	text-decoration: none;
	text-transform: uppercase;
	cursor: pointer;
	border: 1px solid #e0e0e0;
	justify-content: center;
	max-width: 50%;
	transition: 0.5s;
}

.button:hover {
	border-color: #c0c0c0;
	text-decoration: none;
}

.button-text {
	color: #333333;
	text-align: center;
	display: block;
}

.button-arrow {
	display: inline;
	padding-left: 1em;
	transition: 0.5s;
	margin: 0;
}

.button:hover .button-arrow {
	transform: translate3d(1em, 0, 0);
}

form,
.login {
	padding: 5em 2em;
	border: 1px solid #e0e0e0;
	transition: 0.5s;
	display: flex;
	flex-direction: column;
	text-align: flex-start;
	color: #333333;
}

form,
input,
select,
textarea {
	outline: 2px solid transparent;
	outline: none;
}

form:hover,
input:hover,
select:hover,
textarea:hover {
	border: 1px solid #c0c0c0;
	outline: none;
}

form:focus,
input:focus,
select:focus,
textarea:focus {
	outline: none;
	border: 1px solid #333333;
}

form h1 {
	margin: 0;
	padding: 0;
	margin-bottom: 2vh;
}

label {
	font-size: medium;
	line-height: 5vh;
}

input,
select {
	color: #333333;
	max-width: 50%;
	min-width: 25%;
	margin: 0;
	padding: 0;
	margin-bottom: 3vh;
	padding: 0.5em 0.5em;
	border: 1px solid #e0e0e0;
	transition: 0.5s;
}

option {
	font-size: 14px;
}

textarea {
	max-width: 100%;
	height: 15vh;
	resize: vertical;
	padding: 0.25em 0.5em;
	border: 1px solid #e0e0e0;
	margin-bottom: 3vh;
	transition: 0.5s;
}

form.login {
	text-align: center;
	align-items: center;
}

.white {
	color: white;
}

.black {
	color: #333333;
}
</style>