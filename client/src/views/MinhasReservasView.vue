<template>
<body>
  <main>
    <h1>Minhas Reservas</h1>
    <section>
        <li class="cards_item">
            <div class="card">
                <div class="card_content">

                    <p id="quarto" class="card_title">Acomodação: </p>
                    <p id="checkinResumo" class="card_text">Data do Check-in: </p>
                    <p id="checkoutResumo" class="card_text">Data de Check-out: </p>
                    <p id="pessoasResumo" class="card_text">Número de hóspedes: </p>
                    <p class="card_text">Serviços Adicionais: </p>
                    <div class="resumo-div">
                        <p id="servicos"></p>
                        <p id="servicos0"></p>
                        <p id="servicos1"></p>
                        <p id="servicos2"></p>
                        <p id="servicos3"></p>
                        <p id="servicos4"></p>
                    </div>

                    <p id="totalResumo" class="card_text">Valor total da reserva: </p>
                </div>
            </div>
        </li>
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
      onChangeCheckin(){
        document.querySelector('#checkinResumo').textContent = this.pegarData(localStorage.getItem("checkin"))
        
      },
      getdata() {
		    let este = document.querySelector('#quarto').textContent = "Quarto: " + localStorage.getItem("nomeQuarto");
        console.log(este + "")
		    .textContent = "Data do Check-in: " + this.pegarData(localStorage.getItem('checkin'));

        document.querySelector('#checkout').textContent = "Data do Check-out: " + this.pegarData(localStorage.getItem('checkout'));

		    document.querySelector('#pessoasModalResumo').textContent = "Número de hóspedes: " + localStorage.getItem('qtdePessoas')
           
        document.querySelector('#totalReserva').textContent = "Valor total da reserva:" + localStorage.getItem('totalReserva');
	      console.log(this.onChangeCheckin)
    }
    
  }
}

</script>

<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.cards_item {
  display: flex;
  padding: 1rem;
  width: 40%;
}
.card {
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 60%;
}
.card_content {
  padding: 1rem;
  background-color:#e4d8d8 ;
}
.card_title {
  color: #333333;
  font-size: large;
  font-weight: normal;
  text-transform: capitalize;
  text-align: center;
  margin: 0px;
}
.card_text {
  color: #333333;
  font-weight: normal;
  font-size: medium;
  margin-bottom: 1.25rem;
}
</style>