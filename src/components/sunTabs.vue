<template>
  <div class="switch-tabs">
    <div class="tabs-wrap">
      <div
        :class="['tabs-item', `tabs-item-${item.key}`, activeKey === item.key ? 'active' : '']"
        v-for="(item, index) in tabsList"
        :key="index"
        @click="onTabsItemClick(item.key)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="tabs-line"></div>
  </div>
  <div class="sun-content">
    {{ tabsList[activeKey]["name"] }}
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, watchEffect } from "vue"

const props = defineProps({
  tabsList: {
    type: Array,
    default: () => []
  },
  tabsColor: {
    type: String,
    default: "orange"
  },
  tabsGap: {
    type: Number,
    default: 32
  }
})

const tabsList = ref([
  //   {
  //     key: 0,
  //     name: "User"
  //   },
  //   {
  //     key: 1,
  //     name: "Config"
  //   },
  //   {
  //     key: 2,
  //     name: "Role"
  //   },
  //   {
  //     key: 3,
  //     name: "Dropdown"
  //   },
  //   {
  //     key: 4,
  //     name: "Task"
  //   }
])
const activeKey = ref(0)
const tabsPaneColor = ref("orange")
const tabsPaneGap = ref("")

const onTabsItemClick = key => {
  // 获取标题的宽度，减去下划线的宽度除以2，可以使下划线在标题下居中显示
  activeKey.value = key
  let domLine = document.querySelector(".tabs-line")
  let domBlock = document.querySelector(`.tabs-item-${key}`)
  domLine.style.width = domBlock.offsetWidth + "px"
  domLine.style.transform = `translate(${domBlock.offsetLeft}px, 0)`
}

watchEffect(() => {
  tabsList.value = props.tabsList
  tabsPaneColor.value = props.tabsColor
  tabsPaneGap.value = props.tabsGap + "px"
})

onMounted(() => {
  onTabsItemClick(activeKey.value)
})
</script>

<style scoped lang="scss">
.switch-tabs {
  user-select: none;
  border-bottom: 2px solid #e4e7ed;
  position: relative;

  .tabs-line {
    transition: all 0.5s;
    position: absolute;
    // bottom: -1px;
    // width: 50px;
    height: 2px;
    background: v-bind(tabsPaneColor);
    z-index: 9999;
    border-radius: 4px;
    // margin-top: -1px;
  }

  .tabs-wrap {
    display: flex;
    gap: v-bind(tabsPaneGap);
    line-height: 50px;
    // padding: 0 16px;

    .tabs-item {
      cursor: pointer;
      font-weight: 600;
      &:hover {
        color: v-bind(tabsPaneColor);
      }
      &.active {
        color: v-bind(tabsPaneColor);
        font-weight: 600;
        // border-bottom: 2px solid #1558a2;
      }
    }
  }
}

.sun-content {
  padding: 64px 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
