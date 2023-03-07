<template>
	<html>
	<main>
		<section>
			<form class="login" action="">
				<h1>Entre na aréa administrativa dos funcionários!</h1>

				<h2>Faça seu cadastro:</h2>

				<div class="grid">
					<div class="userInputs">
						<label for="codigo">Código de funcionário:</label>
						<input name="codigo" id="codigo" placeholder="Insira o código do seu crachá" type="text" required>

						<label for="email">E-mail:</label>
						<input name="email" id="email" placeholder="Insira o seu e-mail da empresa" type="text" required>

						<label for="nome">Nome completo:</label>
						<input name="nome" id="nome" placeholder="Insira o seu nome completo" type="text" required>

						<label for="tempoEmpresa">Qual o seu tempo de empresa (em meses completos)?</label>
						<input name="tempoEmpresa" id="tempoEmpresa" type="number" value="0" required>
					</div>

					<div class="atividadeatual-wrap">
						<h3>Atividade atual:</h3>
						<div class="atividadeatual">
							<div class="atividade">
								<input type="checkbox" name="atividade" id="recepcao" value="Recepção">
								<label for="recepcao">Recepção</label>
							</div>
							<div class="atividade">
								<input type="checkbox" name="atividade" id="restaurante" value="Restaurante">
								<label for="restaurante">Restaurante</label>
							</div>
							<div class="atividade">
								<input type="checkbox" name="atividade" id="garagem" value="Garagem">
								<label for="garagem">Garagem</label>
							</div>
							<div class="atividade">
								<input type="checkbox" name="atividade" id="servicoDeQuarto" value="Serviço de Quarto">
								<label for="servicoDeQuarto">Serviço de Quarto</label>
							</div>
							<div class="atividade">
								<input type="checkbox" name="atividade" id="gerencia" value="Gerência">
								<label for="gerencia">Gerência</label>
							</div>
							<div class="atividade">
								<input type="checkbox" name="atividade" id="concierge" value="Concierge">
								<label for="concierge">Concierge</label>
							</div>
							<div class="atividade">
								<input type="checkbox" name="atividade" id="supervisorDeAndar" value="Supervisor de Andar">
								<label for="supervisorDeAndar">Supervisor de Andar</label>
							</div>
						</div>
					</div>
				</div>

				<div class="grid">
					<div class="griditem-wrap">
						<h3>Férias</h3>
						<div class="griditem">
							<input type="radio" name="ferias" id="feriasS">
							<label for="feriasS">Sim</label>
						</div>
						<div class="griditem">
							<input type="radio" name="ferias" id="feriasN">
							<label for="feriasN">Não</label>
						</div>
					</div>
					<div class="griditem-wrap">
						<h3>Afastamento</h3>
						<div class="griditem">
							<input type="radio" name="afastamento" id="afastamentoS">
							<label for="afastamentoS">Sim</label>

						</div>
						<div class="griditem">
							<input type="radio" name="afastamento" id="afastamentoN">
							<label for="afastamentoN">Não</label>
						</div>
					</div>
				</div>

				<p class="dadosInvalidos" id="dadosInvalidos">E-mail ou senha incorretos!</p>

				<button class="button" type="submit" id="submit" value="Confirmar" @click="validar($event)">
					<div class="button-text">Confirmar</div>
					<p class="button-arrow">→</p>
				</button>
			</form>
		</section>
	</main>

	</html>
</template>

