<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Gênero</th>
          <th>Role</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.idUsuario">
          <td>{{ usuario.idUsuario }}</td>
          <td>{{ usuario.nome }}</td>
          <td>{{ usuario.email }}</td>
          <td>{{ usuario.genero }}</td>
          <td>{{ usuario.role }}</td>
          <td>{{ usuario.telefone }}</td>
          <td>{{ usuario.endereco }}</td>
          <td>
            <router-link
              :to="{ name: 'EditUsuarios', query: {id: usuario.idUsuario} }"
              class="button"
              >Editar</router-link
            >
          </td>
          <td>              
            <a class="button" @click="deleteUsers(usuario.idUsuario)">Deletar</a>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "Get_Hospedes",
  data() {
    return {
      usuarios: [],
    };
  },

  created() {
    this.getUsers();
  },

  methods: {
    
    async getUsers() {
      try {
        const response = await axios.get("http://localhost:5000/usuario");
        this.usuarios = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    
    async deleteUsers(id) {
      try {
        await axios.delete(`http://localhost:5000/usuario/user/${id}`);
        this.getUsers();
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

<style>
.table{
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

}
.table thead tr {
  background-color: #9a9058;
  color: #ffffff;
  text-align: left;
}
.table th,
.table td {
  padding: 12px 15px;
}
.table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.table tbody tr:last-of-type {
    border-bottom: 2px solid #9a9058;
}
</style>
