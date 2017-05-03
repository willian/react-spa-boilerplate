const { join, resolve } = require('path')
const { env } = require('process')
const { safeLoad } = require('js-yaml')
const { readFileSync } = require('fs')

env.NODE_ENV = env.NODE_ENV || 'development'

const configPath = resolve('config', 'webpack')
const loadersDir = join(__dirname, 'loaders')
const paths = safeLoad(readFileSync(join(configPath, 'paths.yml'), 'utf8'))[env.NODE_ENV]
const devServer = safeLoad(readFileSync(join(configPath, 'development.server.yml'), 'utf8'))[env.NODE_ENV]

// Compute public path based on environment and ASSET_HOST in production
const ifHasCDN = env.ASSET_HOST !== undefined && env.NODE_ENV === 'production'
const devServerHost = env.APP_HOST || devServer.host
const devServerUrl = `http://${devServerHost}:${devServer.port}/`
const publicUrl = ifHasCDN ? `${env.ASSET_HOST}/` : `/`
const publicPath = env.NODE_ENV !== 'production' && devServer.enabled ? devServerUrl : publicUrl

console.log(join(publicPath))
console.log(join(publicUrl))

module.exports = {
  devServer,
  env,
  loadersDir,
  paths,
  publicPath,
  publicUrl
}
