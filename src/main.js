import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'devicon/devicon.min.css'

import router from './router'

createApp(App)
    .use(router)
    .mount('#app')