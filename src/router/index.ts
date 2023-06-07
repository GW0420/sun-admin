import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

import layout from "@/layout/index.vue"
import { userList } from "./modules/user"
import { articleList } from "./modules/article"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: layout,
    children: [
      {
        path: "/profile",
        name: "profile",
        meta: {
          title: "个人中心",
          icon: "UserFilled"
        },
        component: () => import("@/views/profile/index.vue")
      },
      ...userList,
      ...articleList
    ]
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
