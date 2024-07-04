import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from "unhead";
import './style.css'
import App from './App.vue'

const pinia = createPinia()
createHead()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
