const path = require('path')
const WebpackObfuscator = require('webpack-obfuscator')
const DefinePlugin = require('webpack').DefinePlugin


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
        static: {
            directory: path.join(__dirname),
            publicPath: '/'
        },
        devMiddleware: {
            writeToDisk: true
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: { '^/api': '' },
                ws: true
            },

            '/create/scripts/php': 'http://localhost:80'
        },
        host: '0.0.0.0',
        port: 8080,
        hot: false
    },
    resolve: {
        alias: {
            '@engine': path.resolve(__dirname, 'src/engine'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@components': path.resolve(__dirname, 'src/scenes/components'),
            '@rooms': path.resolve(__dirname, 'src/scenes/rooms'),
            '@games': path.resolve(__dirname, 'src/scenes/games'),
            '@igloos': path.resolve(__dirname, 'src/scenes/igloos'),
            '@parties': path.resolve(__dirname, 'src/scenes/parties')
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
    },
    plugins: [
        new DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version)
        })
    ]
}

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.output.filename = 'yukon.min.js'
        config.optimization.minimize = true

        config.plugins.push(
            new WebpackObfuscator({
                rotateStringArray: true,
                reservedStrings: ['\s*']
            }, [])
        )
    }

    return config
}
