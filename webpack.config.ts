import path from 'path';
import webpack from 'webpack';

import {BuildMode, BuildPaths} from './webpack/types'
import devConfigBuilder from './webpack/webpack.dev'
import prodConfigBuilder from './webpack/webpack.prod'

interface EnvVariables {
  mode: BuildMode;
}

const envs = {
  development: {
    builder: devConfigBuilder,
  },
  production: {
    builder: prodConfigBuilder,
  },
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
  };
  const config: webpack.Configuration = envs[env.mode ?? 'development'].builder({paths});
  return config;
}
