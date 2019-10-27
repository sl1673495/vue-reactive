const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 8877,
    hot: true,
    open: true
  },
  entry: ['./src/index.js', './public/example.js'],
  plugins: [
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: 'Reactive',
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
}
