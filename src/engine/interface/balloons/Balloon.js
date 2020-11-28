import BaseContainer from '@scenes/base/BaseContainer'


export default class Balloon extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.minWidth = 128
        this.minHeight = 42
    }

    addBalloon(width, height) {
        if (width < this.minWidth) width = this.minWidth
        if (height < this.minHeight) height = this.minHeight

        let balloon = this.scene.add.nineslice(
            0, 0,
            width, height,
            {
                key: 'main',
                frame: 'balloon'
            },
            15 // Corner slice
        )

        balloon.setOrigin(0.5, 1)

        this.add(balloon)
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

}
