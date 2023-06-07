import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// 样式
import "./style/reset.css"
import "./style/transition.css"
// d登录鉴权
import "./router/permission"
// element组件
import ElementPlus from "./util/element"
// 粒子特效组件
import VueParticles from "vue-particles"

// 注册
const app = createApp(App)
ElementPlus(app)
app.use(store)
app.use(router)
app.use(VueParticles)
app.mount("#app")
