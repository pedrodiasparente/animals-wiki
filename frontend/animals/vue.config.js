module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devServer: {
      port: 12080,
      host: '0.0.0.0'
    }
  }
}
