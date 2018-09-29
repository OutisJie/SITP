const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        // print: './src/print.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './build',
        hot: true
    },
    plugins: [
        //清空build文件夹
        new CleanWebpackPlugin(['build']),
        //自动生成index.html
        new HtmlWebpackPlugin({
            title: 'Webpack'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },{
                test: /\.(png|jpg|svg|gif)$/,
                use:[
                    "file-loader"
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build')
    },
}