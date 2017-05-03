const webpack = require('webpack')
const { basename, dirname, join, relative, resolve } = require('path')
const { sync } = require('glob')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const extname = require('path-complete-extname')
const {
  env,
  paths,
  publicPath,
  publicUrl,
  loadersDir
} = require('./configuration.js')

const extensionGlob = `**/*{${paths.extensions.join(',')}}*`
const packPaths = sync(join(paths.source, paths.entry, extensionGlob))
const entries = packPaths.reduce((map, entry) => {
  const localMap = map
  const namespace = relative(join(paths.source, paths.entry), dirname(entry))
  localMap[join(namespace, basename(entry, extname(entry)))] = resolve(entry)
  return localMap
}, {})

entries.vendor = [
  'bundle-loader',
  'react',
  'react-dom'
]

module.exports = {
  entry: entries,
  output: {
    filename: env.NODE_ENV === 'production' ? '[name]-[hash].js' : '[name].js',
    path: resolve(paths.output),
    publicPath
  },
  module: {
    rules: sync(join(loadersDir, '*.js')).map(loader => require(loader))
  },
  plugins: [
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
    new ExtractTextPlugin({
      filename: env.NODE_ENV === 'production' ? '[name]-[hash].css' : '[name].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: join(paths.source, 'index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new ManifestPlugin({
      fileName: paths.manifest,
      publicPath,
      writeToFileEmit: true
    })
  ],
  resolve: {
    extensions: paths.extensions,
    modules: [
      resolve(paths.source),
      resolve(paths.node_modules)
    ],
    alias: {
      'components': join(paths.source, 'components'),
      'modules': join(paths.source, 'modules')
    }
  },
  resolveLoader: {
    modules: [paths.node_modules]
  }
}
