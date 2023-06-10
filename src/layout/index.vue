<template>
  <div class="layout">
    <el-container>
      <el-aside :class="[$store.getters.isCollapse ? 'sidebarOpen' : 'sidebarClose']">
        <logo></logo>
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <navbar></navbar>
        </el-header>
        <el-main>
          <!-- <router-view></router-view> -->
          <router-view v-slot="{ Component, route }">
            <transition name="fade-transform" mode="out-in">
              <keep-alive>
                <component :is="Component" :key="route.path" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import logo from "./component/logo.vue"
import sidebar from "./component/sidebar.vue"
import navbar from "./component/navbar.vue"
import appMain from "./component/appMain.vue"
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  .el-aside {
    height: 100%;
    background: #304156;
    border-right: 1px solid #304156;
    transition: all 0.3s;
    overflow: hidden;
    &.sidebarOpen {
      width: 200px;
    }
    &.sidebarClose {
      width: 50px;
    }
    // .aside-title {
    //   line-height: 60px;
    //   text-align: center;
    //   background: #4793ef;
    // }
  }
  .el-container {
    height: 100%;
    transition: all 0.3s;
    &.sidebarOpen {
      width: calc(100% - 200px);
    }
    &.sidebarClose {
      width: calc(100% - 50px);
    }
    .el-header {
      background: #4793ef;
      display: flex;
      align-items: center;
    }
  }
}
</style>
