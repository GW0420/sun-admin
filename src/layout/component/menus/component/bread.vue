<template>
  <div class="bread" :style="{ width: $store.getters.isCollapse ? '210px' : '60px' }">bread</div>
</template>

<script setup></script>

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
}
</style>
