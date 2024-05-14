<template>
  <DemoCard title="图标组件" type="html" :code="code">
    <div class="sun-setting">
      <div class="descriptions">
        <div class="descriptions-title">图标尺寸：</div>
        <div class="descriptions-content">
          <el-radio-group v-model="size" size="middle" :fill="color">
            <el-radio-button :label="15">small</el-radio-button>
            <el-radio-button :label="25">middle</el-radio-button>
            <el-radio-button :label="35">large</el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="descriptions">
        <div class="descriptions-title">图标颜色：</div>
        <div class="descriptions-content">
          <el-color-picker v-model="color" show-alpha />
        </div>
      </div>
    </div>

    <div class="sun-icon">
      <div class="sun-icon-item" v-for="(item, index) in iconList" :key="index">
        <div class="sun-icon-desc">
          <sun-Icon :iconName="item" :size="size" :color="color"></sun-Icon>
        </div>
        <div class="sun-icon-copy" @click="onCopyIconClick(item)">复制</div>
      </div>
    </div>
  </DemoCard>
</template>
<script setup>
import { ref } from "vue"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import pkg from "@gw0420/hooks"
import { ElMessage } from "element-plus"
import DemoCard from "@/components/DemoCard.vue"

const { sunIcon } = pkg
const { useCopyText } = pkg.utils
const iconList = []
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  iconList.push(key)
}

// 复制图标
const onCopyIconClick = text => {
  let iconText = `<el-icon> <${text}/> </el-icon>`
  useCopyText(iconText)
  ElMessage.success(text)
}

// 操作栏
const size = ref(25)
const color = ref("#3963bc")
// 代码块
const code = `
<template>
  <DemoCard title="图标组件" type="html" :code="code">
    <div class="sun-setting">
      <div class="descriptions">
        <div class="descriptions-title">图标尺寸：</div>
        <div class="descriptions-content">
          <el-radio-group v-model="size" size="middle" :fill="color">
            <el-radio-button :label="15">small</el-radio-button>
            <el-radio-button :label="25">middle</el-radio-button>
            <el-radio-button :label="35">large</el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="descriptions">
        <div class="descriptions-title">图标颜色：</div>
        <div class="descriptions-content">
          <el-color-picker v-model="color" show-alpha />
        </div>
      </div>
    </div>

    <div class="sun-icon">
      <div class="sun-icon-item" v-for="(item, index) in iconList" :key="index">
        <div class="sun-icon-desc">
          <sun-Icon :iconName="item" :size="size" :color="color"></sun-Icon>
        </div>
        <div class="sun-icon-copy" @click="onCopyIconClick(item)">复制</div>
      </div>
    </div>
  </DemoCard>
</template>
<script setup>
import { ref } from "vue"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import { useCopyText, sunIcon } from "@gw0420/hooks"
import { ElMessage } from "element-plus"
import DemoCard from "@/components/DemoCard.vue"

const iconList = []
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  iconList.push(key)
}

// 复制图标
const onCopyIconClick = text => {
  useCopyText(iconText)
  ElMessage.success(text)
}

// 操作栏
const size = ref(25)
const color = ref("#3963bc")
<script>
`
</script>

<style lang="scss" scoped>
.sun-setting {
  margin-bottom: 16px;
  display: flex;
  gap: 64px;
  .descriptions {
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
  }
}
.sun-icon {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  .sun-icon-item {
    height: 70px;
    width: 120px;
    border: 1px solid #ededf0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    .sun-icon-desc {
      margin: auto 0;
    }
    .sun-icon-copy {
      color: #fff;
      cursor: pointer;
      height: 0;
      line-height: 30px;
      background: v-bind(color);
      width: 100%;
      text-align: center;
      transition: all 0.5s;
      opacity: 0;
    }
    &:hover {
      .sun-icon-copy {
        opacity: 1;
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
</style>
