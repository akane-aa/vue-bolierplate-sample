const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      // 拡張子 .js の場合
      test: /\.js, .vue$/,
      use: [{
        // Babel を利用する
        loader: 'babel-loader',
      }]
    }]
  }
};
