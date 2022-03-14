const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: './public'
    },
    devMiddleware: {
      writeToDisk: true
    },
    historyApiFallback: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/, // (s?)css$ com css, s opcional
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } }, // ativar modulos
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://fordevs.herokuapp.com/api')
    }),
    new HtmlWebpackPlugin({
      template: './template.dev.html'
    })
  ]
})
