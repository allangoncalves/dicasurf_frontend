module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("vue$", "vue/dist/vue.js");
  },
  devServer: {
    https: false
  }
};
