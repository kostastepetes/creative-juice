import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createRouter, createWebHistory } from 'vue-router'
import Account from './views/Account.vue'
import Auth from './views/Auth.vue'
import Homepage from './views/Homepage.vue'
import About from './views/About.vue'
import Profile from './views/Profile.vue'
import App from './App.vue'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)

const routes = [
    { path: '/account', component: Account },
    { path: '/auth', component: Auth },
    { path: '/', component: Homepage },
    { path: '/about', component: About },
    { path: '/profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')