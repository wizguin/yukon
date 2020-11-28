import TextBalloon from './TextBalloon'


export default class BalloonFactory {

    constructor(main) {
        this.main = main // Main interface

        this.delay = 4500 // Balloon destruction delay
    }

    /**
     * Shows a text balloon.
     *
     * @param {number} id - Penguin ID
     * @param {string} text - Message to be displayed
     */
    showTextBalloon(id, text) {
        if (!text) return

        let penguin = this.main.world.room.penguins[id]
        if (!penguin) return

        let balloon = new TextBalloon(this.main, penguin.x, penguin.y - 95, text)
        this.addBalloon(penguin, balloon)
    }

    addBalloon(penguin, balloon) {
        if (penguin.balloon) penguin.balloon.destroy() // Destroy existing balloon

        balloon.depth = penguin.depth + 2100 // Balloons depth sorted and above nametags

        penguin.room.add.existing(balloon)
        penguin.balloon = balloon

        this.addTimer(penguin, balloon)
    }

    addTimer(penguin, balloon) {
        let timer = penguin.room.time.addEvent({
            delay: this.delay,
            callback: () => { this.removeBalloon(penguin, balloon) }
        })

        balloon.on('destroy', () => { this.removeTimer(timer) })
    }

    /**
     * Removes a timer.
     * This will prevent timers on destroyed balloons from firing.
     *
     * @param {Phaser.Time.TimerEvent} timer - The balloon timer to be destroyed
     */
    removeTimer(timer) {
        timer.remove()
    }

    removeBalloon(penguin, balloon) {
        balloon.destroy()
        penguin.balloon = null
    }

}
