const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./webpack.config');
const paths = require('./paths');

module.exports = env => {
  return merge(config(env), {
    output: {
        path: paths.pathBuild,
        filename: 'static/js/[name].[contenthash:8].js',
        publicPath: '/'
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
        },
      },
      minimize: false,
      runtimeChunk: false,
    },
    performance:{
      hints: false
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options:{
            happyPackMode: true,
            transpileOnly: true,
            silent: true
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: "sass-loader",
              options: {
                additionalData: `@import "@/styles/global.scss";`,
              },
            }
          ]
        },
        {
          test: /\.(png|jp(e)?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[contenthash:8].[ext]'
              }
            }
          ] 
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css'
      }),
      new CopyPlugin({
        patterns: [
          { from: paths.pathManifest, to: paths.pathBuild },
          { from: paths.resolveModule('src/assets/media/manifest-icon-512'), to: paths.pathBuildAssets }
        ],
      })
    ]
  })
}
