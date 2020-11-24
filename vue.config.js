module.exports = {
    publicPath: process.env.NODE_ENV === 'production'? '' : '/',
    lintOnSave: false,
    css: {
        loaderOptions: {
          scss: {
            prependData: `@import "./src/styles/main.scss";`
          }
        }
      }
}