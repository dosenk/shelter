const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    mode: 'development',
    entry: {
        main: './src/pages/index.js',
        petsPage: './src/pages/pets/pets.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: isDev ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'prod')
    }, 
    devServer: {
        port: 4200
    },
    devtool: isDev ? 'source-map' : '',
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/main/main.html',
            chunks: ['main']
        }),
        new HTMLWebpackPlugin({
            filename: 'pets.html',
            template: './src/pages/pets/pets.html',
            chunks: ['petsPage']
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : '[name].[contenthash].css',
            chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
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
                       options: {
                        // publicPath: (resourcePath, context) => {
                        //   return path.relative(path.dirname(resourcePath), context) + '/';
                        // },
                      },
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
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