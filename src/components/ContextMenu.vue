<template>
  <ul class="context-menu-container">
    <li @click="onRefreshClick">刷新</li>
    <li @click="onCloseLeftClick">关闭左侧</li>
    <li @click="onCloseRightClick">关闭右侧</li>
    <li @click="onCloseOtherClick">关闭其他</li>
  </ul>
</template>

<script setup>
import store from "@/store"
import { defineProps, inject } from "vue"

const props = defineProps({
  path: {
    type: String,
    default: ""
  }
})

// 刷新
let isRouterAlive = inject("isRouterAlive")
const onRefreshClick = () => {
  isRouterAlive.value = false
  setTimeout(() => {
    isRouterAlive.value = true
  })
}

// 关闭右侧
const onCloseRightClick = () => {
  store.dispatch("app/setRightTags", props.path)
}

// 关闭左侧
const onCloseLeftClick = () => {
  store.dispatch("app/setLeftTags", props.path)
}

// 关闭其他
const onCloseOtherClick = () => {
  store.dispatch("app/setOtherTags", props.path)
}
</script>

<style lang="scss">
.context-menu-container {
  position: fixed;
  background: #fff;
  z-index: 3000;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
