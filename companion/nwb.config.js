const path = require('path');
const package = require('./package.json');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  type: 'react-app',
  webpack: {
    debug: true,
    define: {
      __VERSION__: JSON.stringify(package.version)
    },
    extra: {
      output: {
        path: path.resolve('../www/')
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          appMountId: "app",
          chunks: ['vendor', 'runtime', 'app']
        }),
        new CleanWebpackPlugin()
      ]
    },
    config(config) {
      console.log(JSON.stringify(config, null, 2));
      return config;
    }
  }
}
