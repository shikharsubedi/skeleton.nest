const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  mode: 'none',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
