module.exports = {
  entry: './client/main.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['env']},
        },
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
};
