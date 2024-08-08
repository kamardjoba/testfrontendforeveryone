const path = require('path');

module.exports = {
  mode: 'development', // Или 'production'
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Другие правила загрузки модулей
    ],
  },
  devtool: 'source-map',
  ignoreWarnings: [
    {
      module: /@tonconnect\/protocol/,
      message: /Failed to parse source map/,
    },
    {
      module: /@tonconnect\/sdk/,
      message: /Failed to parse source map/,
    },
  ],
};
