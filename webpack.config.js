const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./main.js",
    output: {
        filename: "index_bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: './index.html'
    }
}