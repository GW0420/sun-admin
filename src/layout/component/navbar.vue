<template>
  <div class="navbar">
    <div class="navbar-left">
      <!-- <div class="hamburger" @click="onHumburgerClick">
        <svg-icon class="hamburger" :icon="icon"></svg-icon>
      </div> -->
      <div class="breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/profile' }" v-for="(item, index) in breadcrumbList" :key="index">
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
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
import { computed, onMounted, watch, ref } from "vue"
import { useStore } from "vuex"
import { useRouter, useRoute } from "vue-router"
import { ArrowRight } from "@element-plus/icons-vue"

const store = useStore()
// const icon = computed(() => {
//   console.log("isCollapse", store.getters.isCollapse)
//   return store.getters.isCollapse ? "hamburger-opened" : "hamburger-closed"
// })
// const onHumburgerClick = () => {
//   store.dispatch("app/getCollapse")
// }

const router = useRouter()
const onDropdownClick = key => {
  store.dispatch("login/useLogin", "")
  router.push("/login")
}

const route = useRoute()
const breadcrumbList = ref("")
watch(
  route,
  msg => {
    breadcrumbList.value = route.matched.filter(item => item.meta && item.meta.title)
  },
  { deep: true, immediate: true }
)
console.log("fullPath", router.currentRoute)
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navbar-left {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }
  .navbar-right {
    display: flex;
    justify-content: center;
    column-gap: 16px;
    .image {
      width: 40px;
      height: 40px;
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

:deep(.el-breadcrumb__inner) {
  color: #000 !important;
}

:deep(.el-breadcrumb__item:first-child .el-breadcrumb__inner) {
  font-weight: bold;
}

:deep(.el-breadcrumb__item:first-child .el-breadcrumb__inner:hover) {
  font-weight: bold;
}

:deep(.el-icon svg) {
  color: #000;
}
</style>
