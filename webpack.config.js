const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: "./src/App.tsx",
  devtool: "source-map",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader",
        },{
          loader: "css-loader",
        },{
          loader: "sass-loader",
        }]
        
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', ".tsx"]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'src/public'),
    },
    port: 3000,
    open: true,
    hot: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: "src/public/index.html",
    hash: true, // Cache busting
    filename: '../dist/index.html'
  })]
}
