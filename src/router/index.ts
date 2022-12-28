import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatsView from '../views/CatsView.vue'
import MenuView from '../views/MenuView.vue'
import ReservationsView from '../views/ReservationsView.vue'
import ContactUsView from '../views/ContactUsView.vue'

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
        path: '/menu',
        name: 'menu',
        component: MenuView
    },
    {
        path: '/reservations',
        name: 'reservations',
        component: ReservationsView
    },
    {
        path: '/contact',
        name: 'contactUs',
        component: ContactUsView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
