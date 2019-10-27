const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

console.log('path.resolve', path.resolve('./docs'))
module.exports = {
  mode: 'production',
  entry: ['./src/index.js', './public/example.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve('./docs')
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 打包输出HTML
      title: 'Reactive',
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
}
