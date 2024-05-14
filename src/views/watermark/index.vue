<template>
  <DemoCard title="页面水印功能" type="html" :code="code">
    <div class="operate">
      <sun-Button type="plain" :color="useRandomColor()" size="middle" @click="onWaterMarkCreate">创建水印</sun-Button>
      <sun-Button type="plain" :color="useRandomColor()" size="middle" @click="onWaterMarkUpdate">更新水印</sun-Button>
      <sun-Button type="plain" :color="useRandomColor()" size="middle" @click="onImageWaterMark">图片水印</sun-Button>
      <sun-Button type="plain" :color="useRandomColor()" size="middle" @click="onWaterMarkDestory">销毁水印</sun-Button>
    </div>
    <div class="descriptions">
      <el-descriptions class="my-label" title="Basic" :column="2" border>
        <el-descriptions-item label="Width" align="left" label-align="center">
          <el-input-number v-model="watermarkData.width" :min="1" />
        </el-descriptions-item>
        <el-descriptions-item label="Height" align="left" label-align="center">
          <el-input-number v-model="watermarkData.height" :min="1" />
        </el-descriptions-item>
        <el-descriptions-item label="Rotate" align="left" label-align="center">
          <el-input-number v-model="watermarkData.rotate" />
        </el-descriptions-item>
        <el-descriptions-item label="Font Size" align="left" label-align="center">
          <el-radio-group v-model="watermarkData.fontSize">
            <el-radio label="20px">small</el-radio>
            <el-radio label="25px">middle</el-radio>
            <el-radio label="30px">large</el-radio>
          </el-radio-group>
        </el-descriptions-item>
        <el-descriptions-item label="Font Color" align="left" label-align="center">
          <el-input v-model="watermarkData.fontColor" style="width: 250px" />
        </el-descriptions-item>
        <el-descriptions-item label="Font Weight" align="left" label-align="center">
          <el-radio-group v-model="watermarkData.fontWeight">
            <el-radio label="400">normal</el-radio>
            <el-radio label="600">bold</el-radio>
          </el-radio-group>
        </el-descriptions-item>
      </el-descriptions>
      <el-descriptions class="my-label" title="Content" :column="1" border>
        <el-descriptions-item label="content" align="left" label-align="center">
          <el-input v-model="watermarkData.content" placeholder="请输入" style="width: 250px"></el-input>
        </el-descriptions-item>
        <el-descriptions-item label="Global Alpha" align="left" label-align="center">
          <el-input v-model="watermarkData.globalAlpha" :min="1" style="width: 250px" />
        </el-descriptions-item>
        <el-descriptions-item label="Filter" align="left" label-align="center">
          <el-select v-model="watermarkData.filter" clearable placeholder="请选择" style="width: 250px">
            <el-option v-for="(item, index) in filterList" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-descriptions-item>
        <el-descriptions-item label="Text Type" align="left" label-align="center">
          <el-select v-model="watermarkData.textType" clearable placeholder="请选择" style="width: 250px">
            <el-option v-for="(item, index) in textTypeList" :key="index" :label="item.label" :value="item.value" />
          </el-select>
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </DemoCard>
</template>

<script setup>
import DemoCard from "@/components/DemoCard.vue"
import { reactive, ref } from "vue"
import pkg from "@gw0420/hooks"

const { sunButton } = pkg
const { useRandomColor } = pkg.utils
const { useWatermark } = pkg.hooks

const code = ref("")
const filterList = ref([
  {
    label: "高斯模糊",
    value: "blur(2px)"
  }
  // {
  //   label: "调节亮度",
  //   value: "brightness(30%)"
  // },
  // {
  //   label: "调节对比度",
  //   value: "contrast(30%)"
  // },
  // {
  //   label: "灰阶",
  //   value: "grayscale(100%)"
  // },
  // {
  //   label: "色彩旋转",
  //   value: "hue-rotate(100deg)"
  // },
  // {
  //   label: "反色图像",
  //   value: "invert(100%)"
  // },
  // {
  //   label: "调节透明度",
  //   value: "opacity(50%)"
  // },
  // {
  //   label: "调节饱和度",
  //   value: "saturate(10%)"
  // }
])
const textTypeList = ref([
  {
    label: "fill",
    value: "fill"
  },
  {
    label: "stroke",
    value: "stroke"
  }
])

// 水印配置信息
const watermarkData = reactive({
  width: 200,
  height: 200,
  rotate: 45,
  fontSize: "25px",
  fontColor: "#3963bc",
  fontWeight: "400",
  content: "gavin gu",
  globalAlpha: 0.3,
  filter: "",
  textType: "stroke"
})

const imageData = reactive({
  contentType: "image",
  image: "https://cdn.jsdelivr.net/gh/zhensherlock/oss@main/uPic/github-mkWBiK.png",
  width: 300,
  height: 300,
  imageWidth: 100,
  filter: "grayscale(100%)"
})

let watermark = new useWatermark(watermarkData)
let imageWatermark = new useWatermark(imageData)
// 创建水印
const onWaterMarkCreate = () => {
  imageWatermark.destroy()
  // const watermark = new useWatermark(watermarkData)
  watermark.create()
}

// 更新水印
const onWaterMarkUpdate = () => {
  imageWatermark.destroy()
  // const watermark = new useWatermark(watermarkData)
  watermark.changeOptions(watermarkData)
}

// 图片水印
const onImageWaterMark = () => {
  watermark.destroy()
  imageWatermark.create()
}
// 销毁水印
const onWaterMarkDestory = () => {
  watermark.destroy()
  imageWatermark.destroy()
}
</script>

<style lang="scss" scoped>
.operate {
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
}

.my-label {
  width: 70%;
  margin-bottom: 16px;
}

:deep(.el-descriptions__label.el-descriptions__cell.is-bordered-label) {
  width: 150px;
}
</style>
