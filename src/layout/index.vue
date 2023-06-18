<template>
  <div class="layout">
    <el-container>
      <el-aside :class="[$store.getters.isCollapse ? 'sidebarOpen' : 'sidebarClose']">
        <menus></menus>
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
import menus from "./component/menus/index.vue"
import navbar from "./component/navbar.vue"
import tabs from "./component/tabs"

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
    transition: all 0.4s;
    overflow: hidden;
    user-select: none;
    &.sidebarOpen {
      width: 210px;
    }
    &.sidebarClose {
      width: 60px;
    }
  }
  .el-container {
    height: 100%;
    // transition: all 0.3s;
    &.sidebarOpen {
      width: calc(100% - 210px);
    }
    &.sidebarClose {
      width: calc(100% - 60px);
    }
    .el-header {
      background: #eef4f9;
      height: 50px;
      display: flex;
      align-items: center;
    }
    .el-main {
      background: #f5f7fa;
    }
  }
}
</style>
