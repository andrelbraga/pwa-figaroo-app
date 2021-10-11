const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin');
const config = require('./webpack.config');
const paths = require('./paths');

module.exports = env => {
  return merge(config(env), {
    devtool: 'eval-cheap-module-source-map',
    optimization: {
      runtimeChunk: 'single',
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    },
    output: {
      pathinfo: false,
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            transpileOnly: true,
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: "sass-loader",
              options: {
                prependData: `@import "@/styles/global.scss";`,
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
      new CopyPlugin({
        patterns: [
          { from: paths.pathManifest, to: paths.pathDist },
          { from: paths.resolveModule('src/assets/media/manifest-icon-512'), to: paths.pathDistAssets }
        ],
      })
    ],
    devServer: {
      contentBase: paths.pathPublic,
      port: 3000,
      historyApiFallback: true,
      hot: true,
      open: true
    }
  })
}