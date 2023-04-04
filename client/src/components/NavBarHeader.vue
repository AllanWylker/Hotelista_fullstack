<template>
	<html>

	<head>
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
	</head>
	<header>
		<nav v-if="!$route.meta.hideNavigation">
			<div class="navbar">
				<div class="navbar-wrap">
					<a class="navbar-logo">
						<router-link to="/"><img class="navbar-logo" src="@/assets/logotipo/Hotelista_sem_fundo.png"
								alt="Logotipo Hotelista - Página home" /></router-link> </a>
					<div class="navbar-menu-wrap" v-bind:class="{ navbarhidden: navbarHidden }">
						<div class="navbar-menu">
							<a class="navbar-link active"><router-link to="/">Home</router-link></a>
							<a class="navbar-link"><router-link to="/reservas">Reserve já</router-link></a>
							<a class="navbar-link"><router-link to="/acomodacoes">Nossas Acomodações</router-link></a>
							<a class="navbar-link"><router-link to="/contato">Contato</router-link></a>
							<a class="navbar-link"><router-link to="/sobre">Sobre</router-link></a>
							<i class="navbar-dropdown-wrap">
								<p class="navbar-dropdown-button">&#xe853;</p>
								<div class="navbar-dropdown">
									<p class="navbar-user">Olá, {{ usuario != null ? usuario : "usuário" }}!</p>
									<a class="navbar-link">
										<router-link to="/login" :class="{ hidden: isLoggedIn }">Login</router-link>
									</a>
								</div>
							</i>
						</div>
					</div>
					<div class="navbar-menu-button-wrap">
						<span @click="$event => hideShowNavbar($event)" class="navbar-menu-button" v-html="getNavbarIcon()">

						</span>
					</div>
				</div>
			</div>
		</nav>
		<router-view />
	</header>

	</html>
</template>

<script>
export default {
	name: "NavBarHeader",
	data: function () {
		return {
			usuario: localStorage.getItem('email'),
			isLoggedIn: localStorage.getItem('email') != null,
			navbarHidden: true
		}
	},
	methods: {
		hideShowNavbar() {
			this.navbarHidden = !this.navbarHidden;
		},
		getNavbarIcon() {
			return this.navbarHidden ? '&#xe5d2;' : '&#xe5ce;';
		}
	}
};
</script>
<style>
/* CABEÇALHO */
nav {
	position: sticky;
	position: -webkit-sticky;
	margin-left: -1%;
	top: 0;
	z-index: 100;
	width: 100vw;
}

a.hidden {
	display: none;
}

.navbar {
	display: block;
	padding: 0.5em 1em 0.5em 1em;
	font-size: 14px;
	color: #333333;
	background-color: #ffffff;
	border-bottom: 2px solid #333333;
}

.navbar-wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
}

a.navbar-logo {
	text-decoration: none;
	color: #333333;
	display: flex;
	align-items: center;
	padding-left: 1%;
	width: 4em;
	height: 4em;
	transition: 0.5s;
}

a.navbar-logo:hover {
	opacity: 0.7;
}

img.navbar-logo {
	width: 100%;
	height: auto;
}

.navbar-menu-wrap {
	flex: 1 0 auto;
	display: flex;
	align-items: middle;
	justify-content: flex-end;
}

.navbar-menu {
	display: flex;
	flex-direction: row;
	text-transform: uppercase;
	align-items: center;
}

.navbar-button {
	display: none;
}

a {
	color: #333333;
	text-decoration: none;
}

router-link {
	text-decoration: black;
}

.navbar-link {
	display: inline-block;
	vertical-align: middle;
	margin: 0 1em 0 1em;
	padding: 0;
	text-decoration: none;
	transition: 0.5s;
}

.navbar-link:hover:not(.active),
.navbar-dropdown-button:hover {
	opacity: 0.7;
}

a .active {
	text-decoration: underline;
}

.navbar-dropdown-wrap {
	text-decoration: none;
	font-style: normal;
	position: relative;
	margin-left: 2em;
}

.navbar-dropdown-wrap .navbar-link:hover {
	text-decoration: underline;
}

.navbar-dropdown-button {
	display: inline;
	cursor: pointer;
	font-family: "Material Icons";
	vertical-align: middle;
	font-size: 36px;
	border-radius: 50%;
	padding-right: 25px;
	margin-block: 0;
}

.navbar-dropdown {
	display: none;
	position: absolute;
	right: 2%;
	transform: translate3d(0, -1vh, 0);
	background-color: #ffffff;
	width: 25em;
	z-index: 101;
	border: 2px solid #333333;
	padding: 1em 0 1em 2em;
}

.navbar-dropdown-wrap:hover .navbar-dropdown {
	display: block;
}

.navbar-dropdown-wrap:hover .navbar-dropdown-button {
	opacity: 0.7;
}

.navbar-dropdown a:not(.hidden),
.navbar-user {
	display: inline-block;
	padding: 0;
	color: #333333;
	line-height: 0;
	width: 100%;
	text-align: left;
	margin: 0;
	padding-left: 5%;
}

.navbar-menu-button-wrap {
	display: none;
}

@media (max-width: 600px) and (orientation: portrait) {

	.navbar-menu-button-wrap {
		display: block;
		margin: 1vh 0 0 0;
	}

	.navbar-menu-button {
		font-size: 2em;
		font-family: "Material Icons";
		cursor: pointer;
	}

	.navbarhidden {
		display: none;
	}

	header {
		position: static;

	}

	nav {
		border-right: 5px solid white;
	}

	.navbar-wrap,
	.navbar-menu {
		flex-direction: column;
		margin-top: 1em;
	}

	.navbar-link {
		margin: 0.25em 0 0.25em 0;
		text-align: center;
	}

	.navbar-dropdown-wrap {
		margin: 1em 0 1em 0;
		text-align: center;
		right: 2%;
		width: 10em;
		z-index: 101;
		padding: 1em 0 1em 2em;
	}

	.navbar-dropdown {
		left: -25%;
		display: none;
		position: absolute;
		right: 2%;
		transform: translate3d(0, -1vh, 0);
		background-color: #ffffff;
		width: 15em;
		border: 2px solid #333333;
		padding: 1em 0 1em 2em;
	}

	.navbar-dropdown-wrap {
		padding: 0;
		margin: 0;
		margin-top: 0.5em;
		text-align: center;
	}

	.navbar-dropdown-button {
		padding: 0;
	}
}
</style>
