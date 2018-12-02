const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src', 'index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      actions: path.resolve(__dirname, 'src', 'actions'),
      components: path.resolve(__dirname, 'src', 'components'),
      static: path.resolve(__dirname, 'src', 'static'),
      containers: path.resolve(__dirname, 'src', 'containers'),
      reducers: path.resolve(__dirname, 'src', 'reducers')
    }
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
            ExtractCssChunks.loader,
            'css-loader',
          ]
      },
      {
        test: /\.styl$/,
        use: [
            ExtractCssChunks.loader,
            'css-loader',
            'stylus-loader',
          ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[hash:8].[ext]',
          context: ''
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new OptimizeCssnanoPlugin({
      cssnanoOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
        }],
      },
    }),
    new ExtractCssChunks(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[hash:8].css",
        chunkFilename: "[id].[hash:8].css",
        hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
        orderWarning: true, // Disable to remove warnings about conflicting order between imports
        reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
        cssModules: true // if you use cssModules, this can help.
      }
    ),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new Dotenv({
      path: './.env',
      safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe) 
    })
  ],
  node: {
    fs: "empty"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 100000,
      maxSize: 500000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
