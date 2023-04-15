<template>
  <transition name="modal-fade">
    <div id="resumoReservaModal" class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h2>Resumo da Reserva:</h2>
            <button
              type="button"
              class="btn-close"
              @click="closeOpenModalResumo()"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
              <div class="res-serv">
                <div class="modal-resumo-div">
                  <p id="checkinModalResumo"></p>
                </div>
                <div class="modal-resumo-div">
                  <p id="checkoutModalResumo"></p>
                </div>
                <div class="modal-resumo-div">
                  <p id="pessoasModalResumo"></p>
                </div>
              </div>
              <div class="res-serv2">
                <div class="modal-resumo-div">
                  <p id="nomeQuarto"></p>
                  <p id="quartoModalResumo"></p>
                </div>
                <div class="modal-resumo-div">
                  <p id="servicos"></p>
                  <p id="servicos0"></p>
                  <p id="servicos1"></p>
                  <p id="servicos2"></p>
                  <p id="servicos3"></p>
                  <p id="servicos4"></p>
                </div>
              </div>
            

              <h4 id="totalModalResumo"></h4>
            <div class="button-wrap">
              <button
                id="btnConfirmarReserva"
                class="button"
                @click="closeOpenModalResumoConfirmar"
              >
                <div class="button-text">Confirmar Reserva</div>
                <p class="button-arrow">→</p>
              </button>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalConfirma",
  methods: {
    closeOpenModalResumo() {

      document.getElementById("resumoReservaModal").style.display = "none";
      
      let subtotal = parseFloat(localStorage.getItem('valorServiço: '))
        subtotal += parseFloat(localStorage.getItem('Total'))

      document.querySelector("#totalModalResumo").textContent =
        "Valor Total da Reserva: " + this.formatarDinheiro(subtotal)

      document.querySelector("#nomeQuarto").textContent = 
        "Tipo de Quarto: " 

      document.querySelector("#quartoModalResumo").textContent =
        localStorage.getItem("nomeQuarto");

      document.querySelector("#checkinModalResumo").textContent =
        "Data do Check-in: " + this.pegarData(localStorage.getItem("checkin"));

      document.querySelector("#checkoutModalResumo").textContent =
        "Data do Check-out: " +
        this.pegarData(localStorage.getItem("checkout"));
        
      document.querySelector("#pessoasModalResumo").textContent =
        "Número de hóspedes: " + localStorage.getItem("qtdePessoas");

        document.querySelector("#servicos").textContent = 
        "Serviços Adicionais: "
        document.querySelector("#servicos0").textContent = 
         localStorage.getItem("servicoNome0")

        document.querySelector("#servicos1").textContent = 
         localStorage.getItem("servicoNome1")

        document.querySelector("#servicos2").textContent = 
         localStorage.getItem("servicoNome2")

        document.querySelector("#servicos3").textContent = 
         localStorage.getItem("servicoNome3")
        
        document.querySelector("#servicos4").textContent = 
         localStorage.getItem("servicoNome4")
    },

    closeOpenModalResumoConfirmar() {
      document.getElementById("resumoReservaModal").style.display =
        document.getElementById("resumoReservaModal").style.display === "block"
          ? "none"
          : "block";
      document.getElementById("MinhasReservas").style.display = "block";
    },
    pegarData(data) {
      data = data.replaceAll(/-/g, "");
      let ano = data.slice(0, 4);
      let mes = data.slice(4, 6);
      let dia = data.slice(6, 8);

      return `${dia}/${mes}/${ano}`;
    },
     formatarDinheiro(num) {
	    return num.toLocaleString('pt-BR', {
        style: 'currency', currency: 'BRL' 
      })
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");
*{
  font-family: "Poppins";
}
body {
  overflow-x: hidden;
}
.footer-title {
  text-align: center;
  margin-top: 3em;
}
.inicio-home {
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
}

.inicio-home img {
  width: 100vw;
  border-bottom: 4px solid #333333;
}

.acomodacoes-home-wrap {
  margin-top: 5em;
  text-align: center;
}

.titulo-home2 {
  margin: 0;
}

.galeria-home {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
}

.galeria-home img {
  max-width: 30%;
  padding-bottom: 2em;
}

.button-home {
  max-width: 30%;
}
/* PADRÕES */
.margin-top {
  margin-top: 20vh;
}

.margin-bottom {
  margin-bottom: 20vh;
}

h1 {
  color: #333333;
  font-size: xx-large;
  font-weight: normal;
  padding: 1rem;
  text-align: center;
}

.imagem-retrato1 {
  display: none;
}

.imagem-paisagem {
  display: block;
  width: 100%;
  height: 100%;
  margin-left: -1%;
}
.button-wrap {
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  display: flex;
  padding: 1.5em 2.5em;
  align-items: center;
  text-align: center;
  flex: 0 0 auto;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  justify-content: center;
  max-width: 25%;
  transition: 0.5s;
}

.button:hover {
  border-color: #c0c0c0;
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
.reservas-resumo {
  padding: 1em 5em;
  border: 1px solid #e0e0e0;
  margin: 10vh 15%;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  text-align: start;
  color: #333333;
}

form,
input,
select,
textarea {
  outline: 2px solid transparent;
}

form:hover,
input:hover,
select:hover,
textarea:hover {
  border: 1px solid #c0c0c0;
}

form:focus,
input:focus,
select:focus,
textarea:focus {
  outline: 2px solid #e0e0e0;
  border: 1px solid #c0c0c0;
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
  margin: 0;
  padding: 0;
  margin-bottom: 3vh;
  padding: 0.25em 0.5em;
  text-align: start;
  border: 1px solid #e0e0e0;
  transition: 0.5s;
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

button.button {
  background-color: white;
  margin: 5vh 0;
  max-width: 30%;
  padding: 1em 2em;
}

form a,
.reservas-resumo a {
  text-decoration: none;
  color: #a0a0a0;
  font-size: 14px;
  transition: 0.5s;
}

form a:hover,
.reservas-resumo a:hover {
  color: #333333;
  text-decoration: underline;
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

.hero {
  text-align: center;
  width: 100%;
  position: relative;
}

.hero img {
  width: 100vw;
  margin-right: 0%;
  border-bottom: 4px solid #333333;
  z-index: -1;
}

.hero-titulo {
  margin: 0;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-titulo-background {
  margin: 0;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-sobre {
  position: absolute;
  bottom: 15%;
  left: 10%;
  right: 10%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2em;
  font-size: medium;
}

.hero-opcoes {
  position: absolute;
  bottom: 5%;
  left: 10%;
  right: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: medium;
  width: 80%;
  color: white;
}

.hero-opcoes div {
  padding: 2em;
  text-align: justify;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 25%;
  width: 50%;
  height: 80%;
  text-align: center;
  overflow-x: hidden;
}

.modal-header {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #e0e0e0;
  color: #161414;
  justify-content: space-between;
}
.modal-header h2 {
  text-align: center;
  width: 90%;
}

.res-serv {
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1em;
  justify-content: space-evenly;

}
.res-serv2 {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}
.modal-body {
  position: relative;
  padding: 20px 10px;
  overflow: hidden;
}

.button-wrap {
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  display: flex;
  padding: 1.5em 2.5em;
  align-items: center;
  text-align: center;
  flex: 0 0 auto;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  justify-content: center;
  max-width: 25%;
  transition: 0.5s;
}
.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: xx-large;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #c0c0c0;
}
.button:hover {
  border-color: #c0c0c0;
}
.button-text {
  color: #333333;
  text-align: center;
  display: block;
  text-align: center;
}
.button-arrow {
  display: inline;
  transition: 0.5s;
  margin: 0.3%;
}
.button:hover .button-arrow {
  transform: translate3d(1em, 0, 0);
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
