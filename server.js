const express = require("express");
const webpack = require("webpack");
const path = require('path');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config.js");

const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve(__dirname, "dist")));

app.listen(3000, () => {
  console.info("App is running on http://localhost:3000")
})