export const articleList = [
  {
    path: "/article",
    name: "article",
    meta: {
      title: "文章",
      icon: "Tools"
    },
    children: [
      {
        path: "/article/ranking",
        name: "article-ranking",
        component: () => import("@/views/article-ranking/index.vue"),
        meta: {
          title: "文章排名",
          icon: "Promotion"
        }
      },
      {
        path: "/article/create",
        name: "article-create",
        component: () => import("@/views/article-create/index.vue"),
        meta: {
          title: "创建文章",
          icon: "Management"
        }
      }
    ]
  }
]
