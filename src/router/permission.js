import router from "./index"
import store from "@/store"

// 白名单
const whiteList = ["/login"]

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  // 存在token,进入主页
  if (store.getters.token) {
    if (to.path === "/login") {
      next("/")
    } else {
      next()
    }
  } else {
    // 不存在token,且不在白名单中,退出至登录页
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next("/login")
    }
  }
})
