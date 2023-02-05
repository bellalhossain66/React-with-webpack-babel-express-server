const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "./src/index.js",
    "webpack-hot-middleware/client?reload=true"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env", "@babel/preset-react"]
        //   }
        // }
        use: ['babel-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};