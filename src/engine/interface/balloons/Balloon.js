import BaseContainer from '@scenes/base/BaseContainer'


export default class Balloon extends BaseContainer {

    constructor(penguin) {
        let offsetY = -95

        super(penguin.room, penguin.x, penguin.y + offsetY)

        this.penguin = penguin

        this.minWidth = 128
        this.minHeight = 42
        this.offsetY = offsetY

        this.balloon
    }

    addBalloon(width, height) {
        if (width < this.minWidth) width = this.minWidth
        if (height < this.minHeight) height = this.minHeight

        this.balloon = this.scene.add.nineslice(
            0, 0,
            width, height,
            {
                key: 'main',
                frame: 'balloon'
            },
            15 // Corner slice
        )

        this.balloon.setOrigin(0.5, 1)

        this.add(this.balloon)
    }

    addPointer(width, frame) {
        if (width < this.minWidth) width = this.minWidth

        let pointer = this.scene.add.nineslice(
            0, 0,
            width, 40,
            {
                key: 'main',
                frame: frame
            },
            [0, 110, 0, 15] // Non-uniform corner slice
        )

        pointer.setOrigin(0.5, 0)

        this.add(pointer)
    }

    resizeBalloon(width, height) {
        this.balloon.resize(width, height)
    }

    updatePosition() {
        this.x = this.penguin.x
        this.y = this.penguin.y + this.offsetY
    }

}
