/* eslint-disable */
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");
module.exports = {
  webpack(config, { dev }) {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: ["/node_modules/", "/.next/", "/out/"],
        enforce: "pre",
        options: {
          emitWarning: true
        }
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};