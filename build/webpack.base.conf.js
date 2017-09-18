var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
	    'static': path.resolve(__dirname, '../static'),
	    'root': path.resolve(__dirname, '../src'),
	    'constants': path.resolve(__dirname, '../src/constants'),
	    'components': path.resolve(__dirname, '../src/components'),
	    'pages': path.resolve(__dirname, '../src/pages'),

      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader:'vue-loader',
        options:{
          vueLoaderConfig,
          postcss: [
            require('postcss-cssnext')({
      				       browsers: [
                       'last 2 versions',
                       '> 2%',
                       'ie > 11'
                     ],
                     warnForDuplicates: false
                    //NOTE: ^ Could not find autoprefixer duplicate. Will come back to this. Turning off for now
              }),
            require('postcss-import')(),
            require('postcss-url')(),
            require('postcss-nesting')(),
            require('postcss-inline-svg')(),
            require('postcss-assets')(),
            require('postcss-discard-duplicates')(),
            require('cssnano')({
                preset: 'default',
            })
          ],
        }
      },
      // NOTE:^ Added PostCSS Plugins.
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
