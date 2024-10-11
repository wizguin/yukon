import LoadingPrompt from '@scenes/interface/prompts/LoadingPrompt'


export default class LoadingPromptFactory {

    constructor(_interface) {
        this.interface = _interface

        this.prompts = {}
    }

    get world() {
        return this.interface.world
    }

    showLoading(text, key, url, unload = true, callback) {
        if (key in this.prompts) {
            return this.updatePrompt(key)
        }

        let prompt = this.createPrompt()
        this.prompts[key] = prompt

        if (unload) {
            prompt.packFileLoader.on('filecomplete', (key, type, data) => {
                this.world.loadedAssets.push({id: key, type})
                console.log(key)
            })
        }

        prompt.packFileLoader.on('complete', () => {
            prompt.destroy()
            delete this.prompts[key]
        })

        prompt.show(text, key, url, callback)
    }

    createPrompt() {
        let prompt = new LoadingPrompt(this.interface, 760, 480)
        this.interface.add.existing(prompt)

        return prompt
    }

    updatePrompt(key) {
        let activePrompt = this.prompts[key]

        for (let prompt in this.prompts) {
            this.prompts[prompt].depth = 0
        }

        activePrompt.depth = 1
        activePrompt.visible = true
    }

    hideAll() {
        for (let prompt in this.prompts) {
            this.prompts[prompt].visible = false
        }
    }

}
