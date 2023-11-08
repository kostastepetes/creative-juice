import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createRouter, createWebHistory } from 'vue-router'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import HelloWorld from './components/HelloWorld.vue'
import App from './App.vue'

const routes = [
    { path: '/account', component: Account },
    { path: '/auth', component: Auth },
    { path: '/hello-world', component: HelloWorld }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')