module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devServer: {
      port: 12080,
      host: 'epl.di.uminho.pt'
    }
  }
}
