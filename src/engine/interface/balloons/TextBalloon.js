import Balloon from './Balloon'


const width = 256
const paddingX = 28
const paddingY = 16
const textWidth = width - paddingX

export default class TextBalloon extends Balloon {

    constructor(penguin) {
        super(penguin)

        this.textStyle = {
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#000000',
            align: 'center',
            fixedWidth: textWidth,
            wordWrap: { width: textWidth, useAdvancedWrap: true },
            lineSpacing: -5
        }

        this.text = this.addText()

        this.textParts = []

        this.addBalloon(width, this.text.height + paddingY)
        this.addPointer(width, 'balloon-text')
        this.add(this.text)
    }

    get isDone() {
        return !this.textParts.length
    }

    show(text) {
        // Split with delimeter for multi part message
        this.textParts = text.split('|')

        this.setText()
    }

    addText() {
        let textSprite = this.scene.add.text(0, 0, '', this.textStyle)

        textSprite.setOrigin(0.5, 1)

        return textSprite
    }

    setText() {
        const nextMessage = this.textParts.shift()

        this.text.text = nextMessage
        this.resizeBalloon(this.balloon.width, this.text.height + paddingY)

        super.show()
    }

    onTimerComplete() {
        if (!this.isDone) {
            this.setText()
        } else {
            super.onTimerComplete()
        }
    }

}
