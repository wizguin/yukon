const path = require('path')

let config = {
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
            '@engine': path.resolve(__dirname, 'src/engine'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@components': path.resolve(__dirname, 'src/scenes/components'),
            '@rooms': path.resolve(__dirname, 'src/scenes/rooms'),
            '@igloos': path.resolve(__dirname, 'src/scenes/igloos')
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

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.output.filename = 'yukon.min.js'
        config.optimization.minimize = true
    }

    return config
}
