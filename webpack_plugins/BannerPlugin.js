// Set a string as preamble

class BannerPlugin {
    constructor(options) {
        this.banner = options.banner
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
            compilation.chunks.forEach(chunk => {
                chunk.files.forEach(filename => {
                    const asset = compilation.assets[filename]

                    // Convert to comment block
                    this.banner = `/*\n${this.banner}*/\n`

                    // Append banner
                    asset._value = `${this.banner}${asset._value}`
                })
            })

            callback()
        })
    }
}

module.exports = BannerPlugin
