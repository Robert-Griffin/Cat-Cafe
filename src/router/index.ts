import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatsView from '../views/CatsView.vue'
import ReservationsView from '../views/ReservationsView.vue'

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
    },
    {
        path: '/reservations',
        name: 'reservations',
        component: ReservationsView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
