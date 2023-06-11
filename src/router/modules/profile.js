export const profileList = [
  {
    path: "/profile",
    name: "profile",
    meta: {
      title: "个人中心",
      icon: "UserFilled"
    },
    component: () => import("@/views/profile/index.vue")
  }
]
