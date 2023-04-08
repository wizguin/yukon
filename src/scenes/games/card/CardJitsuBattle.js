export default class CardJitsuBattle {

    constructor(player) {
        this.player = player

        this.scene = player.scene

        this.currentBattle
        this.list = {}

        this.animating = false

        // can be moved somewhere else
        this.beltColors = [null, 16777215, 16776960, 16737792, 3394560, 13260, 13369344, 6684927, 6697728, 4473924, 4473924]
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

        // Sprite names mapped to layer and frames
        let config = this.getBattleConfig()

        this.createSprites(config)
        this.playAnims()
    }

    getBattleConfig() {
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
        for (let sprite of Object.values(this.list)) {
            if (sprite.anim) {
                sprite.play(sprite.anim)
            }
        }

        this.animating = true

        // Only add this event to one sprite instead of all
        let first = Object.values(this.list)[0]
        first.once('animationcomplete', this.onAnimationComplete, this)
    }

    onAnimationComplete() {
        this.animating = false
        this.scene.checkBattleComplete()
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

        let color = this.beltColors[rank]

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
