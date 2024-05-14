export const testList = [
  {
    path: "/test",
    name: "测试",
    meta: {
      title: "测试",
      icon: "Tools"
    },
    children: [
      // {
      //   path: "/test/ranking",
      //   name: "文章排名",
      //   component: () => import("@/views/test-ranking/index.vue"),
      //   meta: {
      //     title: "文章排名",
      //     icon: "Promotion"
      //   }
      // },
      // {
      //   path: "/test/create",
      //   name: "创建文章",
      //   component: () => import("@/views/test-create/index.vue"),
      //   meta: {
      //     title: "创建文章",
      //     icon: "Management"
      //   }
      // },
      {
        path: "/test/test1",
        name: "测试标签01",
        component: () => import("@/views/test1/index.vue"),
        meta: {
          title: "测试标签01",
          icon: "Management"
        }
      },
      {
        path: "/test/test2",
        name: "测试标签02",
        component: () => import("@/views/test2/index.vue"),
        meta: {
          title: "测试标签02",
          icon: "Management"
        }
      },
      {
        path: "/test/test3",
        name: "测试标签03",
        component: () => import("@/views/test3/index.vue"),
        meta: {
          title: "测试标签03",
          icon: "Management"
        }
      },
      {
        path: "/test/test4",
        name: "测试标签04",
        component: () => import("@/views/test4/index.vue"),
        meta: {
          title: "测试标签04",
          icon: "Management"
        }
      },
      {
        path: "/test/test5",
        name: "测试标签5",
        component: () => import("@/views/test5/index.vue"),
        meta: {
          title: "测试标签05",
          icon: "Management"
        }
      },
      {
        path: "/test/test6",
        name: "测试标签06",
        component: () => import("@/views/test6/index.vue"),
        meta: {
          title: "测试标签06",
          icon: "Management"
        }
      },
      {
        path: "/test/test7",
        name: "测试标签07",
        component: () => import("@/views/test7/index.vue"),
        meta: {
          title: "测试标签07",
          icon: "Management"
        }
      },
      {
        path: "/test/test8",
        name: "测试标签08",
        component: () => import("@/views/test8/index.vue"),
        meta: {
          title: "测试标签08",
          icon: "Management"
        }
      },
      {
        path: "/test/test9",
        name: "测试标签09",
        component: () => import("@/views/test9/index.vue"),
        meta: {
          title: "测试标签09",
          icon: "Management"
        }
      }
    ]
  }
]
