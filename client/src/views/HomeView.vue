<template>
  <html>
    <main>
      <section>
        <div class="hero">
          <img class="imagem-paisagem" :src="image" alt="Fachada do hotel" />
          <img class="imagem-retrato1" :src="image1" alt="Fachada do hotel" />
          <h1 class="hero-titulo white">Sua melhor escolha de vista</h1>
          <div class="hero-sobre">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            sapiente reprehenderit corporis, nulla voluptatem esse. Temporibus
            necessitatibus ex soluta atque fuga amet architecto tempora cumque!
          </div>
        </div>
      </section>
      <section>
        <div class="acomodacoes-home-wrap">
          <h1 class="titulo-home2">Nossas Acomodações</h1>
          <div class="galeria-home">
            <img :src="imageQuartoSimples" alt="Quarto Simples" />
            <img :src="imageQuartoMedio" alt="Quarto Médio" />
            <img :src="imageBanheiro" alt="Banheiro" />
            <img :src="imageQuartoLuxo" alt="Quarto de Luxo" />
            <img :src="imageQuartoMedio2" alt="Quarto Médio" />
            <img :src="imageQuartoLuxo2" alt="Quarto de Luxo" />
          </div>
        </div>
        <div class="button-wrap">
          <a class="button button-home" href="#Serviços">
            <div class="button-text">Conheça mais sobre nossos serviços</div>
            <p class="button-arrow">→</p>
          </a>
        </div>
      </section>
      <section>
        <div class="margin-top hero">
          <img
            class="imagem-paisagem"
            :src="imageGastronomia"
            alt="Área de jantar"
          />
          <img
            class="imagem-retrato1"
            :src="imageGastronomia1"
            alt="Área de jantar"
          />
          <h1 class="hero-titulo-background white">Opções gastronômicas</h1>
          <div class="hero-opcoes">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate commodi repudiandae tempora consequatur! Sunt iusto
              temporibus nisi sint voluptate fugiat.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              molestiae, amet sequi deleniti quis optio voluptate. Ipsa quis
              deserunt recusandae.
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 class="footer-title">Tenha uma boa estadia!</h1>
      </section>
    </main>
  </html>
</template>

<script>
// @ is an alias to /src
import NavBarHeader from "@/components/NavBarHeader.vue";
import image from "../assets/home/fachada - paisagem.png";
import image1 from "../assets/home/fachada - retrato.png";
import imageQuartoSimples from "../assets/quartos/simples.png";
import imageQuartoMedio from "../assets/quartos/medio.png";
import imageBanheiro from "../assets/quartos/banheiro.png";
import imageQuartoLuxo from "../assets/quartos/luxo.png";
import imageQuartoMedio2 from "../assets/quartos/medio2.png";
import imageQuartoLuxo2 from "../assets/quartos/luxo2.png";
import imageGastronomia from "../assets/home/gastronomia - paisagem.png";
import imageGastronomia1 from "../assets/home/gastronomia - retrato.png";

export default {
  data: function () {
    return {
      image: image,
      image1: image1,
      imageQuartoSimples: imageQuartoSimples,
      imageQuartoMedio: imageQuartoMedio,
      imageBanheiro: imageBanheiro,
      imageQuartoLuxo: imageQuartoLuxo,
      imageQuartoMedio2: imageQuartoMedio2,
      imageQuartoLuxo2: imageQuartoLuxo2,
      imageGastronomia: imageGastronomia,
      imageGastronomia1: imageGastronomia1,
    };
  },
  name: "HomeView",
  components: {
    NavBarHeader,
  }
};
</script>
<style>
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
@media (max-width: 600px) and (orientation: portrait) {
  /* PADRÕES */
  .imagem-retrato1 {
    display: block;
	width: 100%;
  	height: 100%;
  }
  .imagem-paisagem {
 	 display: none;
	}
  .button {
    padding: 1em 2em;
  }

  .hero-titulo-background {
    padding: 0.25rem;
  }

  .sobre-desc {
    column-count: 1;
  }

  form {
    padding: 1em;
    margin: 10vh 2.5%;
  }

  input,
  select,
  button.button {
    min-width: 80%;
    max-width: 100%;
  }
  /* HOME */
  .hero-titulo {
    padding: 0;
  }

  .galeria-home img {
    max-width: 90%;
    padding-bottom: 1em;
  }

  .button-home {
    max-width: 100%;
  }

  .hero-opcoes {
    flex-direction: column;
  }

  .hero-opcoes div {
    padding: 1em;
  }
}
</style>
