/* eslint-disable */
// import { join, resolve as _resolve } from 'path';
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const devServer = isDev =>
  !isDev
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
          contentBase: path.join(__dirname, 'public'),
        },
      }

const esLintPlugin = isDev =>
  isDev ? [] : [new ESLintPlugin({ extensions: ['ts', 'js'] })]

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        use: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        parser: {
          node: true,
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'assets/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Match-Match-Game',
      // template: './src/index.html',
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public'),
          to: 'public',
        },
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    ...esLintPlugin(develop),
  ],
  ...devServer(develop),
})
