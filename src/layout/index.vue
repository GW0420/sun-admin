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
        <tabs></tabs>
        <el-main>
          <transition name="fade-transform" mode="out-in">
            <router-view v-slot="{ Component, route }" v-if="isRouterAlive">
              <keep-alive>
                <component :is="Component" :key="route.path" />
              </keep-alive>
            </router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import logo from "./component/logo.vue"
import sidebar from "./component/sidebar.vue"
import navbar from "./component/navbar.vue"
import tabs from "./component/tabs"
import appMain from "./component/appMain.vue"

import { ref, provide } from "vue"
const isRouterAlive = ref(true)

provide("isRouterAlive", isRouterAlive)
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  border-radius: 7px;
  .el-aside {
    height: 100%;
    background: #001529;
    border-right: 1px solid #001529;
    transition: all 0.3s;
    overflow: hidden;
    &.sidebarOpen {
      width: 210px;
    }
    &.sidebarClose {
      width: 50px;
    }
  }
  .el-container {
    height: 100%;
    transition: all 0.3s;
    &.sidebarOpen {
      width: calc(100% - 210px);
    }
    &.sidebarClose {
      width: calc(100% - 50px);
    }
    .el-header {
      background: #fff;
      height: 50px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
