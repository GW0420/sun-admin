<template>
  <div class="profile">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">Element-Plus二次封装通用表单</div>
      </template>
      <UniversalForm :formData="formData" @confirmData="onConfirmData"></UniversalForm>
    </el-card>
    <div>
      <pre v-highlight>
          <code class="language-html hljs">{{code}}</code>
      </pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import UniversalForm from "@/components/UniversalForm.vue"

const formData = ref([
  {
    type: "text",
    placeholder: "请输入关键字",
    width: "200px",
    icon: "Search",
    value: ["searchKeyword", ""]
  },
  {
    type: "select",
    placeholder: "请选择",
    width: "200px",
    multiple: false,
    value: ["select", ""],
    options: [
      {
        value: "Option1",
        label: "Option1"
      },
      {
        value: "Option2",
        label: "Option2"
      },
      {
        value: "Option3",
        label: "Option3"
      },
      {
        value: "Option4",
        label: "Option4"
      },
      {
        value: "Option5",
        label: "Option5"
      }
    ]
  },
  {
    type: "date",
    placeholder: "开始日期",
    format: "YYYY-MM-DD",
    width: "200px",
    value: ["beginTime", ""]
  },
  {
    type: "datetime",
    placeholder: "结束日期",
    format: "YYYY-MM-DD HH:mm:ss",
    width: "200px",
    value: ["endTime", ""]
  }
])

const code = ref(`{
  "searchKeyword": "",
  "select": "",
  "beginTime": "",
  "endTime": ""
}`)
const onConfirmData = msg => {
  code.value = msg
  console.log("🚀 ~ file: index.vue:53 ~ onConfirmData ~ msg:", msg)
}
</script>

<style lang="scss">
.profile {
  color: var(--test);
}
</style>
