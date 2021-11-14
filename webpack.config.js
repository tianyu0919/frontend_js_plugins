const path = require('path');
const RemoveStrict = require('./plugins/RemoveStrict');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new RemoveStrict()]
};
