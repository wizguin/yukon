import BaseLoader from './BaseLoader'


export default class ItemPromptLoader extends BaseLoader {

    constructor(scene, prompt) {
        super(scene)

        this.prompt = prompt
    }

    get baseURL() {
        return (this.prompt.type == 'furniture')
            ? '/assets/media/furniture/icon/@5x/'
            : '/assets/media/clothing/icon/large/'
    }

    get keyPrefix() {
        return (this.prompt.type == 'furniture')
            ? 'furniture/icon/@5x/'
            : 'clothing/icon/large/'
    }

    get scale() {
        switch (this.prompt.type) {
            case 'clothing':
                return 0.75
            case 'furniture':
                return 0.65
            default:
                return 1
        }
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