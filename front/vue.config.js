process.env.VUE_APP_VERSION = require("./package.json").version;

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/_colors.scss";`
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Cur.Vas'
        return args
      })
  },
  pwa: {
    themeColor: "#333",
    name: "Cur.Vas",
    short_name: "Cur.Vas",
    workboxOptions: {
      skipWaiting: true
    }
  }
};
