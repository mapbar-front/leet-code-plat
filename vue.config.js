// const webpack = require('webpack')
const path = require('path')
// const plugins = [
//   new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
// ]
const minify = process.env.NODE_ENV === 'development' ? false : {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true
}
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    // plugins,
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      axios: 'axios',
      'element-ui': 'ELEMENT'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/form-generator/'
    : '/',
  pages: {
    index: {
      entry: 'src/views/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
      minify
    },
    preview: {
      entry: 'src/views/preview/main.js',
      template: 'public/preview.html',
      filename: 'preview.html',
      chunks: ['chunk-vendors', 'chunk-common', 'preview'],
      minify
    }
  },

  devServer: {
    port: '9000',
    proxy: {
      '/api': {
        target: process.env.VUE_APP_PROXY_TARGET,
        ws: false,
        changeOrigin: true
      }
    }
  },
  chainWebpack (config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
