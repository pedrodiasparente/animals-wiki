module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devServer: {
      port: 12090,
      host: 'epl.di.uminho.pt'
    }
  }
}
