// Set a string as preamble

class BannerPlugin {
    constructor(options) {
        // Convert to comment block
        this.banner = `/*\n${options.banner}*/\n`
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
            compilation.chunks.forEach(chunk => {
                chunk.files.forEach(filename => {
                    const asset = compilation.assets[filename]

                    // Append banner
                    asset._value = `${this.banner}${asset._value}`
                })
            })

            callback()
        })
    }
}

module.exports = BannerPlugin
