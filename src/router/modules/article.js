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
      }
    ]
  }
]
