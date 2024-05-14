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
        path: "/features/preview",
        name: "图片预览",
        component: () => import("@/views/preview/index.vue"),
        meta: {
          title: "图片预览",
          icon: "Service"
        }
      },
      {
        path: "/features/icon",
        name: "图标组件",
        component: () => import("@/views/icon/index.vue"),
        meta: {
          title: "图标组件",
          icon: "Service"
        }
      },
      {
        path: "/features/button",
        name: "按钮组件",
        component: () => import("@/views/button/index.vue"),
        meta: {
          title: "按钮组件",
          icon: "Avatar"
        }
      },
      {
        path: "/features/watermark",
        name: "水印组件",
        component: () => import("@/views/watermark/index.vue"),
        meta: {
          title: "水印组件",
          icon: "ElementPlus"
        }
      },
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
      },
      {
        path: "/features/router-tabs",
        name: "路由标签",
        component: () => import("@/views/routerTabs/index.vue"),
        meta: {
          title: "路由标签",
          icon: "ShoppingBag"
        }
      },
      {
        path: "/features/tabs",
        name: "选项标签",
        component: () => import("@/views/tabs/index.vue"),
        meta: {
          title: "选项标签",
          icon: "SoldOut"
        }
      },
      {
        path: "/features/drag",
        name: "拖拽排序",
        component: () => import("@/views/drag/index.vue"),
        meta: {
          title: "拖拽排序",
          icon: "ToiletPaper"
        }
      }
    ]
  }
]
