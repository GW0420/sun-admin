import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style/reset.css'
import ElementPlus from './util/element'

const app = createApp(App)
ElementPlus(app)
app.use(store)
app.use(router)
app.mount('#app')
