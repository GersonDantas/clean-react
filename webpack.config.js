const path = require('path')
const { DefinePlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss', 'css'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
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
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://fordevs.herokuapp.com/api')
    })
  ]
}
