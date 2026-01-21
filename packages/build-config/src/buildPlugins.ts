import { DefinePlugin, ProgressPlugin } from "webpack";
import type { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from "path";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const { analyzer } = options;
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({ template: options.paths.html, favicon: path.resolve(options.paths.public, "favicon.ico") }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
    }),
    // new ForkTsCheckerWebpackPlugin(),
  ];

  if (isProd) {

  }

  if (isDev) {
    plugins.push(new ProgressPlugin());
    plugins.push(new ReactRefreshPlugin());
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}