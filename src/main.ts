import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@vuepic/vue-datepicker/dist/main.css'
import './assets/style.css'

createApp(App).use(createPinia()).use(router).mount('#app')
