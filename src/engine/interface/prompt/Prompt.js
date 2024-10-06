import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive } from '@components/components'


export default class Prompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.createBlock()

        this.visible = false

        this.textStyle = {
            fontFamily: 'Arial',
            fontSize: 32,
            color: '#000000',
            align: 'center',
            fixedWidth: 626,
            wordWrap: { width: 600, useAdvancedWrap: true }
        }

        this.buttonTextStyle = {
            fontFamily: 'Arial',
            fontSize: 40,
            color: '#ffffff',
            align: 'center'
        }
    }

    createBlock() {
        let block = this.scene.add.rectangle(0, 0, 1520, 960)

        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.2

        new Interactive(block)
        this.add(block)
    }

    createBackground(width, frame) {
        let bg = this.scene.add.ninePatchContainer(
            0, 0,
            width, 400,
            'prompt',
            frame
        )

        bg.setMargin(50)

        return bg
    }

    createText() {
        let text = this.scene.add.text(0, 0, '', this.textStyle)

        text.setOrigin(0.5, 0.5)

        return text
    }

    createButton(frame, text) {
        let button = this.scene.add.container(0, 0)
        button.bg = this.scene.add.image(0, 0, 'prompt', frame)
        button.text = this.scene.add.text(0, 0, text, this.buttonTextStyle)

        button.add(button.bg)
        button.add(button.text)

        button.text.setOrigin(0.5)
        button.bg.setOrigin(0.5, 0.5)

        button.setSize(button.bg.width, button.bg.height)

        button.component = new Button(button.bg)
        button.component.spriteName = frame
        button.component.callback = () => this.visible = false

        return button
    }

}
