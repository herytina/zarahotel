const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production', // ou 'development'
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new DefinePlugin({
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
      // Ajoutez d'autres flags si nécessaire
    }),
  ],
};
