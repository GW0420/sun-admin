<template>
  <div class="navbar">
    <div class="bread">
      <div class="hamburger" @click="onHumburgerClick">
        <svg-icon class="hamburger" :icon="icon"></svg-icon>
      </div>
    </div>
    <div class="logout">logout</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useStore } from "vuex"

const store = useStore()
const icon = computed(() => {
  console.log("isCollapse", store.getters.isCollapse)
  return store.getters.isCollapse ? "hamburger-opened" : "hamburger-closed"
})
const onHumburgerClick = () => {
  store.dispatch("app/getCollapse")
}
</script>

<style lang="scss">
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
