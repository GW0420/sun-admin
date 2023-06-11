<template>
  <div class="tabs">
    <transition-group name="fade-transform" mode="out-in">
      <div
        v-for="item in tagsList"
        :key="item.path"
        :class="['tabs-item', item.path === tagsPath ? 'active' : '']"
        @click="onTagsItemClick(item.path)"
      >
        {{ item.title }}
        <el-icon @click.stop="onTagsClose(item.title)"><Close /></el-icon>
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
</script>

<style lang="scss">
.tabs {
  height: 35px;
  background: #f3f2f1;
  display: flex;
  align-items: center;
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
}
</style>
