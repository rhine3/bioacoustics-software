import { createApp } from 'vue'
import '../node_modules/flowbite-vue/dist/index.css'
import App from './App.vue'
import './assets/main.css'
import './index.css'

import router from './router'
const app = createApp(App)


app.use(router)

app.mount('#app')
