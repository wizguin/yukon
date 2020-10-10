import json from '@rollup/plugin-json'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'


export default {
    input: 'src/Yukon.js',
    output: {
        file: 'public/assets/scripts/client/yukon.js',
        format: 'iife'
    },
    plugins: [
        json(),
        serve({
            contentBase: 'public',
            port: 8080
        }),
        livereload('public')
    ]
}
