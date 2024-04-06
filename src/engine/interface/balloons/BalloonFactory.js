import EmoteBalloon from './EmoteBalloon'
import TextBalloon from './TextBalloon'


export default class BalloonFactory {

    constructor(scene) {
        this.scene = scene
    }

    get penguins() {
        return this.scene.world.room.penguins
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

        const penguin = this.penguins[id]
        if (!penguin || !penguin.visible) {
            return
        }

        if (!penguin.emoteBalloon) {
            penguin.emoteBalloon = new EmoteBalloon(penguin)
            penguin.room.add.existing(penguin.emoteBalloon)
        }

        penguin.emoteBalloon.show(emote)
    }

    /**
     * Shows a text balloon.
     *
     * @param {number} id - Penguin ID
     * @param {string} text - Message to be displayed
     * @param {boolean} addToLog - If the message should be added to the chat log
     */
    showTextBalloon(id, text, addToLog) {
        if (!text) {
            return
        }

        const penguin = this.penguins[id]
        if (!penguin) {
            return
        }

        if (addToLog) {
            this.scene.chatLog.addMessage(penguin.id, penguin.username, text)
        }

        if (!penguin.visible) {
            return
        }

        if (!penguin.textBalloon) {
            penguin.textBalloon = new TextBalloon(penguin)
            penguin.room.add.existing(penguin.textBalloon)
        }

        penguin.textBalloon.show(text)
    }

}
