const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' // Alterado para a raiz do domínio personalizado
    : '/',
  devServer: {
    host: 'localhost',
    port: 8082
  }
})
