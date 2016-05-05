module.exports = {
  entry: './public/scripts/main.js',
  output: {
    filename: './public/scripts/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.jsx$/,
        loaders: ['babel-loader']
      },
    ]
  },
};
