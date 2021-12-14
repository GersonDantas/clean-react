const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: 'public/js',
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['.ts', 'tsx', '.js', 'scss'], // 'css' se for usar
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: 'node_modules'
      },
      {
        test: /\.scss$/, // (s?)css$ com css, s opcional
        use: [
          // varios loaders
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true // ativar modulos
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'ReactDOM'
  },
  plugins: [new CleanWebpackPlugin()]
}
