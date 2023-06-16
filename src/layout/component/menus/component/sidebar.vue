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
