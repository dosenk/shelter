const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'development',
  entry: {
    main: './src/pages/main/main.js',
    petsPage: './src/pages/pets/pets.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: isDev ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'shelter'),
  },
  devServer: {
    port: 4200,
  },
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/main/main.html',
      chunks: ['main'],
    }),
    new HTMLWebpackPlugin({
      filename: 'pets.html',
      template: './src/pages/pets/pets.html',
      chunks: ['petsPage'],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[contenthash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets/images/pets', to: './images/pets' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/u,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.s[ca]ss$/u,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
