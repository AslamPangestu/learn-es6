const path = require("path");
const build = path.resolve(__dirname, "build");

module.exports = {
  entry: path.resolve(__dirname, "src"),
  output: {
    path: build, //build folder location
    filename: "bundle.js" //build file
  },
  devServer: {
    port: 3000,
    contentBase: build
  }
};
