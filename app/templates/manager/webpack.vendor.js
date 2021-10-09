const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    vendor: [
      '@antv/g2',
      '@antv/data-set',
      '@antv/g6',
      'lodash',
      'moment',
      'axios',
      'react',
      'react-dom',
      'react-hook-form',
      'qs',
      'react-router-dom',
      'swr',
      'axios-mock-adapter',
      'mockjs',
    ],
  },
  output: {
    filename: 'dll_[name].js',
    library: '[name]_[hash]',
    path: path.resolve(__dirname, 'cache'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      format: true,
      context: path.join(__dirname, 'src'),
      path: path.join(__dirname, 'cache', 'mainfest.json'),
      name: '[name]_[hash]',
    }),
  ],
};
