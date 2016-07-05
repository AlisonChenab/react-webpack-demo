module.exports.getConfig = function(type) {
  var webpack = require('webpack');
  var isDev = type === 'development';

  var plugins = [
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery"
    // }),
    new webpack.ProvidePlugin({
      "_": "underscore"
    }),
  ];

  var config = {
    entry: './app/scripts/main.js',
    output: {
      path: __dirname,
      filename: 'main.js'
    },
    debug : isDev,
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }]
    },
    plugins: plugins,
  };

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
}