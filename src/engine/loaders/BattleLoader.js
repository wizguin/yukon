import BaseLoader from './BaseLoader'


export default class BattleLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.addedPacks = []
    }

    loadBattles(battles, callback) {
        for (let battle of battles) {
            this.loadBattle(battle)
        }

        this.once('complete', () => {
            callback()
        })

        this.start()
    }

    loadBattle(battle) {
        let key = `${battle}-pack`
        let url = `/assets/media/games/card/battles/${battle}/${key}.json`

        this.addedPacks.push(key)

        this.pack(key, url)
    }

    clearPacks() {
        this.reset()
        this.off('complete')

        while (this.addedPacks.length) {
            let key = this.addedPacks.pop()

            this.clearPack(key)
        }
    }

    clearPack(key) {
        if (!this.jsonExists(key)) {
            return
        }

        let json = this.scene.cache.json.get(key)

        let sections = Object.values(json).filter(value => 'files' in value)

        for (let section of sections) {
            this.clearFiles(section)
        }

        this.removeFromCache(this.scene.cache.json, key)
    }

    clearFiles(section) {
        for (let file of section.files) {
            this.clearFile(file)
        }
    }

    clearFile(file) {
        switch (file.type) {
            case 'multiatlas':
                this.removeFromCache(this.scene.textures, file.key)
                this.clearAnims(file.key)
                break

            default:
                this.removeFromCache(this.scene.cache[file.type], file.key)
                break
        }
    }

    clearAnims(textureKey) {
        let entries = this.scene.anims.anims.entries

        for (let animationKey in entries) {
            let animation = entries[animationKey]

            if (this.animUsingTexture(animation, textureKey)) {
                this.scene.anims.remove(animationKey)
            }
        }
    }

    animUsingTexture(animation, textureKey) {
        return !!animation.frames.find(frame => frame.textureKey == textureKey)
    }

    removeFromCache(cache, key) {
        if (cache.exists(key)) {
            cache.remove(key)
        }
    }

    reset() {
        this.inflight.each(file => this.abortFile(file))

        super.reset()
    }

    abortFile(file) {
        // Aborted file never gets added to cache
        file.xhrLoader.abort()

        // Removes from inflight with success value false
        file.loader.nextFile(file, false)
    }

}
