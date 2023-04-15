<template>
  <main id="main">
    <h1>Minha Reserva</h1>
    <section>
      <form class="form-reservas sombra-box" id="form-reservas" action="">
        <div>
          <label for="checkin">Data de <b>check-in</b></label>
          <input
            v-model="checkin"
            v-on:change="onChangeCheckin"
            name="checkin"
            id="checkin"
            placeholder="Sua data de check-in"
            type="date"
            required
          />
        </div>
        <div>
          <label for="checkout">Data de <b>check-out</b></label>
          <input
            v-model="checkout"
            v-on:change="onChangeCheckout"
            name="checkout"
            id="checkout"
            placeholder="Sua data de check-out"
            type="date"
            required
          />
        </div>
        <div>
          <label for="qntdPessoas">Quantidade de pessoas</label>
          <input
            v-on:change="onChangeQntdPessoas"
            name="qntdPessoas"
            id="qntdPessoas"
            placeholder="Ex.: 2"
            type="number"
            min="1"
            max="4"
            required
          />
        </div>
      </form>
    </section>
    <section>
      <div class="reservas-wrap">
        <div class="reservas-quartos">
          <label
            class="reservas-quarto-wrap"
            for="quarto1"
            form="form-reservas"
          >
            <input
              v-on:change="quartos"
              name="quarto-radio"
              id="quarto1"
              type="radio"
              required
              form="form-reservas"
            />
            <div class="reservas-quarto-wrap-div">
              <img :src="imageQuartoSimples" alt="Quarto Simples" />
              <div class="reservas-quarto">
                <h2 id="quartoTitulo">Quarto Simples</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae velit, aspernatur, corrupti ipsam aliquid et quibusdam
                  amet, est dolor labore officiis totam laudantium sequi.
                  Aliquam nam quaerat in provident nulla quia, quis enim fugit
                  quo quidem consequuntur quas, vero fuga?
                </p>
                <span>R$<span id="quartoValor">100,00</span></span>
              </div>
            </div>
          </label>
          <label
            class="reservas-quarto-wrap"
            for="quarto2"
            form="form-reservas"
          >
            <input
              v-on:change="quartos"
              name="quarto-radio"
              id="quarto2"
              type="radio"
              required
              form="form-reservas"
            />
            <div class="reservas-quarto-wrap-div">
              <img :src="imageQuartoMedio" alt="Quarto Médio" />
              <div class="reservas-quarto">
                <h2 id="quartoTitulo">Quarto Médio</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae velit, aspernatur, corrupti ipsam aliquid et quibusdam
                  amet, est dolor labore officiis totam laudantium sequi.
                  Aliquam nam quaerat in provident nulla quia, quis enim fugit
                  quo quidem consequuntur quas, vero fuga?
                </p>
                <span>R$<span id="quartoValor">200,00</span></span>
              </div>
            </div>
          </label>
          <label
            class="reservas-quarto-wrap"
            for="quarto3"
            form="form-reservas"
          >
            <input
              v-on:change="quartos"
              name="quarto-radio"
              id="quarto3"
              type="radio"
              required
              form="form-reservas"
            />
            <div class="reservas-quarto-wrap-div">
              <img :src="imageQuarto4" alt="Quarto de Luxo" />
              <div class="reservas-quarto">
                <h2 id="quartoTitulo">Quarto de Luxo</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae velit, aspernatur, corrupti ipsam aliquid et quibusdam
                  amet, est dolor labore officiis totam laudantium sequi.
                  Aliquam nam quaerat in provident nulla quia, quis enim fugit
                  quo quidem consequuntur quas, vero fuga?
                </p>
                <span>R$<span id="quartoValor">500,00</span></span>
              </div>
            </div>
          </label>
        </div>
        <div class="reservas-resumo-wrap">
          <div class="reservas-resumo reservas-resumo">
            <h2>Sua Reserva:</h2>
            <div class="reservas-resumo-info">
              <div>
                <p>Quarto:</p>
                <p id="pquarto">__________</p>
              </div>
              <div>
                <p>Check-in:</p>
                <p id="pcheckin">__/__/____</p>
              </div>
              <div>
                <p>Check-out:</p>
                <p id="pcheckout">__/__/____</p>
              </div>
              <div>
                <p>Pessoas:</p>
                <p id="pessoas"></p>
              </div>
              <div>
                <div>
                  <p>Serviços adicionados:</p>
                  <ul>
                    <li class="hide" id="adiciona0"></li>
                    <li class="hide" id="adiciona1"></li>
                    <li class="hide" id="adiciona2"></li>
                    <li class="hide" id="adiciona3"></li>
                    <li class="hide" id="adiciona4"></li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <a @click="showModal">Adicionar mais serviços </a>
              <ModalView v-show="isModalViewVisible" @close="closeModal" />
            </div>

            <div>
              <input
                id="inputDesconto"
                class="input-cupom"
                type="text"
                placeholder="Possui cupom de desconto?"
              />
              <button
                id="btnDesconto"
                @click="eventoBtnAplicarCupom"
                class="buttonCupom"
                type="button"
                value="Aplicar"
                form="form-reservas"
              >
                <div class="button-text-small">Aplicar</div>
              </button>
            </div>
            <h3 id="totalReserva">Total Reserva: R$ 0,00</h3>

            <!--button continuar-->
            <div class="button-wrap">
              <button
                class="button-confirma button"
                type="button"
                value="Continuar"
                form="form-reservas"
                @click="closeOpenModalResumo"
              >
                <div class="button-text">Continuar</div>
                <p class="button-arrow">→</p>
              </button>
              <ModalConfirma
                v-show="isModalConfirmaVisible"
                @close="closeModal"
              />
            </div>
            <ModalConfirma
              v-show="isModalConfirmaVisible"
              @close="closeModal"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import imageQuartoSimples from "../assets/quartos/simples.png";
