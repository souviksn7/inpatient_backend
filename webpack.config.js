const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

// Common configuration for both development and production
const commonConfig = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

// Development configuration
const developmentConfig = {
  ...commonConfig,
  mode: 'development',
  devtool: 'source-map', // Add source maps for better debugging in development
};

// Production configuration
const productionConfig = {
  ...commonConfig,
  mode: 'production',
  output: {
    filename: 'main.min.js', // Rename the output file for production
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
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
};

// Export the merged configuration based on the environment
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return developmentConfig;
  }

  return productionConfig;
};
