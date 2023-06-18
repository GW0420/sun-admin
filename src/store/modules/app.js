import router from "@/router"
import { getItem, setItem } from "@/util/storage"

export default {
  namespaced: true,
  state: () => ({
    isCollapse: true,
    tagsList: getItem("tagsList") || []
  }),
  mutations: {
    setCollapse(state, data) {
      state.isCollapse = !state.isCollapse
    },
    // 添加tags
    addTags(state, data) {
      const isFild = state.tagsList.some(item => item.path === data.path)
      // TODO: 处理重复
      if (!isFild) {
        state.tagsList.push(data)
        setItem("tagsList", state.tagsList)
      }
    },
    // 删除单个tags
    delCurrentTags(state, data) {
      let index = state.tagsList.findIndex(item => item.title === data)
      state.tagsList.splice(index, 1)
      setItem("tagsList", state.tagsList)
      router.push(state.tagsList[state.tagsList.length - 1]["path"])
    },
    // 删除左侧标签
    delLeftTags(state, data) {
      let index = state.tagsList.findIndex(item => item.path === data)
      state.tagsList.splice(0, index)
      setItem("tagsList", state.tagsList)
    },
    // 删除右侧标签
    delRightTags(state, data) {
      let index = state.tagsList.findIndex(item => item.path === data)
      state.tagsList.splice(index + 1, state.tagsList.length - 1)
      setItem("tagsList", state.tagsList)
    },
    // 删除其他标签
    delOtherTags(state, data) {
      let cur = state.tagsList.find(item => item.path === data)
      state.tagsList = [cur]
      setItem("tagsList", state.tagsList)
    }
  },
  actions: {
    // 菜单伸缩
    getCollapse(context, data) {
      context.commit("setCollapse", data)
    },
    // tags标签
    setTags(context, data) {
      context.commit("addTags", data)
    },
    // 当前tags
    curTags(context, data) {
      context.commit("delCurrentTags", data)
    },
    // 删除左侧标签
    getLeftTags(context, data) {
      context.commit("delLeftTags", data)
    },
    // 删除右侧标签
    getRightTags(context, data) {
      context.commit("delRightTags", data)
    },
    // 删除其他标签
    getOtherTags(context, data) {
      context.commit("delOtherTags", data)
    }
  }
}
