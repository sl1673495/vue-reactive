const config = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8877,
    hot: true,
    open: true
  },
})