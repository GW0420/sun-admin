<template>
  <DemoCard title="基础的、简洁的标签页。支持自定义颜色、标签间距。" type="html" :code="code">
    <sunTabs :tabsList="tabsList" :tabsColor="tabsColor" :tabsGap="tabsGap"></sunTabs>
  </DemoCard>
</template>

<script setup>
import DemoCard from "@/components/DemoCard.vue"
// import sunTabs from "@/components/sunTabs.vue"
import { ref } from "vue"
import data from "@gw0420/hooks"

const { sunTabs } = data

const tabsList = ref([
  {
    key: 0,
    name: "Violet"
  },
  {
    key: 1,
    name: "DarkVoilet"
  },
  {
    key: 2,
    name: "Navy"
  },
  {
    key: 3,
    name: "LightSkyBlue"
  },
  {
    key: 4,
    name: "Teal"
  },
  {
    key: 5,
    name: "Beige"
  },
  {
    key: 6,
    name: "DarkKhaki"
  },
  {
    key: 7,
    name: "Orange"
  }
])

const tabsColor = ref("#3963bc")
const tabsGap = ref(32)
const code = ref(`
<template>
  <DemoCard title="基础的、简洁的标签页。支持自定义颜色、标签间距。" type="html" code="xxx">
    <sunTabs :tabsList="tabsList" :tabsColor="tabsColor" :tabsGap="tabsGap"></sunTabs>
  </DemoCard>
</template>

<script setup>
import DemoCard from "@/components/DemoCard.vue"
// import sunTabs from "@/components/sunTabs.vue"
import { ref } from "vue"
import data from "@gw0420/hooks"

const { sunTabs } = data

const tabsList = ref([
  {
    key: 0,
    name: "Violet"
  },
  {
    key: 1,
    name: "DarkVoilet"
  },
  {
    key: 2,
    name: "Navy"
  },
  {
    key: 3,
    name: "LightSkyBlue"
  },
  {
    key: 4,
    name: "Teal"
  },
  {
    key: 5,
    name: "Beige"
  },
  {
    key: 6,
    name: "DarkKhaki"
  },
  {
    key: 7,
    name: "Orange"
  }
])

const tabsColor = ref("#3963bc")
<script>
`)
</script>

<style scoped></style>
