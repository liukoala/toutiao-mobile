/**
 * PostCSS 的配置文件
 * PostCSS 是基于 Node.js 运行的一个处理 CSS 的工具
 * 所以它的配置文件也是运行在 Node.js 中
 */

// PostCSS 配置文件需要导出一个对象
module.exports = {
  // 配置要使用的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同的浏览器
    // VueCLI 已经在内部默认配置了 autoprefixer
    // autoprefixer: {
    //   // browsers 用来配置要兼容到的系统(浏览器)环境
    //   // 这个配置没有问题，但是写到这里会有控制台编译警告
    //   // 为什么？因为 VueCLI 是通过项目中的 .browserslistrc 文件来配置要兼容的环境信息的
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },

    // 把 px 转为 rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
