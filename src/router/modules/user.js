export const userList = [
  {
    path: "/user",
    name: "user",
    meta: {
      title: "用户",
      icon: "Promotion"
    },
    children: [
      {
        path: "/user/manage",
        name: "用户管理",
        component: () => import("@/views/user-manage/index.vue"),
        meta: {
          title: "用户管理",
          icon: "Avatar"
        }
      },
      {
        path: "/user/role",
        name: "角色列表",
        component: () => import("@/views/role-list/index.vue"),
        meta: {
          title: "角色列表",
          icon: "Menu"
        }
      },
      {
        path: "/user/permission",
        name: "权限列表",
        component: () => import("@/views/permission-list/index.vue"),
        meta: {
          title: "权限列表",
          icon: "HelpFilled"
        }
      }
    ]
  }
]
