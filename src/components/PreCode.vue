<template>
  <div class="pre-code">
    <div class="pre-title">{{ title }}</div>
    <pre v-highlight>
        <code :class="type">{{props.code}}</code>
    </pre>
  </div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps({
  code: String,
  type: String,
  title: String
})
</script>

<style lang="scss" scoped>
.pre-title {
  color: var(--sun-black-1);
  font-weight: 600;
  margin-top: 32px;
}
</style>
