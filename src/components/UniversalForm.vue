<template>
  <div class="universal-form">
    <div class="form-item" v-for="(item, index) in formDataList" :key="index">
      <el-input
        v-model="item.value[1]"
        :placeholder="item.placeholder"
        :suffix-icon="item.icon"
        :style="{ width: item.width }"
        :clearable="item.clearable ? item.clearable : true"
        type="text"
        v-if="item.type === 'text'"
      />
      <el-select
        v-model="item.value[1]"
        :placeholder="item.placeholder"
        :style="{ width: item.width }"
        :multiple="item.multiple"
        :clearable="item.clearable ? item.clearable : true"
        type="select"
        v-if="item.type === 'select'"
      >
        <el-option v-for="item in item.options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-date-picker
        v-model="item.value[1]"
        type="date"
        :placeholder="item.placeholder"
        :clearable="item.clearable ? item.clearable : true"
        :format="item.format"
        :style="{ width: item.width }"
        v-if="item.type === 'date'"
      />
      <el-date-picker
        v-model="item.value[1]"
        type="datetime"
        :placeholder="item.placeholder"
        :clearable="item.clearable ? item.clearable : true"
        :format="item.format"
        :style="{ width: item.width }"
        v-if="item.type === 'datetime'"
      />
    </div>
    <div class="btn-primary" @click="onSearchClick">查询</div>
    <div class="btn-reset" @click="onResetClick">重置</div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, ref } from "vue"

const props = defineProps({
  formData: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(["confirmData"])

const formDataList = ref([])
const submitForm = ref({})

watch(
  props.formData,
  msg => {
    formDataList.value = msg
  },
  { deep: true, immediate: true }
)

// 查询
const onSearchClick = () => {
  formDataList.value
    .map(item => item.value)
    .map(item => {
      return {
        [item[0]]: item[1]
      }
    })
    .forEach(item => {
      submitForm.value = { ...submitForm.value, ...item }
    })
  emits("confirmData", submitForm.value)
}

// 重置
const onResetClick = () => {
  formDataList.value.forEach(item => (item.value[1] = ""))
  Object.keys(submitForm.value).forEach(key => {
    submitForm.value[key] = ""
  })
  emits("confirmData", submitForm.value)
}
</script>

<style lang="scss">
.universal-form {
  display: flex;
  column-gap: 16px;
  .btn-primary {
    width: 60px;
    height: 32px;
    background: #3963bc;
    border-radius: 4px;
    font-size: 14px !important;
    line-height: 32px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    &:hover {
      background: #4974ce;
    }
  }
  .btn-reset {
    background: #f3f2f1;
    border-radius: 4px;
    width: 60px;
    height: 32px;
    cursor: pointer;
    color: #919191;
    font-weight: normal;
    text-align: center;
    line-height: 32px;
    font-size: 14px !important;
    &:hover {
      background: #e3e3e3;
    }
  }
}
</style>
