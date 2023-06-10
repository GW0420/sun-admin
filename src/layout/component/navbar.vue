<template>
  <div class="navbar">
    <div class="navbar-left">
      <div class="hamburger" @click="onHumburgerClick">
        <svg-icon class="hamburger" :icon="icon"></svg-icon>
      </div>
    </div>
    <div class="navbar-right">
      <div class="image">
        <el-dropdown @command="onDropdownClick">
          <img src="@/assets//images/avatar.jpg" alt="" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="email">掘金主页</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus/es"
import { profile } from "@/api/modules/sys"

const store = useStore()
const icon = computed(() => {
  console.log("isCollapse", store.getters.isCollapse)
  return store.getters.isCollapse ? "hamburger-opened" : "hamburger-closed"
})
const onHumburgerClick = () => {
  store.dispatch("app/getCollapse")
}

const router = useRouter()
const onDropdownClick = key => {
  store.dispatch("login/useLogin", "")
  router.push("/login")
}

onMounted(async () => {
  const res = await profile()
  console.log("useinfo=>", res)
})
</script>

<style lang="scss">
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navbar-right {
    display: flex;
    justify-content: center;
    column-gap: 16px;
    .image {
      width: 45px;
      height: 45px;
      border-radius: 8px;
      overflow: hidden;
      background: #4793ef;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
