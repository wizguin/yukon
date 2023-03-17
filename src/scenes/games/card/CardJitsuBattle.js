export default class CardJitsuBattle {

    constructor(player) {
        this.player = player

        this.scene = player.scene

        this.currentBattle
        this.list = {}
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

        return this.scene.anims.create({
            key: key,
            frames: this.scene.anims.generateFrameNames(this.currentBattle, {
                prefix: `${spriteConfig.layer}_${name}_`,
                start: 1,
                end: spriteConfig.frames
            }),
            frameRate: 24,
            repeat: -1
        })
    }

    playAnims() {
        for (let sprite of Object.values(this.list)) {
            if (sprite.anim) {
                sprite.play(sprite.anim)
            }
        }
    }

    clear() {
        for (let child in this.list) {
            this.list[child].destroy()
            delete this.list[child]
        }
    }

}
