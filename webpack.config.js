const path = require('path');

const config = {
  mode: 'production',
  entry: {
    'index': ['./src/index.ts'],
  },
  target: ['web', 'es2020'],
  output: {
    filename: 'pwa-install-polyfill.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'pwaInstallPolyfill',
      type: 'umd',
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'head', // insert style tag inside of <head>
              injectType: 'singletonStyleTag' // this is for wrap all your style in just one style tag
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        type: 'asset/source',
      },
    ]
  },
  devServer: {
    host: '0.0.0.0',
    static: [
      path.join(__dirname, 'demo'),
    ],
  },
};

module.exports = [config];
