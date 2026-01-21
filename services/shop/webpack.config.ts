import { buildWebpack } from "@packages/build-config";
import type { Configuration } from "webpack";
import { BuildPaths, BuildPlatform, Mode } from "@packages/build-config";
import path from "path";
import webpack from "webpack";
import packageJson from "./package.json";

interface EnvVariables {
  mode?: Mode;
  port?: string | number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

const config = (env: EnvVariables = {}): Configuration => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };

  const { ModuleFederationPlugin } = webpack.container;
  const port = env.port !== undefined ? Number(env.port) : 3000;

  const webpackConfig = buildWebpack({
    port: 3001,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });

  webpackConfig.plugins.push(new ModuleFederationPlugin({
    name: "shop",
    filename: "remoteEntry.js",
    exposes: {
      "./Router": "./src/router/Router.tsx",
    },
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies["react"],
      },
      "react-router-dom": {
        eager: true,
        requiredVersion: packageJson.dependencies["react-router-dom"],
      },
      "react-dom": {
        eager: true,
        requiredVersion: packageJson.dependencies["react-dom"],
      },
    },
  }));

  return webpackConfig;
}

export default config;