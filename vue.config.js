// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/style/index.scss";',
      },
    },
  },
};
