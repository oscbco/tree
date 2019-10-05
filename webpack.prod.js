var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    // 'react-hot-loader/patch',
    path.join(__dirname, 'source', 'Treepane', 'Treepane.js')
  ],
  output: {
    filename: 'index.js',
    chunkFilename: 'index.js',
    path: path.resolve(__dirname),
    publicPath: './',
    library: 'Tree',
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            modules: 'umd'
          }], '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-async-to-generator', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-react-jsx-source']
        }
      }, {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it use publicPath in webpackOptions.output
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase'
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|gif|jpg|woff|woff2|svg|ttf)$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new BundleAnalyzerPlugin()
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    },
    'react-window': {
      root: 'ReactWindow',
      commonjs2: 'react-window',
      commonjs: 'react-window',
      amd: 'react-window'
    }
  },
  target: 'web'
};
