const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')

module.exports = {
  test: /\.(scss|sass|css)$/i,
  use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: { minimize: env.NODE_ENV === 'production' }
      },
      'postcss-loader',
      'sass-loader'
    ]
  }))
}