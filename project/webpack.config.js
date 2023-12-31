const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  console.log(isProduction);

  return {
    entry: './src/index.ts', // Your entry point
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js', // Output file
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: isProduction ? [
      new webpack.optimize.UglifyJsPlugin()
    ] : [],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
  }
};
