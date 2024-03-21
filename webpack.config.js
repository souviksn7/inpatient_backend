const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    target: 'node',
    entry: './src/index.js',
    output: {
      filename: isProduction ? 'main.min.js' : 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devtool: isProduction ? false : 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader', // Add babel-loader for transpiling JavaScript
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader', // Add ts-loader for handling TypeScript files
        },
        {
          test: /\.node$/,
          use: 'node-loader', // Add node-loader for handling binary Node.js addon files
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'], // Add loaders for handling CSS files
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: 'file-loader', // Add file-loader for handling image files
        },
        {
          test: /\.d\.ts$/, // Handle TypeScript definition files
          use: 'null-loader', // or use appropriate loader for TypeScript definition files
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
            mangle: true,
          },
        }),
      ],
    },
    node: {
      // Add polyfills for Node.js globals not present in webpack environment
      __dirname: false,
      __filename: false,
    },
    externals: {
      // Exclude modules that should be available at runtime in Node.js environment
      canvas: 'commonjs canvas', // Exclude canvas module
      'pg-native': 'commonjs pg-native', // Exclude pg-native module
    },
  };
};
