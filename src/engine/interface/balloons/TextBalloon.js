import Balloon from './Balloon'


export default class TextBalloon extends Balloon {

    constructor(penguin) {
        super(penguin)

        let width = 256
        let paddingX = 28
        let textWidth = width - paddingX

        this.maxLength = 60
        this.paddingY = 16

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

        this.addBalloon(width, this.text.height + this.paddingY)
        this.addPointer(width, 'balloon-text')
        this.add(this.text)
    }

    addText() {
        let textSprite = this.scene.add.text(0, 0, '', this.textStyle)

        textSprite.setOrigin(0.5, 1)

        return textSprite
    }

    setContent(text) {
        this.updatePosition()

        text = text.substring(0, this.maxLength)
        this.text.text = text

        this.resizeBalloon(this.balloon.width, this.text.height + this.paddingY)
    }

}
