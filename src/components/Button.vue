<template>
  <div class="button" :style="styles" @mouseover="dowmloadover(styles)" @mouseleave="downloadleave(styles)">
    <slot />
  </div>
</template>

<script setup>
import { defineProps, computed, ref, reactive } from "vue"

const props = defineProps({
  color: String,
  background: String,
  size: String,
  type: {
    type: String,
    default: "default"
  }
})

const temp1 = {
  small: { lineHeight: "28px", height: "28px", padding: "0 10px" },
  middle: { lineHeight: "32px", height: "32px", padding: "0 12px" },
  large: { lineHeight: "36px", height: "36px", padding: "0 16px" }
}

const temp2 = reactive({
  default: {
    background: props.background,
    color: "#fff"
  },
  plain: {
    color: "#606266",
    border: "1px solid #dcdfe6"
  },
  text: { color: props.color }
})

const styles = computed(() => {
  return {
    fontSize: "14px",
    transition: "all 0.3s",
    cursor: "pointer",
    borderRadius: "4px",
    ...temp1[props.size],
    ...temp2[props.type]
  }
})
// const styles = reactive({
//   fontSize: "14px",
//   transition: "all 0.3s",
//   cursor: "pointer",
//   borderRadius: "4px",
//   ...temp1[props.size],
//   ...temp2[props.type]
// })

const dowmloadover = msg => {
  if (props.type === "plain") {
    temp2[props.type]["color"] = props.color
    temp2[props.type]["border"] = `1px solid ${props.color}`
  }
}

const downloadleave = msg => {
  if (props.type === "plain") {
    temp2[props.type]["color"] = "#606266"
    temp2[props.type]["border"] = "1px solid #dcdfe6"
  }
}
</script>

<style lang="scss"></style>
