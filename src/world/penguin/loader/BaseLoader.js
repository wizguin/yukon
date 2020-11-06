export default class BaseLoader {

    constructor(world) {
        this.world = world

        this.anims = world.anims
        this.animations = world.crumbs.penguin
        this.colors = world.crumbs.colors
    }

    loadSprite(penguin, id, depth) {
        id = String(id)
        let sprite = penguin.room.add.sprite(0, 0, id, '1_1')

        this.addAnims(id, sprite)

        if (id == 'penguin-body') sprite.tint = this.colors[penguin.user.color - 1]

        penguin.addAt(sprite, depth)
    }

    addAnims(id) {
        let anims = this.anims

        if (anims.exists(`${id}_1`)) return // If sprite animations are already loaded

        for (let [animationId, animation] of Object.entries(this.animations)) {

            let frames = anims.generateFrameNames(id, {
                start: (animation.start) ? animation.start : 1,
                end: animation.end,
                prefix: `${animationId}_`
            })

            anims.create({
                key: `${id}_${animationId}`,
                frames: frames,
                frameRate: 24,
                repeat: (animation.repeat) ? animation.repeat : 0
            })
        }
    }

}
