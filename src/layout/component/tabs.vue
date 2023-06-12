<template>
  <div class="tabs">
    <transition-group name="fade-transform" mode="out-in">
      <div class="tabs-left">
        <el-icon @click="onTagsLeft(tagsPath)"><DArrowLeft /></el-icon>
      </div>
      <div
        v-for="item in tagsList"
        :key="item.path"
        :class="['tabs-item', item.path === tagsPath ? 'active' : '']"
        @click="onTagsItemClick(item.path)"
      >
        {{ item.title }}
        <el-icon @click.stop="onTagsClose(item.title)"><Close /></el-icon>
      </div>
      <div class="tabs-right">
        <el-icon @click="onTagsRight(tagsPath)"><DArrowRight /></el-icon>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { watch, computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"

const route = useRoute()
const store = useStore()
const tagsPath = ref("")
watch(
  route,
  msg => {
    tagsPath.value = msg.path
    store.dispatch("app/setTags", {
      title: msg.name,
      path: msg.path
    })
  },
  {
    immediate: true,
    deep: true
  }
)

const tagsList = computed(() => store.getters.tagsList)

const router = useRouter()
const onTagsItemClick = path => {
  router.push(path)
}

// TODO: 删除当前tabs
const onTagsClose = msg => {
  store.dispatch("app/curTags", msg)
}

// TODO: 路由左移右移
const onTagsLeft = path => {
  const tagsList = store.getters.tagsList
  let index = tagsList.findIndex(item => item.path === path)
  if (index > 0) {
    router.push(tagsList[index - 1]["path"])
  } else {
    router.push("/profile")
  }
}

const onTagsRight = path => {
  const tagsList = store.getters.tagsList
  let index = tagsList.findIndex(item => item.path === path)
  console.log(11111, index)
  if (index < tagsList.length) {
    router.push(tagsList[index + 1]["path"])
  } else {
    router.push(tagsList[tagsList.length - 1]["path"])
  }
}
</script>

<style lang="scss">
.tabs {
  height: 35px;
  background: #f3f2f1;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  user-select: none;
  // column-gap: 16px;
  .tabs-item {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    background: #f3f2f1;
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    transition-delay: 0.2s;
    &.active {
      background: #fff;
      border-bottom: 3px solid #0099cc;
      font-size: 14px;
      font-weight: bold;
    }
    .el-icon {
      margin-left: 8px;
    }
  }
  .tabs-left {
    position: absolute;
    left: 0;
    width: 40px;
    text-align: center;
    color: grey;
    cursor: pointer;
  }
  .tabs-right {
    position: absolute;
    right: 0;
    width: 40px;
    text-align: center;
    color: grey;
    cursor: pointer;
  }
}
</style>
