import router from "@/router"
import { getItem, setItem } from "@/util/storage"
import { ElMessage } from "element-plus"

export default {
  namespaced: true,
  state: () => ({
    isCollapse: true,
    tabsList: getItem("tabsList") || [],
    tabsKey: getItem("tabsKey") || 1,
    tabsRises: getItem("tabsRises") || -1
  }),
  mutations: {
    setCollapse(state, data) {
      state.isCollapse = !state.isCollapse
    },
    // 添加tags
    getAddTags(state, data) {
      // TODO: 处理路由重复  当前路由选中状态
      const isFild = state.tabsList.some(item => item.path === data.path)
      state.tabsList.forEach(item => (item.checked = false))
      if (isFild) {
        let index = state.tabsList.findIndex(item => item.title === data.title)
        state.tabsList[index]["checked"] = true
        state.tabsRises = -1
        setItem("tabsRises", state.tabsRises)
        router.push({ path: data.path })
      }
      if (!isFild) {
        data.checked = true
        state.tabsList.push(data)
        state.tabsRises += 1
        setItem("tabsRises", state.tabsRises)
        setItem("tabsList", state.tabsList)
      }
    },
    // 删除单个tags
    getDelTags(state, data) {
      if (state.tabsList.length > 1) {
        let index = state.tabsList.findIndex(item => item.title === data.title)
        state.tabsList.splice(index, 1)
        setItem("tabsList", state.tabsList)
        router.push(state.tabsList[state.tabsList.length - 1]["path"])
      } else {
        let index = state.tabsList.findIndex(item => item.title === data.title)
        state.tabsList.splice(index, 1)
        state.tabsList.push({ icon: "UserFilled", path: "/profile", title: "个人中心" })
        setItem("tabsList", state.tabsList)
        router.push(state.tabsList[0]["path"])
      }
    },
    // 删除左侧标签
    delLeftTags(state, data) {
      let index = state.tabsList.findIndex(item => item.path === data)
      state.tabsList.splice(0, index)
      setItem("tabsList", state.tabsList)
    },
    // 删除右侧标签
    delRightTags(state, data) {
      let index = state.tabsList.findIndex(item => item.path === data)
      state.tabsList.splice(index + 1, state.tabsList.length - 1)
      setItem("tabsList", state.tabsList)
    },
    // 删除其他标签
    delOtherTags(state, data) {
      // let cur = state.tabsList.find(item => item.path === data)
      // state.tabsList = [cur]
      let index = state.tabsList.findIndex(item => item.path === data)
      state.tabsList.splice(index + 1, state.tabsList.length - 1)
      state.tabsList.splice(0, index)
      setItem("tabsList", state.tabsList)
    },
    getTabsKeys(state, data) {
      state.tabsKey = data
      setItem("tabsKey", state.tabsKey)
    }
  },
  actions: {
    // 菜单伸缩
    getCollapse(context, data) {
      context.commit("setCollapse", data)
    },
    // 添加单个标签
    setAddTags(context, data) {
      context.commit("getAddTags", data)
    },
    // 删除单个标签
    setDelTags(context, data) {
      context.commit("getDelTags", data)
    },
    // 删除左侧标签
    setLeftTags(context, data) {
      context.commit("delLeftTags", data)
    },
    // 删除右侧标签
    setRightTags(context, data) {
      context.commit("delRightTags", data)
    },
    // 删除其他标签
    setOtherTags(context, data) {
      console.log("other==>", data)
      context.commit("delOtherTags", data)
    }
  }
}
