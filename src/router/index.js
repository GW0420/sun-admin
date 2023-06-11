import { createRouter, createWebHashHistory } from "vue-router"

import layout from "@/layout/index.vue"
import { userList } from "./modules/user"
import { articleList } from "./modules/article"
import { profileList } from "./modules/profile"

const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/profile",
    component: layout,
    children: [...profileList, ...userList, ...articleList]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
