<template>
  <div class="logo">
    <svg-icon icon="logo" size="middle"></svg-icon>
    <div class="title" v-if="$store.getters.isCollapse">SunAdmin</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.logo {
  height: 50px;
  // width: 99%;
  line-height: 60px;
  text-align: center;
  background: #002140;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
}
.title {
  color: #fff;
  font-weight: 600;
  line-height: 50px;
  font-size: 16px;
  white-space: nowrap;
}
</style>
