<template>
  <svg class="svg-icon" :style="iconStyle" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { defineProps, computed } from "vue"

const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  size: {
    type: String,
    default: "small"
  }
})

// 项目内图标
const iconName = computed(() => `#icon-${props.icon}`)

// 图标大小
const iconStyle = computed(() => {
  let temp = {
    small: { width: "1em", height: "1em" },
    middle: { width: "2em", height: "2em" },
    large: { width: "3em", height: "3em" }
  }
  return temp[props.size]
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  // margin-right: 5px;
}
</style>
