<template>
  <div class="bread" :style="{ width: $store.getters.isCollapse ? '210px' : '60px' }" @click="onHumburgerClick">
    <!-- <svg-icon class="hamburger" :icon="icon"></svg-icon> -->
    <span :class="['iconfont', $store.getters.isCollapse ? 'icon-caidandakai' : 'icon-caidanzhedie']"></span>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const icon = computed(() => {
  return store.getters.isCollapse ? "hamburger-opened" : "hamburger-closed"
})
const onHumburgerClick = () => {
  store.dispatch("app/getCollapse")
}
</script>

<style scoped lang="scss">
.bread {
  position: absolute;
  bottom: 0;
  box-shadow: 0 0 6px -2px #409eff;
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  transition: all 0.3s;
  color: #409eff;
  padding-left: 16px;
  box-sizing: border-box;
  .iconfont {
    cursor: pointer;
  }
}
</style>