import imageQuartoMedio from "../assets/quartos/medio.png";
import imageQuarto4 from "../assets/quartos/luxo.png";
import ModalView from "../components/ModalView.vue";
import ModalConfirma from "../components/ModalConfirma.vue";

export default {
  name: "ReservasView",
  components: {
    ModalView,
    ModalConfirma,
  },
  data() {
    return {
      isModalViewVisible: false,
      isModalConfirmaVisible: false,
      imageQuartoSimples: imageQuartoSimples,
      imageQuartoMedio: imageQuartoMedio,
      imageQuarto4: imageQuarto4,
    };
  },
  methods: {
    pegarData(data) {
      data = data.replaceAll(/-/g, "");
      let ano = data.slice(0, 4);
      let mes = data.slice(4, 6);
      let dia = data.slice(6, 8);
      return `${dia}/${mes}/${ano}`;
    },
    onChangeCheckin() {
      const inputCheckin = document.querySelector("#checkin");
      localStorage.setItem("checkin", inputCheckin.value);
      document.querySelector("#pcheckin").textContent = this.pegarData(
        localStorage.getItem("checkin")
      );
    },
    onChangeCheckout() {
      const inputCheckin = document.querySelector("#checkin");
      const inputCheckout = document.querySelector("#checkout");

      if (inputCheckout.value > inputCheckin.value) {
        localStorage.setItem("checkout", inputCheckout.value);
        document.querySelector("#pcheckout").textContent = this.pegarData(
          localStorage.getItem("checkout")
        );

        let dataOne = localStorage.getItem("checkin");
        let dataTwo = localStorage.getItem("checkout");
        const dayIn = dataOne.split("-");
        const dayOut = dataTwo.split("-");
        let dayCheckin = dayIn[2];
        let dayCheckout = dayOut[2];
        const diaria = dayCheckout - dayCheckin;
        localStorage.setItem("Diaria", diaria);
      } else {
        alert("Adicione uma data válida para check-out");
        inputCheckout.value = localStorage.getItem("checkout");
      }
    },
    onChangeQntdPessoas() {
      const inputNumber = document.querySelector("#qntdPessoas"); // qntd é onde peguei a informação
      if (inputNumber.value <= 4) {
        localStorage.setItem("qtdePessoas", parseInt(inputNumber.value));
        document.querySelector("#pessoas").textContent =
          localStorage.getItem("qtdePessoas");
      } else {
        alert("Número inválido");
        inputNumber.value = localStorage.getItem("");
      }
    },
    formatarDinheiro(num) {
      return num.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
    quartos() {
      const inputQuartos = document.querySelectorAll(
        'input[name="quarto-radio"]'
      );
      const h2QuartoTitulo = document.querySelectorAll("#quartoTitulo");
      const h2QuartoValor = document.querySelectorAll("#quartoValor");

      for (let i = 0; i < inputQuartos.length; i++) {
        if (inputQuartos[i].checked) {
          localStorage.setItem("quarto", i + 1);
          localStorage.setItem("nomeQuarto", h2QuartoTitulo[i].textContent);
          document.querySelector("#pquarto").textContent =
            h2QuartoTitulo[i].textContent;
          localStorage.setItem(`quartoValor: `, h2QuartoValor[i].textContent);
          document.querySelector("#totalReserva").textContent =
            `Total Reserva: ` +
            this.formatarDinheiro(
              parseFloat(localStorage.getItem("quartoValor: ")) *
                localStorage.getItem("qtdePessoas") *
                localStorage.getItem("Diaria")
            );
          localStorage.setItem(
            "Total",
            parseFloat(localStorage.getItem("quartoValor: ")) *
              localStorage.getItem("qtdePessoas") *
              localStorage.getItem("Diaria")
          );
        }
      }
      //olhar aqui
      let subtotal = parseFloat(localStorage.getItem("valorServiço: "));
      subtotal += parseFloat(localStorage.getItem("Total"));
      for (let i = 0; i < inputQuartos.length; i++) {
        if (inputQuartos[i].checked) {
          if (
            localStorage.getItem("Total") &&
            localStorage.getItem("valorServiço: ")
          ) {
            document.querySelector("#totalReserva").textContent =
              "Total Reserva: " + this.formatarDinheiro(subtotal);
            localStorage.setItem("totalReserva", subtotal);
          }
        }
      }
    },

    //------------------Início Cupom

    geradorCupomDesconto() {
      var cupomDesconto = "";
      var caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 8; i++) {
        cupomDesconto += caracteres.charAt(
          Math.floor(Math.random() * caracteres.length)
        );
      }

      localStorage.setItem("cupomValido", cupomDesconto);
    },

    calcularDesconto() {
      let valorDesconto = localStorage.getItem("totalReserva") * (10 / 100);
      let valorTotal =
        parseInt(localStorage.getItem("totalReserva")) - valorDesconto;
      document.querySelector("#totalReserva").innerHTML =
        "Valor da reserva: R$ " + parseFloat(valorTotal).toFixed(2);

      return parseFloat(valorTotal).toFixed(2);
    },

    eventoBtnAplicarCupom() {
      const inputCupom = document.getElementById("inputDesconto").value;
      localStorage.setItem("cupomInputado", inputCupom);

      var cupomValido = localStorage.getItem("cupomValido");

      if (inputCupom == cupomValido) {
        this.calcularDesconto();
      } else {
        alert("Cupom inválido");
      }
    },
    //-----------------------------------------------------------Fim cupom

    showModal() {
      this.isModalViewVisible = true;
      if ((this.isModalViewVisible = true)) {
        document.getElementById("main").style.overflowY = "disable";
      }
    },
    closeModal() {
      this.isModalViewVisible = false;
    },

    showModalConfirma() {
      this.isModalConfirmaVisible = true;
      if ((this.isModalConfirmaVisible = true)) {
        document.getElementById("resumoReservaModal").style.display = "block";
      }
    },
    closeModalConfirma() {
      this.isModalConfirmaVisible = false;
    },
    closeOpenModalResumo() {
      document.getElementById("resumoReservaModal").style.display =
        document.getElementById("resumoReservaModal").style.display === "block"
          ? "none"
          : "block";
    },
  },

  beforeMount() {
    this.geradorCupomDesconto();
  },
};
</script>
<style scoped>
/*FORMS*/

