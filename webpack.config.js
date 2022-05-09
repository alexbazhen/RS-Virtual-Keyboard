const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
//const TerserWebpackPlugin = require('terser-webpack-plugin');



const isDev = process.env.NODE_END === 'development';
const isProd = !isDev;

module.exports = {
   context: path.resolve(__dirname, 'src'),
   mode: 'development',
   entry: './index.js',
   output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
   },
   optimization: {
      splitChunks: {
         chunks: 'all'
      }
   },
   devServer: {
      port: 4200,
      hot: isDev
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: './index.html',
         minify: {
            collapseWhitespace: isProd
         }
      }),
      new CleanWebpackPlugin({
         cleanOnceBeforeBuildPatterns: [
            '**/*',
            '!.git',
         ],
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      }),
      new ESLintPlugin(),
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [{
               loader: MiniCssExtractPlugin.loader,
               options: {
                  //hrm: isDev,
                  //reloadAll: true
               }
            }, 'css-loader']
         },
         {
            test: /\.scss$/,
            use: [{
               loader: MiniCssExtractPlugin.loader,
               options: {
                  //hrm: isDev,
                  //reloadAll: true
               }
            }, 
            'css-loader',
            'sass-loader'
            ]
         },
      ]
   }
}