import BaseContainer from '@scenes/base/BaseContainer'


const offsetY = -95
const minWidth = 128
const minHeight = 42
const removeDelay = 4500

export default class Balloon extends BaseContainer {

    constructor(penguin) {
        super(penguin.room, penguin.x, penguin.y + offsetY)

        this.penguin = penguin

        this.balloon = null

        this.timerConfig = {
            delay: removeDelay,
            callback: () => this.onTimerComplete()
        }
    }

    get timer() {
        return this.penguin.balloonTimer
    }

    set timer(timer) {
        this.penguin.balloonTimer = timer
    }

    show() {
        this.updatePosition()
        this.updateDepth()
        this.setActiveBalloon()
        this.startTimer()

        super.show()
    }

    close() {
        this.penguin.balloon = null

        super.close()
    }

    addBalloon(width, height) {
        if (width < minWidth) width = minWidth
        if (height < minHeight) height = minHeight

        this.balloon = this.scene.add.ninePatchContainer(0, 0, width, height, 'main', 'balloon')

        this.balloon.setMargin(15)
        this.balloon.setNinePatchContainerOrigin(0.5, 1)

        this.add(this.balloon)
    }

    addPointer(width, frame) {
        if (width < minWidth) width = minWidth

        const pointer = this.scene.add.ninePatchContainer(0, 0, width, 40, 'main', frame)

        pointer.marginTop = 0
        pointer.marginRight = 110
        pointer.marginBottom = 0
        pointer.marginLeft = 15

        pointer.setNinePatchContainerOrigin(0.5, 0)

        this.add(pointer)
    }

    resizeBalloon(width, height) {
        this.balloon.resize(width, height)
    }

    updatePosition() {
        this.x = this.penguin.x
        this.y = this.penguin.y + offsetY
    }

    updateDepth() {
        // Client balloons sorted higher
        this.depth = this.penguin.isClient ? 3001 : 3000
    }

    setActiveBalloon() {
        if (this.penguin.balloon) {
            // Close other
            this.penguin.balloon.close()
        }

        this.penguin.balloon = this
    }

    startTimer() {
        this.timer.reset(this.timerConfig)
        this.scene.time.addEvent(this.timer)
    }

    stopTimer() {
        this.timer.remove()
        this.scene.time.removeEvent(this.timer)
    }

    onTimerComplete() {
        this.close()
    }

    destroy() {
        this.close()
        this.stopTimer()

        super.destroy()
    }

}
