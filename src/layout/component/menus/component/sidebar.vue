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
import { watch, ref, inject } from "vue"
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
    path: "/docs",
    name: "docs",
    meta: {
      title: "sun-docs",
      icon: "List"
    }
  },
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
        name: "img",
        meta: {
          title: "图片预览",
          icon: "Cherry"
        },
        children: []
      },
      {
        path: "/features/icon",
        name: "form",
        meta: {
          title: "图标组件",
          icon: "Service"
        },
        children: []
      },
      {
        path: "/features/button",
        name: "form",
        meta: {
          title: "按钮组件",
          icon: "Position"
        },
        children: []
      },
      {
        path: "/features/watermark",
        name: "水印组件",
        meta: {
          title: "水印组件",
          icon: "ElementPlus"
        },
        children: []
      },
      {
        path: "/features/form",
        name: "form",
        meta: {
          title: "表单组件",
          icon: "Avatar"
        },
        children: []
      },
      {
        path: "/features/table",
        name: "table",
        meta: {
          title: "表格组件",
          icon: "Menu"
        },
        children: []
      },
      {
        path: "/features/modal",
        name: "modal",
        meta: {
          title: "弹窗组件",
          icon: "HelpFilled"
        },
        children: []
      },
      {
        path: "/features/router-tabs",
        name: "img",
        meta: {
          title: "路由标签",
          icon: "ShoppingBag"
        },
        children: []
      },
      {
        path: "/features/tabs",
        name: "img",
        meta: {
          title: "选项标签",
          icon: "SoldOut"
        },
        children: []
      },
      {
        path: "/features/drag",
        name: "img",
        meta: {
          title: "拖拽排序",
          icon: "ToiletPaper"
        },
        children: []
      }
    ]
  },
  {
    path: "/test",
    name: "test",
    meta: {
      title: "测试",
      icon: "Tools"
    },
    children: [
      {
        path: "/test/test1",
        name: "测试标签01",
        meta: {
          title: "测试标签01",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/test/test2",
        name: "测试标签02",

        meta: {
          title: "测试标签02",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/test/test3",
        name: "测试标签03",

        meta: {
          title: "测试标签03",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/test/test4",
        name: "测试标签04",
        meta: {
          title: "测试标签04",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/test/test5",
        name: "测试标签5",

        meta: {
          title: "测试标签05",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/test/test6",
        name: "测试标签06",

        meta: {
          title: "测试标签06",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/test/test7",
        name: "测试标签07",

        meta: {
          title: "测试标签07",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/test/test8",
        name: "测试标签08",

        meta: {
          title: "测试标签08",
          icon: "Management"
        },
        children: []
      },
      {
        path: "/test/test9",
        name: "测试标签09",

        meta: {
          title: "测试标签09",
          icon: "Management"
        },
        children: []
      }
    ]
  }
]
const isRouterAlive = inject("isRouterAlive")
const router = ref("")
watch(
  route,
  msg => {
    router.value = msg.path
    isRouterAlive.value = false
    setTimeout(() => {
      isRouterAlive.value = true
    })
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
.el-menu {
  height: calc(100% - 90px) !important;
  overflow: hidden;
  overflow-y: scroll;
  border-right: initial;
}
</style>
