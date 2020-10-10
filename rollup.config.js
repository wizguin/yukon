import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import path from 'path'


export default {
    input: 'src/yukon.js',
    output: {
        file: 'public/assets/scripts/client/yukon.js',
        format: 'iife'
    },
    plugins: [
        alias({
            entries: [
                { find: '@', replacement: path.resolve(__dirname, 'src') }
            ]
        }),
        json(),
        serve({
            contentBase: 'public',
            port: 8080
        }),
        livereload('public')
    ]
}
