<template>
  <div class="sun-tabs">
    <div class="tabs-left">
      <el-icon @click="onTagsLeft"><DArrowLeft /></el-icon>
    </div>
    <div class="tabs-content">
      <div
        :class="['tabs-pane', `tabs-pane-${item.key}`, item.checked ? 'active' : '']"
        v-for="(item, index) in tabsData"
        :key="index"
        @click="onTabsItemClick(item)"
        @contextmenu.prevent="onOpenMenu($event, item.path)"
      >
        <div class="tabs-item-icon">
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
        </div>
        <div class="tabs-item-title">
          {{ item.title }}
        </div>
        <div class="tabs-item-close">
          <el-icon @click.stop="onTagsClose(item)">
            <Close />
          </el-icon>
        </div>
      </div>
    </div>
    <div class="tabs-right">
      <el-icon @click="onTagsRight"><DArrowRight /></el-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, onMounted, nextTick } from "vue"

const tabsData = ref([])
const tabsWidth = ref(0)
const tabsItemWidth = ref(0)
const tabsItemAllWidth = ref(0)
const dispance = ref(0)
const dispanceMax = ref(0)

// 接受参数
const props = defineProps({
  tabsList: {
    type: Array,
    default: () => []
  },
  tabsRises: {
    type: Number,
    default: -1
  }
})

const emit = defineEmits(["delete", "current", "menu", "left", "right"])

watch(
  () => props.tabsRises,
  newTabsRises => {
    console.log("newTabsRises==>", newTabsRises)
    tabsData.value = props.tabsList
    nextTick(() => {
      tabsWidth.value = getTabsDomWidth(".sun-tabs")
      tabsItemWidth.value = getTabsDomWidth(".tabs-pane")
      tabsItemAllWidth.value = getTabsItemAllWidth()
      if (tabsItemAllWidth.value > tabsWidth.value) {
        dispanceMax.value = tabsItemAllWidth.value - tabsWidth.value + tabsData.value.length * 1
      }
      if (newTabsRises > -1) {
        onAddTabsItem()
      }
    })
  },
  { immediate: true, deep: true }
)

// 鼠标右键
const onOpenMenu = (e, path) => {
  emit("menu", { e, path })
}

// 删除当前标签
const onTagsClose = data => {
  emit("delete", data)
  // store.dispatch("app/curTags", msg)
}

// 添加标签，超出最大范围向左移动
const onAddTabsItem = () => {
  tabsToScoll(dispanceMax.value)
}

// 点击标签，超出标签范围左右滑动
const onTabsItemClick = data => {
  emit("current", data)
  // 计算右边超出的距离
  // let dispanceRight = dispanceMax.value - dispance.value
  // console.log("当前标签信息", data)
  // console.log("dispanceRight", dispanceRight)
  // console.log("dispance", dispance.value)
  // console.log("tabsItemWidth", tabsItemWidth.value)
  // console.log("右侧差值", Math.ceil(dispanceRight / tabsItemWidth.value))
  // console.log("左侧差值", Math.ceil(dispance.value / tabsItemWidth.value))
  // console.log("可视区域需要多少个标签", Math.floor(tabsWidth.value / tabsItemWidth.value))
  // console.log("多少个标签", tabsData.value.length)
  // console.log(
  //   "可视区域坐标",
  //   Math.ceil(dispance.value / tabsItemWidth.value) - 1,
  //   Math.ceil(dispance.value / tabsItemWidth.value) + 10
  // )
  if (data.key > Math.floor(dispance.value / tabsItemWidth.value) + 4) {
    let moveX = dispance.value < dispanceMax.value ? (dispance.value += tabsItemWidth.value) : dispanceMax.value
    let dom = document.querySelector(".tabs-content")
    dom.style.transform = `translateX(-${moveX}px)`
  }
  if (data.key < Math.floor(dispance.value / tabsItemWidth.value) + 5) {
    let moveX = dispance.value > 0 ? (dispance.value -= tabsItemWidth.value) : 0
    let dom = document.querySelector(".tabs-content")
    dom.style.transform = `translateX(-${moveX}px)`
  }
}

// 标签左移
const onTagsLeft = () => {
  let index = tabsData.value.findIndex(item => item.checked)
  emit("left", tabsData.value[index]["path"])
}

// 标签右移
const onTagsRight = () => {
  let index = tabsData.value.findIndex(item => item.checked)
  emit("right", tabsData.value[index]["path"])
}

// 标签滑动
const tabsToScoll = dispance => {
  let moveX = dispance < 0 ? 0 : dispance
  let dom = document.querySelector(".tabs-content")
  dom.style.transform = `translateX(-${moveX}px)`
}

// 获取tabs总宽度
const getTabsDomWidth = className => {
  let width = ""
  let tabsDom = document.querySelector(className)
  width = tabsDom.offsetWidth
  return width
}
// 获取单个tabsPane宽度
const getTabsItemDomWidth = className => {
  let width = ""
  let tabsPaneDom = document.querySelector(className)
  width = tabsPaneDom.offsetWidth
  return width
}

// 获取所有标签宽度
const getTabsItemAllWidth = () => {
  let width = 0
  tabsData.value.forEach(item => {
    width += getTabsItemDomWidth(`.tabs-pane-${item.key}`)
  })
  return width
}
</script>

<style scoped lang="scss">
.sun-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  // padding: 0 10px;
  line-height: 35px;
  width: 100%;
  // border: 1px solid #e4e7ed;
  overflow: hidden;
  overflow-x: scroll;
  user-select: none;
  .tabs-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    // gap: 3px;
    transition: all 0.5s;
    .tabs-pane {
      padding: 0 24px;
      margin: 0 1px;
      background: #fff;
      color: #000;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      border-radius: 2px;
      box-sizing: border-box;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.5s;
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
        font-size: 14px;
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
  }
}

/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 0px; /*对垂直流动条有效*/
  height: 0px; /*对水平流动条有效*/
}
</style>
