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
        <div class="tabs-item-icon">
          <el-icon><CreditCard /></el-icon>
        </div>
        <div class="tabs-item-title">
          {{ item.title }}
        </div>
        <div class="tabs-item-close">
          <el-icon @click.stop="onTagsClose(item.title)"><Close /></el-icon>
        </div>
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
  })
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
  background: #eef4f9;
  color: #666;
  display: flex;
  align-items: center;
  padding: 0 40px;
  position: relative;
  user-select: none;
  border-bottom: 1px solid #dae1ed;
  // box-shadow: 0 0 1px #888;
  // column-gap: 16px;
  .tabs-item {
    margin: 0 1px;
    background: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 24px;
    // box-shadow: 0 0 1px #888;
    // margin-right: 1px;
    // border-radius: 2px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    // background: #f3f2f1;
    box-sizing: border-box;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    // transition-delay: 0.1s;
    position: relative;
    &:hover {
      color: #fff;
      background: #3963bc;
      .tabs-item-icon {
        width: 30px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        .el-icon {
          color: #fff;
          font-size: 18px;
        }
      }
      .tabs-item-close {
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 14px;
        // background: orange;
        border-top: 100%;
        border-bottom-left-radius: 100%;
        display: flex;
        justify-content: flex-end;
        background: hsla(0, 0%, 100%, 0.3);
        .el-icon {
          display: block;
          font-size: 10px;
        }
      }
    }
    &.active {
      color: #fff;
      background: #3963bc;
      // border-bottom: 3px solid #0099cc;
      font-size: 14px;
      // font-weight: bold;
      .tabs-item-icon {
        width: 30px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        .el-icon {
          color: #fff;
          font-size: 18px;
        }
      }
      .tabs-item-close {
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 14px;
        // background: orange;
        border-top: 100%;
        border-bottom-left-radius: 100%;
        display: flex;
        justify-content: flex-end;
        background: hsla(0, 0%, 100%, 0.3);
        .el-icon {
          display: block;
          // margin-left: 8px;
          font-size: 10px;
        }
      }
    }
    .tabs-item-title {
      // margin: 0 4px;
    }
    .tabs-item-icon {
      width: 30px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-icon {
        display: block;
        color: #3963bc;
        font-size: 20px;
      }
    }
    .el-icon {
      display: none;
      color: #fff;
      // margin-left: 8px;
      font-size: 10px;
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
