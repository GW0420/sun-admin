import { getItem, setItem } from "@/util/storage"
export default {
  namespaced: true,
  state: () => ({
    isCollapse: true
  }),
  mutations: {
    setCollapse(state, data) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    getCollapse(context, data) {
      context.commit("setCollapse", data)
    }
  }
}
