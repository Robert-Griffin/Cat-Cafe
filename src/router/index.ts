import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatsView from '../views/CatsView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/cats',
        name: 'cats',
        component: CatsView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
