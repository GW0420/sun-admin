<template>
  <div class="tabs">
    <transition-group name="fade-transform" mode="out-in">
      <sunRouterTabs
        :tabsList="tabsList"
        :tabsRises="tabsRises"
        @current="onCurrent"
        @delete="onDelete"
        @left="onTagsLeft"
        @right="onTagsRight"
        @menu="onOpenMenu"
      ></sunRouterTabs>
    </transition-group>
    <ContextMenu
      v-show="menuShow"
      :path="tagsPath"
      :style="menuStyle"
      class="animate__animated animate__fadeIn"
    ></ContextMenu>
  </div>
</template>

<script setup>
import { watch, computed, ref, reactive, inject, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"
import ContextMenu from "@/components/ContextMenu.vue"
import pkg from "@gw0420/hooks"
const { sunRouterTabs } = pkg

// 定义全局公用变量
const router = useRouter()
const store = useStore()
const route = useRoute()
const isRouterAlive = inject("isRouterAlive")
const tagsPath = ref("")
const tabsList = computed(() => store.getters.tabsList)
const tabsRises = computed(() => store.getters.tabsRises)

// 监听当前路由变化
watch(
  route,
  msg => {
    if (msg) {
      tagsPath.value = msg.path
      let tagsDetails = {
        path: msg.path,
        title: msg.meta.title,
        icon: msg.meta.icon,
        key: tabsList.value.length,
        checked: false
      }
      store.dispatch("app/setAddTags", tagsDetails)
    }
  },
  {
    immediate: true,
    deep: true
  }
)

// TODO: 路由标签删除、添加、选中、左右滑动
const onCurrent = data => {
  // 当前标签选中
  store.dispatch("app/setAddTags", data)
}
const onDelete = data => {
  // 删除单个标签
  store.dispatch("app/setDelTags", data)
}

// TODO: 路由左移右移
const onTagsLeft = path => {
  // const tabsList = store.getters.tabsList
  let index = tabsList.value.findIndex(item => item.path === path)
  if (index > 0) {
    router.push(tabsList.value[index - 1]["path"])
  } else {
    router.push("/profile")
  }
}
const onTagsRight = path => {
  // const tabsList = store.getters.tabsList
  let index = tabsList.value.findIndex(item => item.path === path)
  if (index < tabsList.value.length) {
    router.push(tabsList.value[index + 1]["path"])
  } else {
    router.push(tabsList.value[tabsList.value.length - 1]["path"])
  }
}

// TODO: 鼠标右键 contextMenu 相关)
const menuShow = ref(false)
const menuStyle = reactive({
  left: 0,
  top: 0
})
// 展示 menu
const onOpenMenu = data => {
  if (data.path === tagsPath.value) {
    const { x, y } = data.e
    menuStyle.left = x + "px"
    menuStyle.top = y + "px"
    menuShow.value = true
  }
}
// 关闭 menu
const closeMenu = () => {
  menuShow.value = false
}
// 监听变化,关闭右键menu弹窗
watch(menuShow, val => {
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
  padding: 4px 40px;
  position: relative;
  user-select: none;
  .swiper {
    margin-left: 0;
    width: 200vw;
  }
  .tabs-item {
    max-width: 140px;
    min-width: 100px;
    margin: 0 1px;
    background: #fff;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 0 24px;
    white-space: nowrap;
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
    // .tabs-item-title {
    //   // margin: 0 4px;
    // }
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
