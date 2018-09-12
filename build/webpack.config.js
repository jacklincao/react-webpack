const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  target: 'web',
  context: path.resolve(__dirname, '../src'),
  entry: {
    index: './index.tsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: "last 2 versions" } } // or whatever your project requires
              ],
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: [
              // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              "react-hot-loader/babel",
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ],
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.styl$/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              localIdentName: '[local]__[hash:base64:4]'
            }
          },
          "postcss-loader",
          "stylus-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'react-test',
      hash: true
    }),
    new CheckerPlugin()
  ],
  performance: {
    hints: false
  },
  optimization: { // webpack4之后不用插件中的webpack.optimize将
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
}