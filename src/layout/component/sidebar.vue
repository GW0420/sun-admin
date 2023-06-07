<template>
  <el-menu
    default-active="2"
    active-text-color="#ffd04b"
    background-color="#304156"
    text-color="#fff"
    :collapse="false"
    router
  >
    <div v-for="items in menuList" :key="items.path">
      <el-sub-menu :index="items.path" v-if="items.children?.length">
        <template #title>
          <el-icon><component :is="items.meta.icon" /></el-icon>
          <span>{{ items.meta.title }}</span>
        </template>
        <el-menu-item :index="item.path" v-for="item in items.children" :key="item.path">
          <el-icon><component :is="item.meta.icon" /></el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="items.path" v-else>
        <el-icon><component :is="items.meta.icon" /></el-icon>
        <span>{{ items.meta.title }}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
console.log(1111, router.getRoutes())
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
    props: {
      default: false
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
    props: {
      default: false
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
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: initial;
}
</style>
