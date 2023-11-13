import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Skills from '@/pages/Skills.vue'
import Formation from '@/pages/Formation.vue'
import Contact from '@/pages/Contact.vue'
import Skill_1 from '@/pages/Skill_1.vue'
import Skill_2 from '@/pages/Skill_2.vue'
import Skill_3 from '@/pages/Skill_3.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/skills', component: Skills },
    { path: '/formation', component: Formation },
    { path: '/contact', component: Contact },
    { path: '/skills/app_development', component: Skill_1 },
    { path: '/skills/app_optimisation', component: Skill_2 },
    { path: '/skills/system_administration', component: Skill_3 },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')