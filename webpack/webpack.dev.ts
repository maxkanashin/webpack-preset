import webpack from 'webpack';

import buildLoaders from './build/buildLoaders';
import buildPlugins from './build/buildPlugins';
import buildResolver from './build/buildResolver';
import { BuildOptions } from './types';

const devConfigBuilder: (options: BuildOptions) => webpack.Configuration = (options) => ({
    mode: 'development',
    entry: options.paths.entry,
    output: {
        path: options.paths.output,
        filename: '[name].[contenthash].js',
        clean: true,
    },
    plugins: buildPlugins.dev(options),
    module: {
        rules: buildLoaders.dev(),
    },
    resolve: buildResolver.dev(),
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        open: true,
    },
})

export default devConfigBuilder;