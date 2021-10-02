const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

module.exports = {
    mode: mode,
    target: 'browserslist',

    entry: path.resolve(__dirname, 'src', 'app', 'index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]'
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset'
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],

    resolve: {
        extensions: [
            '.js', '.jsx'
        ],
        alias: {
            'root': path.relative(__dirname, 'src'),
            'app': path.resolve(__dirname, 'src', 'app'),
            'actions': path.resolve(__dirname, 'src', 'app', 'actions'),
            'components': path.resolve(__dirname, 'src', 'app', 'components'),
            'reducers': path.resolve(__dirname, 'src', 'app', 'reducers'),
            'images': path.resolve(__dirname, 'src', 'images'),
            'styles': path.resolve(__dirname, 'src', 'styles')
        }
    },

    devtool: "source-map",
    devServer: {
        static: path.join(__dirname, 'dist'),
        hot: true
    }
};