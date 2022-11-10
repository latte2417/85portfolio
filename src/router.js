import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HelloWorld.vue'
import AboutMe from './components/About.vue'

const routes = [
  { path: '/', name: 'Homnpe', component: Home },
  { path: '/about', name: 'About', component: AboutMe },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

export default router