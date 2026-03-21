const path = require('path');

module.exports = {
  entry: './src/lib/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chartkit.js',
    library: 'chartskit',
    libraryTarget: 'umd',
  },
};