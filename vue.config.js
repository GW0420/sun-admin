module.exports = {
  // 开发环境
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      "/api": {
        // 要代理的服务器地址  这里不用写 api
        target: "https://api.imooc-admin.lgdsunday.club/",
        changeOrigin: true // 是否跨域
      }
    }
  },
  // 别名配置
  configureWebpack: {
    resolve: {
      alias: {
        component: "@/component"
      }
    }
  }
}