<script>
export default {
	name: "LoginAdmin",
	methods: {
		validar(e) {
			e.preventDefault();

			const falhaAviso = document.querySelector('#dadosInvalidos');
			const codigoInput = document.querySelector('#codigo');
			const emailInput = document.querySelector('#email');
			const nomeInput = document.querySelector('#nome');
			const tempoEmpresa = document.querySelector('#tempoEmpresa');

			const feriasS = document.querySelector('#feriasS');
			const feriasN = document.querySelector('#feriasN');

			const afastamentoS = document.querySelector('#afastamentoS');
			const afastamentoN = document.querySelector('#afastamentoN');

			const atividades = document.getElementsByName('atividade');
			let atividadesAtuais = [];
			atividades.forEach(atividade => {
				if (atividade.checked)
					atividadesAtuais.push(atividade.value);
			});

			if (atividadesAtuais.length === 0) {
				falhaAviso.style.display = "block";
				falhaAviso.style.opacity = 1;
				falhaAviso.textContent = "Selecione pelo menos uma atividade!";
				return;
			}

			const replaceRegex = /[\s\n'"]/gi;
			emailInput.value = emailInput.value.replaceAll(replaceRegex, "");
			codigoInput.value = codigoInput.value.replaceAll(replaceRegex, "");

			if (codigoInput.value == "" || emailInput.value == "" || nomeInput.value == "" || tempoEmpresa.value <= 0) {
				falhaAviso.style.display = "block";
				falhaAviso.style.opacity = 1;
				falhaAviso.textContent = "Alguns campos estão vazios!";
				return;
			}

			if ((!feriasS.checked && !feriasN.checked) || (!afastamentoS.checked && !afastamentoN.checked)) {
				falhaAviso.style.display = "block";
				falhaAviso.style.opacity = 1;
				falhaAviso.textContent = "Selecione uma das opções de \"sim\" ou \"não\" sobre férias e afastamento!";
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
			if (!senhaRegex.test(codigoInput.value)) {
				falhaAviso.style.display = "block";
				falhaAviso.style.opacity = 1;
				codigoInput.style.backgroundColor = '#ffe8e7';
				falhaAviso.textContent = "Código de funcionário incorreto! Cheque o código do seu crachá!";
				return;
			}
			else {
				falhaAviso.style.display = "none";
				falhaAviso.style.opacity = 0;
				codigoInput.style.backgroundColor = 'white';
			}

			let ferias = feriasS.checked;
			let afastamento = afastamentoS.checked;

			localStorage.setItem('email', emailInput.value);
			localStorage.setItem('codigo', codigoInput.value);
			localStorage.setItem('nome', nomeInput.value);
			localStorage.setItem('tempoEmpresa', tempoEmpresa.value);
			localStorage.setItem('ferias', ferias);
			localStorage.setItem('afastamento', afastamento);
			localStorage.setItem('atividadeAtual', atividadesAtuais);

			this.$router.push({ path: '/homeAdmin' });
		}
	}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");

* {
	font-family: "Poppins";
}

h2 {
	text-align: center;
}

.atividadeatual-wrap {
	display: flex;
	flex-direction: column;
	width: 50%;
	max-width: 50%;
	min-width: 50%;
	margin: 0;
	padding: 0;
	align-items: center;
}

.atividadeatual {
	display: flex;
	flex-direction: column;
}

.atividade {
	display: flex;
	flex-direction: row;
	align-items: baseline;
	border-bottom: 1px solid #cdcd;
	min-width: 20em;
}

.atividade input {
	width: 2em;
	max-width: 2em;
	min-width: 2em;
	margin: 0;
	padding: 1em 2em;
}

.grid {
	display: flex;
	flex-direction: row;
	width: 100%;
	padding-bottom: 2em;
	margin-bottom: 2em;
	border-bottom: 1px solid #3333;
}

.griditem-wrap {
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.griditem {
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: baseline;
	justify-content: center;
}

.griditem input {
	width: 2em;
	max-width: 2em;
	min-width: 2em;
	margin: 0;
	padding: 1em 2em;
}

.userInputs {
	display: flex;
	flex-direction: column;
	max-width: 50%;
	min-width: 50%;
	align-items: center;
	margin: 0;
	padding: 0;
}

.userInputs input {
	width: 100%;
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

form.login {
	text-align: center;
	align-items: center;
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