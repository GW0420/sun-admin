<template>
  <div class="logo">
    <div class="action"></div>
    <div class="title" v-if="$store.getters.isCollapse">SunAdmin</div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.logo {
  height: 50px;
  // width: 99%;
  line-height: 60px;
  text-align: center;
  background: #002140;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
}

.title {
  color: #fff;
  font-weight: 600;
  line-height: 50px;
  font-size: 16px;
  white-space: nowrap;
}
</style>
