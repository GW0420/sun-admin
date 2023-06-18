export const articleList = [
  {
    path: "/article",
    name: "文章",
    meta: {
      title: "文章",
      icon: "Tools"
    },
    children: [
      {
        path: "/article/ranking",
        name: "文章排名",
        component: () => import("@/views/article-ranking/index.vue"),
        meta: {
          title: "文章排名",
          icon: "Promotion"
        }
      },
      {
        path: "/article/create",
        name: "创建文章",
        component: () => import("@/views/article-create/index.vue"),
        meta: {
          title: "创建文章",
          icon: "Management"
        }
      },
      {
        path: "/article/test1",
        name: "测试标签01",
        component: () => import("@/views/test1/index.vue"),
        meta: {
          title: "测试标签01",
          icon: "Management"
        }
      },
      {
        path: "/article/test2",
        name: "测试标签02",
        component: () => import("@/views/test2/index.vue"),
        meta: {
          title: "测试标签02",
          icon: "Management"
        }
      },
      {
        path: "/article/test3",
        name: "测试标签03",
        component: () => import("@/views/test3/index.vue"),
        meta: {
          title: "测试标签03",
          icon: "Management"
        }
      },
      {
        path: "/article/test4",
        name: "测试标签04",
        component: () => import("@/views/test4/index.vue"),
        meta: {
          title: "测试标签01",
          icon: "Management"
        }
      },
      {
        path: "/article/test5",
        name: "测试标签5",
        component: () => import("@/views/test5/index.vue"),
        meta: {
          title: "测试标签05",
          icon: "Management"
        }
      },
      {
        path: "/article/test6",
        name: "测试标签06",
        component: () => import("@/views/test6/index.vue"),
        meta: {
          title: "测试标签06",
          icon: "Management"
        }
      },
      {
        path: "/article/test7",
        name: "测试标签07",
        component: () => import("@/views/test7/index.vue"),
        meta: {
          title: "测试标签07",
          icon: "Management"
        }
      }
    ]
  }
]
