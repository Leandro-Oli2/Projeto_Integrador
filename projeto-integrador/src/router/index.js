// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import MenuPage from '../views/MenuPage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/cardapio', component: MenuPage },
  { path: '/sobre', component: AboutPage },
  { path: '/contato', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
