import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; 

import { BuildOptions } from '../types';

const buildPlugins = {
    prod: (options: BuildOptions) => {
        return [
            new HtmlWebpackPlugin({template: options.paths.html}),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        ];
    },
    dev: (options: BuildOptions) => {
        return [
            new HtmlWebpackPlugin({template: options.paths.html}),
            new webpack.ProgressPlugin(),
        ];
    }
}

export default buildPlugins;