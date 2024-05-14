const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 打包路径
  publicPath: "/sun-admin/",
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
  },
  // 链式调用
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    // config 为 webpack配置对象
    // config.module 表示创建一个具名规则, 以后用来修改规则
    config.module
      // 规则
      .rule("svg")
      // 忽略
      .exclude.add(resolve("src/assets/icons"))
      // 结束
      .end()
    // config.module 表示创建一个具名规则,以后用来修改规则
    config.module
      // 规则
      .rule("icons")
      // 正则解析 .svg 格式文件
      .test(/\.svg$/)
      // 解析的文件
      .include.add(resolve("src/assets/icons"))
      // 结束
      .end()
      // 新增了一个解析loader
      .use("svg-sprite-loader")
      // 具体的loader
      .loader("svg-sprite-loader")
      // loader配置
      .options({
        symbolId: "icon-[name]"
      })
      // 结束
      .end()
  }
}
