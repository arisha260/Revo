import './assets/scss/main.scss'
import 'swiper/css';
import 'swiper/css/navigation';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

createApp(App).use(createPinia())
createApp(App).mount('#app')


//или

// const app = createApp(App)
//
// app.use(createPinia())
// app.use(router)
//
// app.mount('#app')