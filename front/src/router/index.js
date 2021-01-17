import Vue from 'vue'
import VueRouter from 'vue-router'
import landingPageRouter from './landingPageRouter';
import dashboardRouter from './dashboardRouter';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: landingPageRouter
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: dashboardRouter
  },
  { path: "*", redirect: "/" }
]

const router = new VueRouter({
  routes
})

export default router
