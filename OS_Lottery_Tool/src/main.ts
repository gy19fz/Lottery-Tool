import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import './assets/index.css';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) //use pinia
app.use(router) //use router
app.use(ElementPlus as any)
app.mount('#app')
