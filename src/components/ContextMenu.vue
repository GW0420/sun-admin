<template>
  <ul class="context-menu-container">
    <li @click="onRefreshClick">刷新</li>
    <li @click="onCloseRightClick">关闭右侧</li>
    <li @click="onCloseLeftClick">关闭左侧</li>
    <li @click="onCloseOtherClick">关闭其他</li>
  </ul>
</template>

<script setup>
import { defineProps, nextTick, inject } from "vue"
import { useRouter, useRoute } from "vue-router"

defineProps({
  index: {
    type: Number,
    required: true
  }
})

const router = useRouter()
const route = useRoute()

// 刷新
let data = inject("flag")
const onRefreshClick = () => {
  data.value = false
  setTimeout(() => {
    data.value = true
  }, 300)
}

// 关闭右侧
const onCloseRightClick = () => {}

// 关闭左侧
const onCloseLeftClick = () => {}

// 关闭其他
const onCloseOtherClick = () => {}
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
