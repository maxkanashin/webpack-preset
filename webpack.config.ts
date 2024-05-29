import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Mode = 'development' | 'production';

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const config: webpack.Configuration = {
    mode: env.mode ?? 'development',
    entry: path.join(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      devtool: 'inline-source-map',
      devServer: {
        port: env.port?? 8080,
        open: true,
      },
  }
  return config;
}