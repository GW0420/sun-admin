import { createStore } from "vuex"
import { getters } from "./getters"
import login from "./modules/login"
import app from "./modules/app"
export default createStore({
  getters,
  modules: {
    login,
    app
  }
})