.form-reservas {
  margin: 0 20%;
  margin-bottom: 5vh;
}

.form-reservas div {
  display: flex;
  flex-direction: row;
  margin: 0.25em 0;
  justify-content: space-between;
}

.form-reservas label {
  line-height: 1.25em;
  font-size: medium;
  margin-right: 2em;
}

.form-reservas input {
  min-width: 30%;
  max-width: 100%;
  margin: 0;
}

.reservas-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5vh 0;
  margin: 0 1em 0 5em;
  border-top: 1px solid #e0e0e0;
}

.reservas-resumo-wrap {
  margin: 0;
  min-width: 50%;
}

.reservas-resumo {
  z-index: 90;
  margin: 0 2em;
  padding: 2em;
  position: sticky;
  position: -webkit-sticky;
  top: 5em;
}

.reservas-resumo .button {
  width: 100%;
  max-width: 100%;
}

.reservas-resumo-info div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
}

.reservas-resumo-info p {
  margin: 0;
  padding: 1em 0;
}

.reservas-quartos {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 75%;
  border-top: 1px solid #e0e0e0;
}

.reservas-quartos:before {
  content: " ";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: url("https://wallpaperaccess.com/full/658113.png");
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
}

.reservas-quarto-wrap {
  max-width: 100%;
  padding: 0.5em 1em;
  border: 2px solid white;
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid #e0e0e0;
  border-left: 1px solid white;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
}

