import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import PreCode from "@/components/PreCode.vue"
// 样式
import "./style/reset.scss"
import "animate.css"
// 登录鉴权
import "./router/permission"
// svg-icon组件
import InstallIcon from "@/assets/icons/index"
// 粒子特效组件
import VueParticles from "vue-particles"
// highlight.js
// import hljs from "highlight.js"
// import "highlight.js/styles/mono-blue.css"
import "highlight.js/styles/mono-blue.css"
import "highlight.js/lib/common"
import hljsVuePlugin from "@highlightjs/vue-plugin"

// 全局注册组件
import register from "./util/register"

// 引入sun-utils
// import gwUtils from "@gw0420/utils"
// import "/node_modules/@gw0420/utils/utils.css"
import "/node_modules/@gw0420/hooks/hooks.css"

// 注册
const app = createApp(App)

// app.directive("highlight", function (el) {
//   let blocks = el.querySelectorAll("pre code")
//   blocks.forEach(block => {
//     hljs.highlightBlock(block)
//   })
// })

// InstallIcon(app)
app.use(register)
app.use(store)
app.use(router)
app.use(VueParticles)
app.use(InstallIcon)
// app.use(gwUtils)
app.use(hljsVuePlugin)
app.mount("#app")
