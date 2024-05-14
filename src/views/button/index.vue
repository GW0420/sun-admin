<template>
  <DemoCard title="按钮组件" type="html" :code="code">
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="descriptions">
          <div class="descriptions-title">按钮尺寸：</div>
          <div class="descriptions-content">
            <el-radio-group v-model="size" size="small">
              <el-radio-button label="small" />
              <el-radio-button label="middle" />
              <el-radio-button label="large" />
            </el-radio-group>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="descriptions">
          <div class="descriptions-title">按钮类型：</div>
          <div class="descriptions-content">
            <el-radio-group v-model="type" size="small">
              <el-radio-button label="default" />
              <el-radio-button label="plain" />
              <el-radio-button label="text" />
            </el-radio-group>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="descriptions">
          <div class="descriptions-title">生成随机颜色：</div>
          <div class="descriptions-content">
            <el-radio-group v-model="color" size="small" @change="onRefreshClick">
              <el-radio-button label="color">随机颜色</el-radio-button>
              <el-radio-button label="gradient">渐变颜色</el-radio-button>
              <div class="iconfont icon-shuaxin1" style="padding: 0 8px" @click="onRefreshClick"></div>
            </el-radio-group>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="button1">
      <el-row class="mb-4" :key="refresh">
        <sun-Button
          :color="colorShow()"
          :background="colorShow()"
          :size="size"
          :type="type"
          v-for="item in 10"
          :key="item"
        >
          Crush!
        </sun-Button>
      </el-row>
      <el-row class="mb-4" :key="refresh">
        <sun-Button
          :color="colorShow()"
          :background="colorShow()"
          :size="size"
          :type="type"
          v-for="item in 10"
          :key="item"
        >
          Crush!
        </sun-Button>
      </el-row>
      <el-row class="mb-4" :key="refresh">
        <sun-Button
          :color="colorShow()"
          :background="colorShow()"
          :size="size"
          :type="type"
          v-for="item in 10"
          :key="item"
        >
          Crush!
        </sun-Button>
      </el-row>
    </div>
  </DemoCard>
</template>
<script setup>
import { ref } from "vue"
import pkg from "@gw0420/hooks"
import DemoCard from "@/components/DemoCard.vue"

const { sunButton } = pkg
const { useRandomColor, useRandomGradienColor } = pkg.utils
// 操作栏
const size = ref("middle")
const type = ref("default")
const refresh = ref(true)
const color = ref("gradient")
const colorShow = () => {
  return ["gradient"].includes(color.value) ? useRandomGradienColor() : useRandomColor()
}
const onRefreshClick = () => {
  refresh.value = !refresh.value
}

// 代码块
const code = `
<template>
  <DemoCard title="按钮组件" type="html" :code="code">
    <el-row :gutter="20">
      <el-col :span="5">
        <div class="descriptions">
          <div class="descriptions-title">按钮尺寸：</div>
          <div class="descriptions-content">
            <el-radio-group v-model="size" size="small">
              <el-radio-button label="small" />
              <el-radio-button label="middle" />
              <el-radio-button label="large" />
            </el-radio-group>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="descriptions">
          <div class="descriptions-title">按钮类型：</div>
          <div class="descriptions-content">
            <el-radio-group v-model="type" size="small">
              <el-radio-button label="default" />
              <el-radio-button label="plain" />
              <el-radio-button label="text" />
            </el-radio-group>
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="descriptions">
          <div class="descriptions-title">生成随机颜色：</div>
          <div class="descriptions-content">
            <el-radio-group v-model="color" size="small" @change="onRefreshClick">
              <el-radio-button label="color">随机颜色</el-radio-button>
              <el-radio-button label="gradient">渐变颜色</el-radio-button>
              <div class="iconfont icon-shuaxin1" style="padding: 0 8px" @click="onRefreshClick"></div>
            </el-radio-group>
          </div>
        </div>
      </el-col>
    </el-row>

    <div class="button1">
      <el-row class="mb-4" :key="refresh">
        <sun-Button
          :color="colorShow()"
          :background="colorShow()"
          :size="size"
          :type="type"
          v-for="item in 10"
          :key="item"
        >
          Crush!
        </sun-Button>
      </el-row>
      <el-row class="mb-4" :key="refresh">
        <sun-Button
          :color="colorShow()"
          :background="colorShow()"
          :size="size"
          :type="type"
          v-for="item in 10"
          :key="item"
        >
          Crush!
        </sun-Button>
      </el-row>
      <el-row class="mb-4" :key="refresh">
        <sun-Button
          :color="colorShow()"
          :background="colorShow()"
          :size="size"
          :type="type"
          v-for="item in 10"
          :key="item"
        >
          Crush!
        </sun-Button>
      </el-row>
    </div>
  </DemoCard>
</template>
<script setup>
import { ref } from "vue"
import { sunButton, useRandomColor, useRandomGradienColor } from "@gw0420/hooks"
import DemoCard from "@/components/DemoCard.vue"

// 操作栏
const size = ref("middle")
const type = ref("default")
const refresh = ref(true)
const color = ref("gradient")
const colorShow = () => {
  return ["gradient"].includes(color.value) ? useRandomGradienColor() : useRandomColor()
}
const onRefreshClick = () => {
  refresh.value = !refresh.value
}

<script>
`
</script>

<style lang="scss" scoped>
.button1 {
  margin: 100px 0;
  .mb-4 {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 16px 0;
  }
}

.descriptions {
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
}
</style>
