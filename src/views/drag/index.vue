<template>
  <DemoCard title="测试页面， 待完善。。。。。。。" type="html" code="xxx">
    <div class="sun-drag drag1">👋 拖拽这里!</div>
  </DemoCard>
</template>

<script setup>
import DemoCard from "@/components/DemoCard.vue"
import { onMounted } from "vue"
import data from "@gw0420/hooks"

const { useDrag } = data.hooks

// import { useDrag } from "@/util/util.js"
onMounted(() => {
  useDrag(".drag1")
})
</script>

<style lang="scss" scoped>
// .sun-drag {
//   width: 100%;
//   height: 100%;
// }
.sun-drag {
  height: 50px;
  width: 100px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 4px;
  position: fixed;
  cursor: move;
  z-index: 9999;
  padding: 16px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &.drag1 {
    background: linear-gradient(to right, rgb(99, 60, 243), rgba(99, 60, 243, 0.6));
  }
  .drag-target {
    font-size: 16px;
  }
  .drag-desc {
    color: #ccc;
    font-size: 12px;
    text-align: left;
  }
  .drag-position {
    color: #ccc;
    font-size: 14px;
    text-align: left;
  }
}
</style>
