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
        @contextmenu.prevent="openMenu($event, item.path)"
      >
        {{ item.title }}
        <el-icon @click.stop="onTagsClose(item.title)"><Close /></el-icon>
      </div>
      <div class="tabs-right">
        <el-icon @click="onTagsRight(tagsPath)"><DArrowRight /></el-icon>
      </div>
    </transition-group>
    <ContextMenu
      v-show="visible"
      :path="tagsPath"
      :style="menuStyle"
      class="animate__animated animate__fadeIn"
      :key="key"
    ></ContextMenu>
  </div>
</template>

<script setup>
import { watch, computed, ref, reactive, inject } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"
import ContextMenu from "@/components/ContextMenu.vue"

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
let isRouterAlive = inject("isRouterAlive")
const onTagsItemClick = path => {
  isRouterAlive.value = false
  setTimeout(() => {
    isRouterAlive.value = true
    router.push(path)
  }, 300)
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
  if (index < tagsList.length) {
    router.push(tagsList[index + 1]["path"])
  } else {
    router.push(tagsList[tagsList.length - 1]["path"])
  }
}

// TODO: 鼠标右键 contextMenu 相关
// const selectIndex = ref(0)
const visible = ref(false)
const key = ref(false)
const menuStyle = reactive({
  left: 0,
  top: 0
})

// 展示 menu
const openMenu = (e, path) => {
  // selectIndex.value = index
  if (path === tagsPath.value) {
    key.value = !key.value
    const { x, y } = e
    menuStyle.left = x + "px"
    menuStyle.top = y + "px"
    visible.value = true
  }
}

// 关闭 menu
const closeMenu = () => {
  visible.value = false
}

// 监听变化
watch(visible, val => {
  if (val) {
    document.body.addEventListener("click", closeMenu)
  } else {
    document.body.removeEventListener("click", closeMenu)
  }
})
</script>

<style lang="scss">
.tabs {
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  user-select: none;
  box-shadow: 0 0 1px #888;
  // column-gap: 16px;
  .tabs-item {
    height: 70%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    box-shadow: 0 0 1px #888;
    margin-right: 4px;
    border-radius: 2px;
    // background: #f3f2f1;
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    transition-delay: 0.1s;
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
