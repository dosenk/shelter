const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: 'development',
    entry: {
        main: './src/pages/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    }, 
    devServer: {
        port: 4200
    },
    devtool: isDev ? 'source-map' : '',
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/pages/main/main.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.s[ca]ss$/,
                use: [
                    {
                       loader: MiniCssExtractPlugin.loader, 
                       options: {},
                    },
                    'css-loader',
                    'sass-loader'
                    ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                  name: '[hash].[name].[ext]',
                  outputPath: 'images'
                },
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }
        ]
    }
}