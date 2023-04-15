import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'SobreView',
    component: () => import('../views/SobreView.vue')
  },
  {
    path: '/reservas',
    name: 'ReservasView',
    component: () => import('../views/ReservasView.vue')
  },
  {
    path: '/acomodacoes',
    name: 'QuartosView',
    component: () => import('../views/QuartosView.vue')
  },
  {
    path: '/contato',
    name: 'ContatoView',
    component: () => import('../views/ContatoView.vue')
  },
  {
    path: '/minhasreservas',
    name: 'MinhasReservasView',
    component: () => import( '../views/MinhasReservasView.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/cadastro',
    name: 'CadastroView',
    component: () => import('../views/CadastroView.vue')
  },
  {
    path: '/comentarios',
    name: 'ComentariosView',
    component: () => import('../views/ComentariosView.vue')
  },
  {
    path: '/loginAdmin',
    name: 'LoginAdmin',
    component: () => import('../views_Admin/LoginAdminView.vue')
  },
  {
    path: '/homeAdmin',
    name: 'HomeAdmin',
    component: () => import('../views_Admin/HomeAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  },
  {
    path: '/hospedesAdmin',
    name: 'HospedesAdmin',
    component: () => import('../views_Admin/HospedesAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  },
  {
    path: '/reservasAdmin',
    name: 'ReservasAdmin',
    component: () => import('../views_Admin/ReservasAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  },
  {
    path: '/staffAdmin',
    name: 'StaffAdmin',
    component: () => import('../views_Admin/StaffAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  },
  {
    path: '/consumoAdmin',
    name: 'ConsumoAdmin',
    component: () => import('../views_Admin/ConsumoAdminView.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  },
  {
    path: '/editUsers',
    name: 'EditUsuarios',
    component: () => import('../components/back_component/EditUsuarios.vue'),
    meta: { hideNavigation: true, hideFooter: true}
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
