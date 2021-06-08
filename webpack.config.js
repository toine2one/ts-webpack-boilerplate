const path = require("path");

const config = {
  devtool: "inline-source-map",
  mode: "development",
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [],
};

const mainBundle = (env, args) =>
  Object.assign({}, config, {
    entry: "./src/main.ts",
    mode: "development",
    resolve: {
      extensions: [".ts", ".js"],
      fallback: {},
    },
    output: {
      filename: "mainBundle.js",
      path: path.resolve(__dirname, "dist"),
    },
  });

module.exports = [mainBundle];
