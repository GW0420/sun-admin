import { getItem, setItem } from "@/util/storage"
export default {
  namespaced: true,
  state: () => ({
    token: getItem("token") || ""
  }),
  mutations: {
    setToken(state, data) {
      setItem("token", data)
      state.token = data
    }
  },
  actions: {
    useLogin(context, data) {
      context.commit("setToken", data)
    }
  }
}
