import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'


export default {
    input: 'src/Yukon.js',
    output: {
        file: 'public/assets/scripts/client/yukon.js',
        format: 'iife'
    },
    plugins: [
        serve({
            contentBase: 'public',
            port: 8080
        }),
        livereload('public')
    ]
}
