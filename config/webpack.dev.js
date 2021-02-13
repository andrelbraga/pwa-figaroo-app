const { merge } = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin');
const config = require('./webpack.config');
const paths = require('./paths');

module.exports = env => {
  return merge(config(env), {     
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
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
          { from: paths.resolveModule('src/assets/media/manifest-icon-192'), to: paths.pathDistAssets },
          { from: paths.resolveModule('src/assets/media/manifest-icon-512'), to: paths.pathDistAssets }
        ],
      })
    ],
    devServer: {
      contentBase: paths.pathPublic,
      port: 9090,
      open: true
    }
  })
}