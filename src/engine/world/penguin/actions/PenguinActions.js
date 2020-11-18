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
        if (this.movement.tween) return

        // Filters out shadow and ring
        let sprites = this.penguin.list.filter(child => child.type == 'Sprite')

        for (let sprite of sprites) {
            sprite.anims.play(`${sprite.texture.key}_${frame}`)
        }

        this.penguin.frame = frame
    }

}
