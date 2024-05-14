<template>
  <div class="preview" v-show="previewShow">
    <div class="preview-img" @wheel="handleWheel">
      <img :src="url" alt="" />
    </div>
    <div class="preview-mask"></div>
    <div class="preview-operate">
      <div v-for="(item, index) in operateList" :key="index" @click="onOperateIconClick(item.iconName)">
        <sun-Icon :iconName="item.iconName" :size="25" color="#ffffffcc"></sun-Icon>
      </div>
    </div>
    <div class="preview-close" @click="previewShow = false">
      <sun-Icon iconName="Close" :size="25" color="#ffffffcc"></sun-Icon>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps, defineExpose } from "vue"
// import { useDrag, useRotate, useScale } from "@/util/util"
import pkg from "@gw0420/hooks"
import { useDrag } from "@/util/util.js"


const { sunIcon } = pkg
const { useRotate, useScale } = pkg.hooks
const props = defineProps({
  url: String
})

// 图片隐藏与显示
const previewShow = ref(false)
const previewOpen = () => {
  previewShow.value = true
}

// 输出组件的方法，让外部组件可以调用
defineExpose({
  previewOpen
})

// 图片缩小放大
const rotateScale = ref(1.0)
const handleWheel = e => {
  // 鼠标向下滚动，缩小
  if (e.wheelDelta < 0) {
    if (rotateScale.value.toFixed(2) < 0.2) return
    rotateScale.value -= 0.05
    useScale(".preview-img", rotateScale.value)
    console.log("鼠标向下滚动，缩小", rotateScale.value)
  }
  // 鼠标向上滚动，放大
  if (e.wheelDelta > 0) {
    if (rotateScale.value.toFixed(2) > 2.0) return

    rotateScale.value += 0.05
    useScale(".preview-img", rotateScale.value)
    console.log("鼠标向上滚动，放大", rotateScale.value)
  }
  // console.log('e==>', e);
}

// 图片拖动
onMounted(() => {
  useDrag(".preview-img")
})

// 操作栏
const operateList = [
  {
    iconName: "ZoomOut"
  },
  {
    iconName: "ZoomIn"
  },
  {
    iconName: "FullScreen"
  },
  {
    iconName: "RefreshLeft"
  },
  {
    iconName: "RefreshRight"
  }
]

const onOperateIconClick = key => {
  let temp = {
    ZoomOut: () => onZoomOut(),
    ZoomIn: () => onZoomIn(),
    FullScreen: () => onFullScreen(),
    RefreshLeft: () => onRefreshLeft(),
    RefreshRight: () => onRefreshRight()
  }
  temp[key]()
}

const onZoomOut = () => {
  if (rotateScale.value.toFixed(2) < 0.4) return
  rotateScale.value -= 0.1
  useScale(".preview-img", rotateScale.value)
  console.log("缩小")
}
const onZoomIn = () => {
  if (rotateScale.value.toFixed(2) > 2.0) return
  rotateScale.value += 0.1
  useScale(".preview-img", rotateScale.value)
  console.log("放大")
}
const onFullScreen = () => {
  console.log("全屏")
}
const rotateDeg = ref(0)
const onRefreshLeft = () => {
  rotateDeg.value -= 90
  useRotate(".preview-img", rotateDeg.value)
}
const onRefreshRight = () => {
  rotateDeg.value += 90
  useRotate(".preview-img", rotateDeg.value)
}
</script>

<style lang="scss" scoped>
.preview {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.preview-mask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(55, 55, 55, 0.6);
  z-index: 1000;
}
.preview-operate {
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translate(-50%);
  width: 282px;
  height: 44px;
  padding: 0 23px;
  background-color: rgb(96, 98, 102, 0.6);
  // background-color: rgb(168, 171, 178, 0.6);
  border-color: #fff;
  border-radius: 22px;
  z-index: 9999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.preview-close {
  position: absolute;
  top: 10%;
  right: 10%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(96, 98, 102, 0.6);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.preview-img {
  position: absolute;
  z-index: 3000;
  cursor: move;
  user-select: none;
  transition: all 0.3s;
}
</style>
