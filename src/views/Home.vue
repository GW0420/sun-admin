<template>
  <div class="home">home</div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

interface pageObj {
  pageNum: number
  pageSize: number
}
const page = reactive<pageObj>({ pageNum: 1, pageSize: 10 })

type test = string | number
const aaa = ref<test>(6456546)

function getData<T>(value: T): T {
  return value
}
getData<number>(123)

const bbb = <T, S>(a: T, b: S): T => {
  return a
}

bbb<string, string>('333', '4444')
</script>

<style lang="scss"></style>
