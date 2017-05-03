const { env } = require('../configuration.js')

const babelPlugins = [];

babelPlugins.push('transform-inline-environment-variables');
babelPlugins.push('transform-regenerator');
babelPlugins.push('transform-runtime');
babelPlugins.push('transform-object-assign');

if (env.NODE_ENV === 'production') {
  babelPlugins.push('transform-node-env-inline');
  babelPlugins.push('transform-remove-debugger');
  babelPlugins.push('transform-react-constant-elements');
}

module.exports = {
  test: /\.(js|jsx)$/i,
  loader: 'babel-loader',
  exclude: /node_modules/,
  options: {
    plugins: babelPlugins,
    presets: [
      [
        'env',
        {
          modules: false,
          targets: {
            browsers: [
              'last 2 versions',
              'not IE <= 10'
            ]
          }
        }
      ],
      'es2015',
      'react',
      'stage-1'
    ]
  }
}
