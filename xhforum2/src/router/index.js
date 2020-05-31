import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import ListItem from '../components/Listltem'
import SignUp from '../views/SignUp'
Vue.use(VueRouter)

const routes = [
  {
    component: Home,
    path: '/',
    children: [{
      path: '',
      component: Main,
      name: 'home',
      children: [{
        path: '',
        name: Home,
        component: ListItem
      }]
    }]
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
