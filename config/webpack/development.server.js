// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true})

const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const devConfig = require('./development.js')
const { devServer, publicPath, paths } = require('./configuration.js')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

module.exports = merge(devConfig, {
  devServer: {
    compress: true,
    historyApiFallback: true,
    overlay: true,
    contentBase: resolve(paths.output),
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: devServer.host,
    port: devServer.port,
    publicPath
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CaseSensitivePathsPlugin()
  ]
})
