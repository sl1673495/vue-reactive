const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: ['./src/index.ts', './public/example.ts'],
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)/,
        include: [path.resolve('src'), path.resolve('public')],
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
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
