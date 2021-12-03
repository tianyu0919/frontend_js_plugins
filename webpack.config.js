const path = require('path');
const RemoveStrict = require('./plugins/RemoveStrict');
const CleanWebpack = require('./plugins/CleanWebpack');

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // limit: 1000
              outputPath: 'img',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  // plugins: [new CleanWebpackPlugin()],
};
