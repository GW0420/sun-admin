<template>
  <DemoCard title="自定义路由标签（演示demo，详情可演示顶部动态路由标签）" type="html" code="xxx">
    <el-row>
      <sun-Button
        background="linear-gradient(to right, rgb(68, 101, 180), rgba(68, 101, 180, 0.6))"
        @click="onAddTabsPane"
      >
        添加路由标签
      </sun-Button>
    </el-row>
    <el-row class="sun-test-tabs">
      <div class="tabs-test-content">
        <div
          :class="['tabs-pane', `tabs-pane-${item.key}`]"
          v-for="(item, index) in tabsPane"
          :key="index"
          @click="onTabsPaneClick(item)"
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
            <el-icon @click.stop="onTagsClose(item.title)">
              <Close />
            </el-icon>
          </div>
        </div>
      </div>
    </el-row>
  </DemoCard>
</template>

<script setup>
import DemoCard from "@/components/DemoCard.vue"
import data from "@gw0420/hooks"
import { ref, onMounted } from "vue"

const { sunButton, sunSpecialButton } = data
const tabsPane = ref([])
const tabsIndex = ref(0)
const tabsWidth = ref(0)
const tabsPaneWidth = ref(0)
const dispance = ref(0)

// 添加标签
const onAddTabsPane = () => {
  tabsIndex.value++
  let temp = {
    path: "/features/preview",
    title: "图片预览",
    icon: "UserFilled",
    key: tabsIndex.value
  }
  tabsPane.value = [...tabsPane.value, temp]

  setTimeout(() => {
    tabsWidth.value = tabsDomWidth(".sun-test-tabs")
    tabsPaneWidth.value += tabsPaneDomWidth(`.tabs-pane-${tabsIndex.value}`) + 3
    tabsPane.value[tabsIndex.value - 1]["width"] = tabsPaneWidth.value
    dispance.value = tabsPaneWidth.value - tabsWidth.value
    tabsToScoll(tabsPaneWidth.value, tabsWidth.value)
  })
}
// 点击单个标签，超出标签范围左右滑动
const onTabsPaneClick = data => {
  let width = tabsPaneDomWidth(`.tabs-pane-${data.key}`) + 3
  let dom = document.querySelector(".tabs-test-content")
  if (dispance.value >= 0 && dispance.value < tabsPaneWidth.value - tabsWidth.value) {
    dispance.value += width
    dom.style.transform = `translateX(-${dispance.value}px)`
  } else {
    dispance.value = 0
    dom.style.transform = `translateX(-${dispance.value}px)`
  }

  // dispance.value -= width
  // let dom = document.querySelector('.tabs-test-content')
  // if (data.width < tabsWidth.value) {
  //   dom.style.transform = `translateX(0px)`
  // } else {
  //   dom.style.transform = `translateX(-${dispance.value}px)`
  // }
}

// 获取tabs总宽度
const tabsDomWidth = className => {
  let width = ""
  let tabsDom = document.querySelector(className)
  width = tabsDom.offsetWidth
  return width
}
// 获取单个tabsPane宽度
const tabsPaneDomWidth = className => {
  let width = ""
  let tabsPaneDom = document.querySelector(className)
  width = tabsPaneDom.offsetWidth
  return width
}
// 添加tabs标签栏，超出标签范围向左滑动
const tabsToScoll = (tabsPaneWidth, tabsWidth) => {
  if (tabsPaneWidth > tabsWidth) {
    // let dispance = tabsPaneWidth - tabsWidth
    let dom = document.querySelector(".tabs-test-content")
    dom.style.transform = `translateX(-${dispance.value + 12}px)`
  }
}
</script>

<style scoped lang="scss">
.sun-test-tabs {
  margin: 16px 0;
  // padding: 0 10px;
  line-height: 35px;
  width: 900px;
  // border: 1px solid #e4e7ed;
  overflow: hidden;
  overflow-x: scroll;
  user-select: none;
  .tabs-test-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: 3px;
    transition: all 0.5s;
    .tabs-pane {
      // max-width: 180px;
      // min-width: 100px;
      padding: 0 16px;
      margin: 0 1px;
      background: #f5f5f5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      // border-top-left-radius: 2px;
      // border-top-right-radius: 2px;
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
  }
}

/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 0px; /*对垂直流动条有效*/
  height: 0px; /*对水平流动条有效*/
}
</style>
