<template>
  <el-menu default-active="2" active-text-color="#ffd04b" background-color="#304156" text-color="#fff" router>
    <div v-for="items in menuList" :key="items.path">
      <el-sub-menu :index="items.path" v-if="items.children?.length">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ items.meta.title }}</span>
        </template>
        <el-menu-item :index="item.path" v-for="item in items.children" :key="item.path">
          <el-icon><document /></el-icon>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item :index="items.path" v-else>
        <el-icon><document /></el-icon>
        <span>{{ items.meta.title }}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script setup lang="ts">
const menuList = [
  {
    path: "/profile",
    name: "profile",
    meta: {
      title: "profile",
      icon: "el-icon-user"
    }
  },
  {
    path: "/user",
    redirect: "/user/manage",
    meta: {
      title: "user",
      icon: "personnel"
    },
    props: {
      default: false
    },
    children: [
      {
        path: "/user/manage",
        name: "userManage",
        meta: {
          title: "userManage",
          icon: "personnel-manage"
        },
        children: []
      },
      {
        path: "/user/role",
        name: "userRole",
        meta: {
          title: "role",
          icon: "role"
        },
        children: []
      },
      {
        path: "/user/permission",
        name: "userPermission",
        meta: {
          title: "permission",
          icon: "permission"
        },
        children: []
      }
    ]
  },
  {
    path: "/article",
    redirect: "/article/ranking",
    meta: {
      title: "article",
      icon: "article"
    },
    props: {
      default: false
    },
    children: [
      {
        path: "/article/ranking",
        name: "articleRanking",
        meta: {
          title: "articleRanking",
          icon: "article-ranking"
        },
        children: []
      },
      {
        path: "/article/create",
        name: "articleCreate",
        meta: {
          title: "articleCreate",
          icon: "article-create"
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
