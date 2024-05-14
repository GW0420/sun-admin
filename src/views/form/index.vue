<template>
  <DemoCard title="Element-Plus二次封装通用表单" type="html" :code="code">
    <sun-SearchForm :formData="formData" @confirmData="onConfirmData"></sun-SearchForm>
  </DemoCard>
  <!-- <div class="form">
    <el-card>
      <template #header>
        <div class="card-header">Element-Plus二次封装通用表单</div>
      </template>
      <template #default>
        <div class="form-search">
          <sun-SearchForm :formData="formData" @confirmData="onConfirmData"></sun-SearchForm>
        </div>
      </template>
    </el-card>
  </div> -->
</template>

<script setup>
import { ref } from "vue"
import DemoCard from "@/components/DemoCard.vue"
import pkg from "@gw0420/hooks"

const { sunSearchForm } = pkg

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

const onConfirmData = msg => {
  console.log("🚀 ~ file: index.vue:53 ~ onConfirmData ~ msg:", msg)
}

const code = ref(`
<template>
  <DemoCard title="Element-Plus二次封装通用表单" type="html" :code="code">
    <sun-SearchForm :formData="formData" @confirmData="onConfirmData"></sun-SearchForm>
  </DemoCard>
</template>

<script setup>
import { ref } from "vue"
import DemoCard from "@/components/DemoCard.vue"
import { sunSearchForm } from "@gw0420/hooks"

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

const onConfirmData = msg => {
  console.log("🚀 ~ file: index.vue:53 ~ onConfirmData ~ msg:", msg)
}
<script>

`)
</script>

<style lang="scss">
.form {
  color: var(--test);
  .form-search {
    min-height: 400px;
  }
}
</style>
