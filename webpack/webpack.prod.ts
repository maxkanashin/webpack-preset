import webpack from 'webpack';

import buildLoaders from './build/buildLoaders';
import buildPlugins from './build/buildPlugins';
import buildResolver from './build/buildResolver';
import { BuildOptions } from './types';

const prodConfigBuilder: (options: BuildOptions) => webpack.Configuration = (options) => ({
    mode: 'production',
    entry: options.paths.entry,
    output: {
        path: options.paths.output,
        filename: '[name].[contenthash].js',
        clean: true,
    },
    plugins: buildPlugins.prod(options),
    module: {
        rules: buildLoaders.prod(),
    },
    resolve: buildResolver.prod(),
})

export default prodConfigBuilder;