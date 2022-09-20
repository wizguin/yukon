import BaseLoader from './BaseLoader'


export default class ItemPromptLoader extends BaseLoader {

    constructor(scene, prompt) {
        super(scene)

        this.prompt = prompt

        this.config = {
            clothing: {
                baseURL: '/assets/media/clothing/icon/240/',
                keyPrefix: 'clothing/icon/240/'
            },
            furniture: {
                baseURL: '/assets/media/furniture/icon/@5x/',
                keyPrefix: 'furniture/icon/@5x/',
                scale: 0.65
            }
        }
    }

    get baseURL() {
        return this.config[this.prompt.type].baseURL
    }

    get keyPrefix() {
        return this.config[this.prompt.type].keyPrefix
    }

    get scale() {
        return this.config[this.prompt.type].scale || 1
    }

    loadIcon(item) {
        if (this.prompt.icon) {
            this.prompt.icon.destroy()
        }

        let key = this.getKey(item)

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, item)
        })) {
            return
        }

        this.image(key, `${item}.png`)
        this.start()
    }

    onFileComplete(key, item) {
        if (!this.prompt.visible || !this.textureExists(key) || item != this.prompt.item) {
            return
        }

        if (this.prompt.icon) {
            this.prompt.icon.destroy()
        }

        let icon = this.scene.add.image(0, -182, key)
        icon.scale = this.scale

        this.prompt.add(icon)
        this.prompt.icon = icon
    }

}