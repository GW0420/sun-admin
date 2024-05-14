<template>
  <el-icon :size="size" :color="color">
    <component :is="iconName" />
  </el-icon>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  iconName: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 25
  },
  color: {
    type: String,
    default: '#3963bc'
  }

})
</script>

<style lang="scss" scoped>
</style>
