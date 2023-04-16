<template>
  <section>
    <form class="login">
      <h1>Atualização de informações</h1>
      <div>
        <div>
          <label>Usuário Nome:</label>
          <div>
            <input type="text" placeholder="Seu nome" v-model="nomeUsuario" />
          </div>
        </div>
        <div>
          <label for="email">Usuário Email:</label>
          <div>
            <input
              type="text"
              placeholder="Seu e-mail"
              v-model="emailUsuario"
            />
          </div>
        </div>
        <!--<div>
          <label>Usuário Senha:</label>
          <div>
            <input type="text" placeholder="Sua senha" v-model="senhaUsuario" />
          </div>
        </div>
        <div>
          <label>Usuário Telefone:</label>
          <div>
            <input
              type="text"
              placeholder="Seu telefone"
              v-model="telefoneUsuario"
            />
          </div>
        </div>-->
        <div>
          <label>Usuário Gênero:</label>
          <div>
            <select name="genero" id="genero" v-model="generoUsuario">
              <option value="Homem">Homem</option>
              <option value="Mulher">Mulher</option>
              <option value="Pessoa não-binária">Pessoa não-binária</option>
              <option value="Prefiro não informar">Prefiro não informar</option>
            </select>
          </div>
        </div>
        <div>
          <label>Usuário Endereço:</label>
          <div>
            <input
              type="text"
              placeholder="Seu endereço"
              v-model="enderecoUsuario"
            />
          </div>
        </div>
        <div class="container">
          <input type="checkbox" id="check" />
          <label class="buttons" for="check" @click="topFunction()">
            <div class="button-text">Atualizar</div>
            <p class="button-arrow">→</p>
          </label>
          
          <div class="background"></div>
          <div class="alert_box">
            <div class="icon">
              <i class="fa fa-exclamation"></i>
            </div>
            <header>Confirmação</header>
            <p>Realmente deseja atualizar essas informações?</p>
            <div class="btns">
              <label for="check" @click="updateUsers">Sim, atualizar!</label>
              <label for="check">Cancelar</label>
            </div>
          </div>
        </div>
      </div>
       <button class="button">
          <div class="button-text">Voltar</div>
        </button>
    </form>
  </section>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "EditUsuarios",
  data() {
    return {
      nomeUsuario: "",
      emailUsuario: "",
      //senhaUsuario: "",
      //telefoneUsuario: "",
      generoUsuario: "",
      enderecoUsuario: "",
    };
  },
  created: function () {
    this.usersById();
  },
  methods: {
    // Get Usuario By Id
    async usersById(id) {
      try {
        const response = axios.get(`http://localhost:5000/usuario/user/${id}`);
        this.nomeUsuario = (await response).data.nome;
        this.emailUsuario = (await response).data.email;
      } catch (err) {
        console.log(err);
      }
    },

    // Update usuario
    async updateUsers() {
      try {
        await axios.put(
          `http://localhost:5000/usuario/user/${this.$route.query.id}`,
          {
            nome: this.nomeUsuario,
            email: this.emailUsuario,
            //senha: this.senhaUsuario,
            //telefone: this.telefoneUsuario,
            genero: this.generoUsuario,
            endereco: this.enderecoUsuario,
          }
        );
        this.nomeUsuario = "",
        this.emailUsuario = "",
        //this.senhaUsuario = "",
        //this.telefoneUsuario = "",
        this.generoUsuario = "",
        this.enderecoUsuario = "",
        this.$router.push("/hospedesAdmin")
      } catch (err) {
        console.log(err);
      }
    },
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
};
</script>

<style scoped>
.alert_box{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.background {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.alert_box {
  padding: 30px;
  display: flex;
  background: #fff;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 450px;
  width: 100%;
  border-radius: 5px;
  z-index: 5;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(0.97);
  transition: all 0.3s ease;
}
#check:checked ~ .alert_box {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}
#check:checked ~ .background {
  opacity: 1;
  pointer-events: auto;
}
#check {
  display: none;
}
.alert_box .icon {
  height: 100px;
  width: 100px;
  color: #f23b26;
  border: 3px solid #f23b26;
  border-radius: 50%;
  line-height: 97px;
  font-size: 50px;
}
.alert_box header {
  font-size: 35px;
  font-weight: 500;
  margin: 10px 0;
}
.alert_box p {
  font-size: 20px;
}
.alert_box .btns {
  margin-top: 20px;
}
.btns label {
  display: inline-flex;
  height: 55px;
  padding: 0 30px;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  line-height: 55px;
  outline: none;
  margin: 0 10px;
  border: none;
  color: #fff;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.btns label:first-child {
  background: #2980b9;
}
.btns label:first-child:hover {
  background: #2573a7;
}
.btns label:last-child {
  background: #f23b26;
}
.btns label:last-child:hover {
  background: #d9210d;
}
.container{
  padding-left: 1rem;
}
.buttons{
  display: flex;
  font-size:13px;
  margin: 1em 0 1em 0;
  align-items: center;
  text-align: right;
  flex: 0 0 auto;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  justify-content: center;
  max-width: 90%;
  min-width: 30%;
  transition: 0.5s;
}
.buttons:hover {
  border-color: #c0c0c0;
  text-decoration: none;
}
/*login*/
.button {
  display: flex;
  padding: 1em 2em;
  margin: 1em 0 1em 0;
  align-items: center;
  text-align: center;
  flex: 0 0 auto;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  justify-content: center;
  max-width: 90%;
  min-width: 30%;
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

.buttons:hover .button-arrow {
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
select {
  outline: 2px solid transparent;
  outline: none;
}

form:hover,
input:hover,
select:hover {
  border: 1px solid #c0c0c0;
  outline: none;
}

form:focus,
input:focus,
select:focus {
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
  max-width: 90%;
  min-width: 50%;
  margin: 0;
  padding: 0;
  margin-bottom: 3vh;
  padding: 0.5em 0.5em;
  border: 1px solid #e0e0e0;
  transition: 0.5s;
}
option{
  font-size: 14px;
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
