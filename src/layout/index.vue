<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        <div class="aside-title">sunny</div>
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
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
    .aside-title {
      height: 60px;
      background: orange;
    }
  }
  .el-container {
    height: 100%;
    .el-header {
      background: #ccc;
    }
  }
}
</style>
