import PenguinMovement from './PenguinMovement'


export default class PenguinActions {

    constructor(penguin) {
        this.penguin = penguin
        this.room = penguin.room
        this.movement = new PenguinMovement(penguin)
    }

    movePenguin(x, y) {
        let path = this.movement.getPath(x, y)

        if (path) this.movement.movePenguin(path)
    }

    playFrame(frame, loop = true) {
        // Moving penguins can only update when frames are movement frames (9-16)
        if (this.movement.tween && (frame < 9 || frame > 16)) return

        // Filters out shadow and ring
        let sprites = this.penguin.list.filter(child => child.type == 'Sprite')

        for (let sprite of sprites) {
            let key = `${sprite.texture.key}_${frame}`

            if (this.checkFrames(sprite, key)) {
                sprite.visible = true
                sprite.anims.play(key)
            } else {
                sprite.visible = false
            }
        }

        this.penguin.frame = frame
    }

    checkFrames(sprite, key) {
        let animation = sprite.anims.animationManager.anims.entries[key]

        if (animation.frames.length > 0) {
            return true
        }
    }

}
