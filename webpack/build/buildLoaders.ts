import { ModuleOptions } from "webpack"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; 

const buildLoaders = {
    prod: (): ModuleOptions['rules'] => {
        return [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
                ],
              },
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
        ]
    },
    dev: (): ModuleOptions['rules'] => {
        return [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
              },
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
        ]
    }
}

export default buildLoaders;