.reservas-quarto-wrap-div {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.reservas-quarto-wrap img {
  max-width: 25%;
  height: auto;
  background-color: #c0c0c0;
  border-radius: 5%;
}

.reservas-quartos input[type="radio"] {
  flex-basis: 100%;
  position: absolute;
  opacity: 0;
  width: 0%;
  height: 0%;
  padding: 0;
  margin: 0;
  border-radius: 8px;
}

.reservas-quarto-wrap:has(input[type="radio"]:checked) {
  border: 1px solid #333333;
}

.reservas-quarto-wrap:has(input[type="radio"]:hover:not(:checked)) {
  border: 1px solid #c0c0c0;
}

.reservas-quarto {
  padding: 0 1em;
}

.reservas-margin-servicos {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.hide {
  display: none;
}
.serviceList {
  display: inline;
  height: 100%;
}
.input-cupom{
  margin: 2em 0 2em 0;
  padding: 0.5em 0.5em;
  border: 1px solid #c0c0c0;
}
.buttonCupom{
  margin: 0 0 0 10px;
  padding: 0.5em 0.5em;
  align-items: center;
  text-align: center;
  flex: 0 0 auto;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  justify-content: center;
  max-width: 25%;
}

.button-wrap {
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button-confirma {
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
  padding-left: 0em;
  transition: 0.5s;
  margin: 0;
}

.button:hover .button-arrow {
  transform: translate3d(1em, 0, 0);
}
div a {
  cursor: pointer;
}

@media (max-width: 600px) and (orientation: portrait) {
  /* RESERVAS */
  .form-reservas {
    margin: 0;
  }

  .form-reservas div {
    margin: 0.75em 0;
  }

  .reservas-wrap {
    flex-direction: column-reverse;
    margin: 0 1em;
  }
  .reservas-quarto-wrap h2 {
    text-align: center;
    margin-bottom: 10%;
  }
  .reservas-quarto-wrap img {
    max-width: 45%;
    margin-top: 40%;
    margin-left: 5em;
    margin-bottom: 30em;
    position: absolute;
    border-radius: 5%;
  }
  .reservas-quarto-wrap p {
    position: relative;
    max-height: 40%;
    text-align: justify;
    margin-top: 15em;
  }

  .reservas-resumo-wrap {
    max-width: 100%;
    margin-bottom: 2em;
  }

  .reservas-resumo {
    margin: 0;
  }

  .reservas-quartos {
    max-width: 100%;
  }

  .modal {
    width: 90%;
  }
}
</style>