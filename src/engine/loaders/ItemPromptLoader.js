import BaseLoader from './BaseLoader'


export default class ItemPromptLoader extends BaseLoader {

    constructor(scene, prompt) {
        super(scene)

        this.prompt = prompt
    }

    loadIcon(config) {
        if (this.prompt.icon) {
            this.prompt.icon.destroy()
        }

        if (!config.key || !config.url) {
            return
        }

        const scale = config.scale || 1

        if (this.checkComplete('image', config.key, () => {
            this.onFileComplete(config.key, scale)
        })) {
            return
        }

        this.image(config.key, config.url)
        this.start()
    }

    onFileComplete(key, scale) {
        if (this.textureExists(key)) {
            this.prompt.addIcon(key, scale)
        }
    }

}