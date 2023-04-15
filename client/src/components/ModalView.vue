<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h2>Serviços Adicionais:</h2>
            <button type="button" class="btn-close" @click="close()">x</button>
          </slot>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div class="res-serv">
              <div>
                <input
                  class="reservas-margin-servicos"
                  type="checkbox"
                  id="servico01"
                  name="servicos"
                  @click="servicos()"
                />
                <label for="servico01"
                  >R$ <span name="servicoValor" id="pPessoa">80,00</span> -
                  <span name="servicoNome">Pacote Streaming</span>*</label
                >
              </div>
              <div>
                <input
                  class="reservas-margin-servicos"
                  type="checkbox"
                  id="servico02"
                  name="servicos"
                  @click="servicos()"
                />
                <label for="servico02"
                  >R$ <span name="servicoValor" id="pPessoa">40,00</span> -
                  <span name="servicoNome">Lavanderia</span>*</label
                >
              </div>
              <div>
                <input
                  class="reservas-margin-servicos"
                  type="checkbox"
                  id="servico03"
                  name="servicos"
                  @click="servicos()"
                />
                <label for="servico03"
                  >R$ <span name="servicoValor" id="pPessoa">20,00</span> -
                  <span name="servicoNome">Cofre</span></label
                >
              </div>
              <div>
                <input
                  class="reservas-margin-servicos"
                  type="checkbox"
                  id="servico04"
                  name="servicos"
                  @click="servicos()"
                />
                <label for="servico04"
                  >R$ <span name="servicoValor">15,00</span> -
                  <span name="servicoNome">Limpeza diária</span></label
                >
              </div>
              <div>
                <input
                  class="reservas-margin-servicos"
                  type="checkbox"
                  id="servico05"
                  name="servicos"
                  @click="servicos()"
                />
                <label for="servico05"
                  >R$ <span name="servicoValor">50,00</span> -
                  <span name="servicoNome">Hotelzinho pet</span
                  ></label
                >
              </div>
              <p><b>*valores por pessoa.</b></p>
              <h3 id="totalServicos">Subtotal serviços: R$ 0,00</h3>
              <div class="button-wrap">
                <button class="button" @click="close()">
                  <div class="button-text">Adicionar serviços</div>
                  <p class="button-arrow">→</p>
							  </button>
              </div>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "ModalView",
  methods: {
    close() {
      this.$emit("close")
    },
    servicos() {
      let val = []

      const servicos = document.getElementsByName("servicos")

      for (let i = 0; i < servicos.length; i++) {
        if (servicos[i].checked && localStorage.getItem("qtdePessoas")) {
          let nome = document.getElementsByName("servicoNome")[i].textContent
          let valor = document.getElementsByName("servicoValor")[i].textContent.replace(",", ".")
          let porPessoa = document.getElementsByName("servicoValor")[i].id === "pPessoa"? true : false
          
          val[i] = {
            nome,
            valor,
            porPessoa
          }
          localStorage.setItem(`servicos${i}`, JSON.stringify(val[i]))
          localStorage.setItem(`servicoNome${i}`, JSON.stringify(val[i].nome))
          localStorage.setItem(`servicoUnicoValor${i}`, JSON.stringify(val[i].valor))
        }else{
          localStorage.removeItem(`servicos${i}`)
          localStorage.removeItem(`servicoNome${i}`)
          localStorage.removeItem(`servicoUnicoValor${i}`)

          document.querySelector("#totalServicos").textContent = "Subtotal serviços: " + this.formatarDinheiro(parseFloat(localStorage.getItem('Total')))
        }
      }
      for (let i = 0; i < servicos.length; i++) {
        if (servicos[0].checked ){
          document.querySelector('#adiciona0').classList.remove("hide")
         document.querySelector('#adiciona0').textContent = `${localStorage.getItem(`servicoNome${0}`)} - R$${localStorage.getItem(`servicoUnicoValor${0}`)} `
        }else{
          document.querySelector('#adiciona0').classList.add("hide")
        }
      }
      for (let i = 0; i < servicos.length; i++) {
        if (servicos[1].checked ){
          document.querySelector('#adiciona1').classList.remove("hide")
         document.querySelector('#adiciona1').textContent = `${localStorage.getItem(`servicoNome${1}`)} - R$${localStorage.getItem(`servicoUnicoValor${1}`)} `
        }else{
          document.querySelector('#adiciona1').classList.add("hide")
        }
      }
      for (let i = 0; i < servicos.length; i++) {
        if (servicos[2].checked ){
          document.querySelector('#adiciona2').classList.remove("hide")
         document.querySelector('#adiciona2').textContent = `${localStorage.getItem(`servicoNome${2}`)} - R$${localStorage.getItem(`servicoUnicoValor${2}`)} `
        }else{
          document.querySelector('#adiciona2').classList.add("hide")
        }
      }
      for (let i = 0; i < servicos.length; i++) {
        if (servicos[3].checked ){
          document.querySelector('#adiciona3').classList.remove("hide")
         document.querySelector('#adiciona3').textContent = `${localStorage.getItem(`servicoNome${3}`)} - R$${localStorage.getItem(`servicoUnicoValor${3}`)} `
        }else{
          document.querySelector('#adiciona3').classList.add("hide")
        }
      }
      for (let i = 0; i < servicos.length; i++) {
        if (servicos[4].checked ){
          document.querySelector('#adiciona4').classList.remove("hide")
         document.querySelector('#adiciona4').textContent = `${localStorage.getItem(`servicoNome${4}`)} - R$${localStorage.getItem(`servicoUnicoValor${4}`)} `
        }else{
          document.querySelector('#adiciona4').classList.add("hide")
        }
      }
      let valorTotal = 0
  
      for (let i = 0; i < val.length; i++) {
        if (val[i] !== undefined) {
          if (val[i].porPessoa){
            valorTotal +=
            parseFloat(val[i].valor) *
            parseInt(localStorage.getItem("qtdePessoas"))
            
            
          }else {
            valorTotal += parseFloat(val[i].valor)
          
          }
          localStorage.setItem('valorServiço: ', valorTotal)
        }
        let subtotal = parseFloat(localStorage.getItem('valorServiço: '))
        subtotal += parseFloat(localStorage.getItem('Total'))

        document.querySelector('#totalServicos').textContent = 'Subtotal serviços: ' + this.formatarDinheiro(subtotal)

        if(localStorage.getItem('Total') && localStorage.getItem('valorServiço: ')){
				  document.querySelector('#totalReserva').textContent = 'Total Reserva: ' + this.formatarDinheiro(subtotal)
			  }
      }
    },
    formatarDinheiro(num) {
	    return num.toLocaleString('pt-BR', {
        style: 'currency', currency: 'BRL' 
      })
    }
  }
}
</script>
<style>
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
  background-color: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
}

.res-serv div {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 75%;
}

.res-serv div label {
  margin-left: 1rem;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  overflow: hidden;
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

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal b {
  font-size: 14px;
  font-weight: normal;
  color: #c0c0c0;
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
  margin-right: 30%;
}
.button-arrow {
  display: inline;
  transition: 0.5s;
  margin: 0.3%;
}
.button:hover .button-arrow {
	transform: translate3d(1em, 0, 0);
}
</style>
