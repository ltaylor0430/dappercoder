/**
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 **/
module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      //loaders read right to left
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.css/, loader: 'style!css' },
      //loader for .js files transfroming from ES2015 to ES5
      { test: /\.js$/, loader:'babel?stage=1', excludes: [/node_modules/]}
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
