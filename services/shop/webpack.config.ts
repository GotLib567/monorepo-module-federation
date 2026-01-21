import { buildWebpack } from "@packages/build-config";
import type { Configuration } from "webpack";
import { BuildPaths, BuildPlatform, Mode } from "@packages/build-config";
import path from "path";

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


  const port = env.port !== undefined ? Number(env.port) : 3000;

  return buildWebpack({
    port,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });
}

export default config;