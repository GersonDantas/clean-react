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
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './public')
    },
    devMiddleware: {
      writeToDisk: true
    },
    historyApiFallback: true
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
          { loader: 'css-modules-typescript-loader' },
          { loader: 'css-loader', options: { modules: true } }, // ativar modulos
          { loader: 'sass-loader' }
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
