import Penguin from './Penguin'

import PathEngine from './pathfinding/PathEngine'


export default class ClientPenguin extends Penguin {

    constructor(user, room, penguinLoader) {
        super(user, room, penguinLoader)

        this.isClient = true

        this.savedPenguins = this.network.savedPenguins
        this.save = this.savedPenguins[this.username.toLowerCase()]

        penguinLoader.addRing(this)
    }

    update(item, slot) {
        super.update(item, slot)

        // Update item in save
        if (this.save && slot in this.save) {
            this.save[slot] = item
            localStorage.setItem('saved_penguins', JSON.stringify(this.savedPenguins))
        }
    }

    rotate(x, y) {
        let angle = PathEngine.getAngle(this.pos, { x: x, y: y + 80 })
        let direction = PathEngine.getDirection(angle)

        this.playFrame(direction)
    }

    sit(x, y) {
        let angle = PathEngine.getAngle(this.pos, { x: x, y: y + 80 })
        let direction = PathEngine.getDirection(angle)
        let frame = direction + 16 // + 16 for sitting frame id

        this.playFrame(frame)
        this.network.send('send_frame', { set: true, frame: frame })
    }

    move(x, y, frame = null) {
        if (frame) {
            this.afterMove = () => this.world.client.sendFrame(frame)
        }

        let path = PathEngine.getPath(this, { x, y })

        if (path) {
            this.addMoveTween(path)
            this.network.send('send_position', { x: path.target.x, y: path.target.y })
        }
    }

    onMoveComplete() {
        this.world.client.lockRotation = false

        super.onMoveComplete()
        this.isTrigger()
    }

    isTrigger() {
        if (!this.room.triggers) return

        for (let trigger of this.room.triggers) {
            if (this.room.matter.containsPoint(trigger, this.x, this.y)) {
                if (trigger.callback) return trigger.callback()
            }
        }
    }

}
