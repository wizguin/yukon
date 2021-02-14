import Balloon from './Balloon'


export default class TextBalloon extends Balloon {

    constructor(scene, x, y, text) {
        super(scene, x, y)

        let width = 256
        let paddingX = 28
        let paddingY = 16
        let textWidth = width - paddingX

        this.textStyle = {
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#000000',
            align: 'center',
            fixedWidth: textWidth,
            wordWrap: { width: textWidth, useAdvancedWrap: true },
            lineSpacing: -5
        }
        this.maxLength = 48

        let textSprite = this.createText(text)

        this.addBalloon(width, textSprite.height + paddingY)
        this.addPointer(width, 'balloon-text')
        this.add(textSprite)
    }

    createText(text) {
        text = text.substring(0, this.maxLength)
        let textSprite = this.scene.add.text(0, 0, text, this.textStyle)

        textSprite.setOrigin(0.5, 1)

        return textSprite
    }

}
