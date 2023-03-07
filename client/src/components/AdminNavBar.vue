<template>
  <header>
    <nav>
      <div class="navbar">
        <div class="navbar-wrap">
          <a class="navbar-logo">

            <img class="navbar-logo" src="@/assets/logotipo/Hotelista_sem_fundo.png" alt="Logotipo Hotelista" />
          </a>
          <div class="slogan">A melhor parte da sua viagem!</div>
          <div class="navbar-menu-wrap">
            <div class="navbar-menu">
              <a class="navbar-link active"><router-link to="/homeAdmin">Home</router-link></a>
              <a class="navbar-link"><router-link to="/hospedesAdmin">Relatório de Usuários</router-link></a>
              <a class="navbar-link"><router-link to="/reservasAdmin">Reservas</router-link></a>
              <a class="navbar-link"><router-link to="/consumoAdmin">Consumo dos Usuários</router-link></a>
              <a class="navbar-link"><router-link to="/staffAdmin">Relatório de Funcionários</router-link></a>
              <i class="navbar-dropdown-wrap">
                <p class="navbar-dropdown-button">&#xe853;</p>
                <div class="navbar-dropdown">
                  <p class="navbar-user">Olá, {{ usuario != null ? usuario : "usuário" }}!</p>
                  <a class="navbar-link">
                    <router-link to="/loginAdmin" :class="{ hidden: isLoggedIn }">Login</router-link>
                  </a>
                </div>
              </i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AdminNavBar",
  data: function () {
    return {
      usuario: localStorage.getItem('email'),
      isLoggedIn: localStorage.getItem('email') != null
    }
  }
}
</script>

<style></style>