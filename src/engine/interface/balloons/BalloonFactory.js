import EmoteBalloon from './EmoteBalloon'
import TextBalloon from './TextBalloon'


export default class BalloonFactory {

    constructor(main) {
        // Main interface
        this.main = main

        // Balloon destruction delay
        this.delay = 4500

        this.offsetY = -95
    }

    get penguins() {
        return this.main.world.room.penguins
    }

    /**
     * Shows an emote balloon.
     *
     * @param {number} id - Penguin ID
     * @param {number} emote - Emote ID
     */
    showEmoteBalloon(id, emote) {
        if (!emote) {
            return
        }

        let penguin = this.penguins[id]
        if (!penguin || !penguin.visible) {
            return
        }

        if (!penguin.emoteBalloon) {
            penguin.emoteBalloon = new EmoteBalloon(penguin)
            penguin.room.add.existing(penguin.emoteBalloon)
        }

        penguin.emoteBalloon.setContent(emote)
        this.updateBalloon(penguin, penguin.emoteBalloon)
    }

    /**
     * Shows a text balloon.
     *
     * @param {number} id - Penguin ID
     * @param {string} text - Message to be displayed
     */
    showTextBalloon(id, text) {
        if (!text) {
            return
        }

        let penguin = this.penguins[id]
        if (!penguin) {
            return
        }

        this.main.chatLog.addMessage(penguin.id, penguin.username, text)

        if (!penguin.visible) {
            return
        }

        if (!penguin.textBalloon) {
            penguin.textBalloon = new TextBalloon(penguin)
            penguin.room.add.existing(penguin.textBalloon)
        }

        penguin.textBalloon.setContent(text)
        this.updateBalloon(penguin, penguin.textBalloon)
    }

    updateBalloon(penguin, balloon) {
        if (penguin.balloon) {
            penguin.balloon.visible = false
        }

        // Client balloons sorted higher
        balloon.depth = (penguin.isClient) ? 3001 : 3000

        balloon.visible = true
        penguin.balloon = balloon

        this.addTimer(penguin, balloon)
    }

    addTimer(penguin, balloon) {
        let config = {
            delay: this.delay,
            callback: () => this.removeBalloon(penguin, balloon)
        }

        if (penguin.balloonTimer) {
            penguin.balloonTimer.reset(config)
            penguin.room.time.addEvent(penguin.balloonTimer)

            return
        }

        penguin.balloonTimer = penguin.room.time.addEvent(config)
    }

    removeBalloon(penguin, balloon) {
        balloon.visible = false
        penguin.balloon = null
    }

}
