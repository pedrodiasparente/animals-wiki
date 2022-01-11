module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devServer: {
      port: 12090,
      https: true,
      host: 'epl.di.uminho.pt'
    }
  }
}
