export const profileList = [
  {
    path: "/profile",
    name: "个人中心",
    meta: {
      title: "个人中心",
      icon: "UserFilled"
    },
    component: () => import("@/views/profile/index.vue")
  }
]
