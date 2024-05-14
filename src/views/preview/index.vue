<template>
  <DemoCard title="图片预览组件（缩小、放大、旋转、拖拽）" type="html" :code="code">
    <div class="preview-image">
      <div class="preview-image-item" v-for="(item, index) in imageList" :key="index" @click="onPreviewImgClick(item)">
        <img :src="item" alt="" />
        <div class="img-mask">预览</div>
      </div>
    </div>
  </DemoCard>
  <sunPreviewImg :url="imageUrl" ref="previewRef"></sunPreviewImg>
</template>

<script setup>
import { ref } from "vue"
import DemoCard from "@/components/DemoCard.vue"
import sunPreviewImg from "@/components/PreviewImg.vue"
// import pkg from "@gw0420/hooks"

// const { sunPreviewImg } = pkg
const code = ref("")
const imageUrl = ref("")
const imageList = ref([
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"
])
const previewRef = ref("")
const onPreviewImgClick = url => {
  imageUrl.value = url
  previewRef.value.previewOpen()
}
</script>

<style lang="scss" scoped>
.preview-image {
  display: flex;
  gap: 16px;
  width: auto;
  .preview-image-item {
    width: 90px;
    height: 90px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    background: #e1dede;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .img-mask {
      transition: all 0.3s;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgb(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(255, 255, 255, 0.6);
    }
    &:hover {
      .img-mask {
        opacity: 1;
      }
    }
  }
}
</style>
