export const featuresList = [
  {
    path: "/features",
    name: "features",
    meta: {
      title: "组件",
      icon: "Promotion"
    },
    children: [
      {
        path: "/features/form",
        name: "表单组件",
        component: () => import("@/views/form/index.vue"),
        meta: {
          title: "表单组件",
          icon: "Avatar"
        }
      },
      {
        path: "/features/table",
        name: "表格弹窗",
        component: () => import("@/views/table/index.vue"),
        meta: {
          title: "表格弹窗",
          icon: "Menu"
        }
      },
      {
        path: "/features/modal",
        name: "弹窗组件",
        component: () => import("@/views/modal/index.vue"),
        meta: {
          title: "弹窗组件",
          icon: "HelpFilled"
        }
      }
    ]
  }
]
