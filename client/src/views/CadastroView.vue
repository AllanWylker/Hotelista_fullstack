<template>
  <main>
    <section>
      <form action="">
        <h1>Cadastro de Usuários</h1>

        <label id="nomeLabel" for="nome">Nome:</label>
        <input
          name="nome"
          id="nome"
          v-model="nomeUsuario"
          placeholder="Seu nome"
          type="text"
          required
        />

        <label id="emaillabel" for="tempo">Email:</label>
        <input
          name="email"
          id="email"
          v-model="emailUsuario"
          placeholder="Qual é o seu email"
          type="text"
          required
        />

        <label id="telefonelabel" for="telefone">Telefone:</label>
        <input
          name="telefone"
          id="telefone"
          v-model="telefoneUsuario"
          placeholder="Qual é o seu telefone"
          type="text"
          required
        />

        <label id="nascimentolabel" for="nascimento">Data de Nascimento:</label>
        <input
          name="nascimento"
          id="nascimento"
          v-model="data_nascimentoUsuario"
          placeholder="Qual é a data de nascimento"
          type="text"
          required
        />

        <label id="nacionalidadelabel" for="nacionalidade"
          >Nacionalidade:</label
        >
        <input
          name="nacionalidade"
          id="nacionalidade"
          v-model="nacionalidadeUsuario"
          placeholder="Qual é a sua nacionalidade"
          type="text"
          required
        />

        <label for="genero">Gênero:</label>
        <select name="genero" id="genero" v-model="generoUsuario" required>
          <option value="Homem">Homem</option>
          <option value="Mulher">Mulher</option>
          <option value="Pessoa não-binária">Pessoa não-binária</option>
          <option value="Prefiro não informar">Prefiro não informar</option>
        </select>

        <label id="endereço" for="endereço">Endereço:</label>
        <input
          name="endereço"
          id="endereço"
          v-model="enderecoUsuario"
          placeholder="Qual é a sua endereço"
          type="text"
          required
        />

        <label for="notificação">Notificações por email:</label>
        <select
          name="notificação"
          id="notificação"
          v-model="notificacaoUsuario"
          required
        >
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>

        <label id="senhaLabel" for="senha">Senha:</label>
        <input
          name="senha"
          id="senha"
          v-model="senhaUsuario"
          placeholder="Seu nome"
          type="password"
          required
        />

        <button class="button" type="button" @click="postUsuario">
          <div class="button-text">Cadastrar</div>
          <p class="button-arrow">→</p>
        </button>
        <router-link to="/login">Já possui conta?</router-link>
      </form>
    </section>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "CadastroView",
  data() {
    return {
      nomeUsuario:"",
      emailUsuario:"",
      telefoneUsuario:"",
      data_nascimentoUsuario:"",
      nacionalidadeUsuario:"",
      generoUsuario:"",
      enderecoUsuario:"",
      notificacaoUsuario:"",
      senhaUsuario:""
    };
  },
  methods: {
    async postUsuario(){
      try {
        await axios.post("http://localhost:5000/usuario", 
        {
          nome: this.nomeUsuario,
          email: this.emailUsuario,
          senha: this.senhaUsuario,
          telefone: this.telefoneUsuario,
          genero: this.generoUsuario,
          endereco: this.enderecoUsuario,
          data_nascimento: this.data_nascimentoUsuario,
          nacionalidade:this.nacionalidadeUsuario,
          notificacaoUsuario: this.notificacao,
        })
        this.nomeUsuario = "",
        this.emailUsuario = "",
        this.senhaUsuario = "",
        this.telefoneUsuario = "",
        this.generoUsuario = "",
        this.enderecoUsuario = "",
        this.data_nascimentoUsuario="",
        this.nacionalidadeUsuario="",
        this.notificacaoUsuario="",
    
        alert('Usuário cadastrado com sucesso!')
        this.$router.push("/login");
      }
       catch (err) {
        console.log(err);
        alert('Ocorreu um erro!')
      
      }
    } 
  } 
};
</script>

<style>
</style>
