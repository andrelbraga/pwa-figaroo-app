const { DefinePlugin } = require('webpack');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = env => {
  const pathEnv = env.development ? paths.pathEnvDev : paths.pathEnv
  require('dotenv').config({ path: pathEnv })
  console.log("ENVIRONMENT", env)
  return {
    mode: env.development ? 'development' : 'production',
    entry: paths.pathIndexTs,
    output: {
      path: paths.pathDist,
      filename: '[name].[contenthash:8].js',
      publicPath: '/'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'scss'],
      alias: {
        '@': paths.pathSrc
      },
      symlinks: false
    },
    plugins: [
      new CleanWebpackPlugin(),
      new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: '/',
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          const entrypointFiles = entrypoints.main.filter(
            fileName => !fileName.endsWith('.map')
          );

          return {
            files: manifestFiles,
            entrypoints: entrypointFiles,
          };
        },
      }),
      new HtmlWebPackPlugin({
        title: process.env.HTML_TITLE,
        favicon: 'favicon.ico',
        template: paths.pathIndexHtml,
        meta:{
          "apple-mobile-web-app-title": "",
          "apple-mobile-web-app-capable": "yes",
          "apple-mobile-web-app-status-bar-style": "black-translucent",
          "viewport": "width=device-width, initial-scale=1",
          "description": `${process.env.HTML_DESCRIPTION}`
        }
      }),
      new DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL)
          
        },
      }),
      /*new WorkboxPlugin.InjectManifest({
        swSrc: paths.pathSw,
        exclude: [/\.map$/, /asset-manifest\.json$/, /LICENSE/],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      })*/
    ]
  } 
}
