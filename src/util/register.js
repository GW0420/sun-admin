/**
 * @constructor sun
 * @description 全局注册组件
 */

// 预览代码块
import PreCode from "@/components/PreCode.vue"
// element-plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

// 注册
export default app => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  app.use(ElementPlus)
  app.component("PreCode", PreCode)
}
