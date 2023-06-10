<template>
  <div class="home">
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary1</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <div style="font-size: 20px">
      <!-- 由于SVG图标默认不携带任何属性 -->
      <!-- 你需要直接提供它们 -->
      <Edit style="width: 1em; height: 1em; margin-right: 8px" />
      <Share style="width: 1em; height: 1em; margin-right: 8px" />
      <Delete style="width: 1em; height: 1em; margin-right: 8px" />
      <Search style="width: 1em; height: 1em; margin-right: 8px" />
    </div>
  </div>
</template>

<script setup>
// import { reactive, ref } from "vue"

// interface pageObj {
//   pageNum: number
//   pageSize: number
// }
// const page = reactive<pageObj>({
//   pageNum: 1,
//   pageSize: 10
// })

// type test = string | number
// const aaa = ref<test>(6456546)

// function getData<T>(value: T): T {
//   return value
// }
// getData<number>(123)

// const bbb = <T, S>(a: T, b: S): T => {
//   return a
// }

// bbb<string, string>("333", "4444")
</script>

<style lang="scss"></style>
