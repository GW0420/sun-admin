import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/reset.css'
import ElementPlus from './util/element'
import VueParticles from 'vue-particles' 
const app = createApp(App)
ElementPlus(app)
app.use(store)
app.use(router)
app.use(VueParticles)
app.mount('#app')
