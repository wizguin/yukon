export default class CardJitsuBattle {

    constructor(player) {
        this.player = player

        this.scene = player.scene

        this.currentBattle
        this.currentConfig

        this.list = {}

        this.animating = false

        // can be moved somewhere else
        this.beltColors = [16777215, 16776960, 16737792, 3394560, 13260, 13369344, 6684927, 6697728, 4473924, 4473924]
    }

    get body() {
        return this.list.body
    }

    get frontArm() {
        return this.list.frontarm
    }

    get backArm() {
        return this.list.backarm
    }

    get belt() {
        return this.list.belt
    }

    get beltLine() {
        return this.list.beltline
    }

    get sensei() {
        return this.list.sensei
    }

    play(battle) {
        this.clear()

        this.currentBattle = battle

        // Loaded from battle config.json file
        this.currentConfig = this.getConfig()

        // Sprite names mapped to layer and frames
        let spritesConfig = this.getSpritesConfig()

        this.createSprites(spritesConfig)
        this.playAnims()
    }

    getConfig() {
        return this.scene.cache.json.get(`${this.currentBattle}_config`) || {}
    }

    getSpritesConfig() {
        let frames = this.scene.textures.get(this.currentBattle).getFrameNames()

        let config = {}

        for (let f of frames) {
            let [layer, name, frame] = f.split('_')

            if (!(name in config)) {
                config[name] = {
                    layer: parseInt(layer),
                    frames: 0
                }
            }

            frame = parseInt(frame)

            if (config[name].frames < frame) {
                config[name].frames = frame
            }
        }

        return config
    }

    createSprites(config) {
        for (let name in config) {
            let spriteConfig = config[name]

            let sprite = this.scene.add.sprite(0, 0, this.currentBattle, `${spriteConfig.layer}_${name}_1`)
            sprite.layer = spriteConfig.layer

            this.player.add(sprite)

            this.list[name] = sprite

            sprite.anim = this.createAnim(name, spriteConfig)
        }

        this.player.sort('layer')
    }

    createAnim(name, spriteConfig) {
        if (spriteConfig.frames <= 1) {
            return
        }

        let key = `${this.currentBattle}/${name}`

        if (this.scene.anims.exists(key)) {
            return this.scene.anims.get(key)
        }

        let repeat = (this.currentBattle == 'ambient') ? -1 : 0

        return this.scene.anims.create({
            key: key,
            frames: this.scene.anims.generateFrameNames(this.currentBattle, {
                prefix: `${spriteConfig.layer}_${name}_`,
                start: 1,
                end: spriteConfig.frames
            }),
            frameRate: 24,
            repeat: repeat
        })
    }

    playAnims() {
        let values = Object.values(this.list)

        if (!values.length) {
            return
        }

        this.addAnimEvents(values)

        for (let sprite of values) {
            if (sprite.anim) {
                sprite.play(sprite.anim)
            }
        }

        this.animating = true
    }

    addAnimEvents(values) {
        // Only add events to one sprite instead of all
        let first = values[0]

        first.once('animationcomplete', () => this.onAnimComplete(first))

        if (!this.currentConfig.sounds) {
            return
        }

        // Sound events
        first.once('animationstart', (anim, frame) => this.onAnimUpdate(frame))

        first.on('animationupdate', (anim, frame) => this.onAnimUpdate(frame))
    }

    onAnimComplete(first) {
        first.off('animationupdate')

        this.animating = false
        this.scene.checkBattleComplete()
    }

    onAnimUpdate(frame) {
        let index = frame.index

        if (index in this.currentConfig.sounds) {
            this.playSound(index)
        }
    }

    playSound(key) {
        this.scene.soundManager.play(this.currentConfig.sounds[key])
    }

    setColor(color) {
        if (this.body) {
            this.body.tint = color
        }

        if (this.frontArm) {
            this.frontArm.tint = color
        }

        if (this.backArm) {
            this.backArm.tint = color
        }
    }

    setBelt(rank) {
        if (rank < 1) {
            this.hideBelt()
            return
        }

        let color = this.beltColors[rank - 1]

        if (this.belt) {
            this.belt.tint = color
        }
    }

    hideBelt() {
        this.belt.visible = false
        this.beltLine.visible = false
    }

    clear() {
        for (let child in this.list) {
            this.list[child].destroy()
            delete this.list[child]
        }
    }

}
