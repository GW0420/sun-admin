<template>
  <div class="profile">
    profile
    <loading :loader="loader"></loading>
  </div>
</template>

<script setup lang="ts">
import loading from "component/loading.vue"

import { ref } from "vue"

const loader = ref<boolean>(true)
</script>

<style></style>
