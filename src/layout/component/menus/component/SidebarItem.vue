<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <el-sub-menu v-if="route.children?.length" :index="route.path">
    <template #title>
      <el-icon><component :is="route.meta.icon" /></el-icon>
      <span>{{ route.meta.title }}</span>
    </template>
    <!-- 循环渲染 -->
    <sidebar-item v-for="item in route?.children" :key="item.path" :route="item"></sidebar-item>
  </el-sub-menu>
  <!-- 渲染 item 项 -->
  <el-menu-item v-else :index="route.path">
    <el-icon><component :is="route.meta.icon" /></el-icon>
    <span>{{ route.meta.title }}</span>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  route: {
    type: Object,
    required: true
  }
})

// console.log(999999999, props)
</script>

<style lang="scss" scoped></style>
