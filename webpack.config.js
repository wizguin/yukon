const path = require('path');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/yukon.js',
    output: {
        filename: 'yukon.js',
        path: path.resolve(__dirname, 'public/assets/scripts/client')
    },
    optimization : {
        minimize: false
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/',
        writeToDisk: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
