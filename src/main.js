import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Skills from '@/pages/Skills.vue'
import Formation from '@/pages/Formation.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/skills', component: Skills },
    { path: '/formation', component: Formation },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')