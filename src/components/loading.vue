<template>
  <div class="loading" v-if="props.loader">
    <div class="mask"></div>
    <div class="loader"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

const props = defineProps({
  loader: {
    type: Boolean,
    default: false
  }
})
</script>

<style>
.loading {
  width: 100%;
  height: 100%;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.loader {
  position: fixed;
  top: 50%;
  left: 53%;
  width: 48px;
  height: 48px;
}

.loader:before {
  content: "";
  width: 48px;
  height: 5px;
  background: #f0808050;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: shadow324 0.5s linear infinite;
}

.loader:after {
  content: "";
  width: 100%;
  height: 100%;
  background: #f08080;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: jump7456 0.5s linear infinite;
}

@keyframes jump7456 {
  15% {
    border-bottom-right-radius: 3px;
  }

  25% {
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow324 {
  0%,
  100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.2, 1);
  }
}
</style>
