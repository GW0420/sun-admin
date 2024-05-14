import { createRouter, createWebHashHistory } from "vue-router"

import layout from "@/layout/index.vue"
import { featuresList } from "./modules/features"
import { testList } from "./modules/test"
import { profileList } from "./modules/profile"
import { docsList } from "./modules/docs"

const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/profile",
    component: layout,
    children: [...profileList, ...docsList, ...featuresList, ...testList]
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
