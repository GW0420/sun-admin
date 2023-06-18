<template>
  <el-menu
    class="el-menu-vertical-demo"
    active-text-color="#fff"
    background-color="#001529"
    text-color="#fefefea6"
    :collapse="!$store.getters.isCollapse"
    :default-active="router"
    router
  >
    <!-- 子集 menu 菜单 -->
    <SidebarItem v-for="item in menuList" :key="item.path" :route="item"></SidebarItem>
  </el-menu>
</template>

<script setup>
import { watch, ref } from "vue"
import { useRoute } from "vue-router"
import SidebarItem from "./SidebarItem.vue"

const route = useRoute()
const menuList = [
  {
    path: "/profile",
    name: "profile",
    meta: {
      title: "个人中心",
      icon: "UserFilled"
    }
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/manage",
    meta: {
      title: "用户",
      icon: "Promotion"
    },
    children: [
      {
        path: "/user/manage",
        name: "user-manage",
        meta: {
          title: "用户管理",
          icon: "Avatar"
        },
        children: []
      },
      {
        path: "/user/role",
        name: "user-role",
        meta: {
          title: "角色列表",
          icon: "Menu"
        },
        children: []
      },
      {
        path: "/user/permission",
        name: "permission",
        meta: {
          title: "权限列表",
          icon: "HelpFilled"
        },
        children: []
      }
    ]
  },
  {
    path: "/article",
    name: "article",
    redirect: "/article/ranking",
    meta: {
      title: "文章",
      icon: "Tools"
    },
    children: [
      {
        path: "/article/ranking",
        name: "article-ranking",
        meta: {
          title: "文章排名",
          icon: "Promotion"
        },
        children: []
      },
      {
        path: "/article/create",
        name: "article-create",
        meta: {
          title: "创建文章",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/article/test1",
        name: "测试标签01",
        meta: {
          title: "测试标签01",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/article/test2",
        name: "测试标签02",

        meta: {
          title: "测试标签02",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/article/test3",
        name: "测试标签03",

        meta: {
          title: "测试标签03",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/article/test4",
        name: "测试标签04",

        meta: {
          title: "测试标签01",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/article/test5",
        name: "测试标签5",

        meta: {
          title: "测试标签05",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/article/test6",
        name: "测试标签06",

        meta: {
          title: "测试标签06",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/article/test7",
        name: "测试标签07",

        meta: {
          title: "测试标签07",
          icon: "Management"
        },
        children: []
      }
    ]
  }
]

const router = ref("")
watch(
  route,
  msg => {
    router.value = msg.path
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: initial;
}
</style>
