<template>
<body>
  <main>
    <h1>Minhas Reservas</h1>
    <section>
        <p class ="centro" id="quarto">Quarto: </p>
        <p class="centro" id="chekin">Data do Chek-in: </p>
        <p class="centro" id="chekout">Data do Check-out: </p>
        <p class="centro" id="pessoas">Número de hóspedes: </p>
        <p class="centro" id="totalReserva">Número de hóspedes: </p>
        <p class="centro" id="totalReserva">Valor total da reserva: </p>
        <p class ="centro" id="quarto">Serviços Adicionais: </p>
    </section>
  </main>
</body>

</template>

<script>
export default {
    name: "MinhasReservasView",
    data() {
      return {
      };
    },
    methods: {
      pegarData(data) {
        data = data.replaceAll(/-/g, '')
        let ano = (data.slice(0, 4))
        let mes = (data.slice(4, 6))
        let dia = (data.slice(6, 8))
        return `${dia}/${mes}/${ano}`
      },

	    getdata() {
		    document.querySelector('#quarto').textContent = "Quarto: " + localStorage.getItem('nomeQuarto');

		    document.querySelector('#checkin').textContent = "Data do Check-in: " + this.pegarData(localStorage.getItem('checkin'));

        document.querySelector('#checkout').textContent = "Data do Check-out: " + this.pegarData(localStorage.getItem('checkout'));

		    document.querySelector('#pessoasModalResumo').textContent = "Número de hóspedes: " + localStorage.getItem('qtdePessoas')
           
        document.querySelector('#totalReserva').textContent = "Valor total da reserva:" + localStorage.getItem('totalReserva');
	    }
    }
}


</script>

<style>

.centro {
  text-align: center;
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