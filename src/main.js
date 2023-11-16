import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createRouter, createWebHistory } from 'vue-router'
import Account from './views/Account.vue'
import Auth from './views/Auth.vue'
import Homepage from './views/Homepage.vue'
import About from './views/About.vue'
import App from './App.vue'

const routes = [
    { path: '/account', component: Account },
    { path: '/auth', component: Auth },
    { path: '/', component: Homepage },
    { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')