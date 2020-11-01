const path = require('path');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/Game.js',
    output: {
        filename: 'yukon.js',
        path: path.resolve(__dirname, 'assets/scripts/client')
    },
    optimization : {
        minimize: false
    },
    devServer: {
        contentBase: path.join(__dirname),
        publicPath: '/',
        writeToDisk: true
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@rooms': path.resolve(__dirname, 'src/scenes/world/rooms')
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
