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
    }
  }
}
