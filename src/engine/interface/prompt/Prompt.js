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
        let bg = this.scene.add.nineslice(
            0, 0,
            width, 400,
            {
                key: 'prompt',
                frame: frame
            },
            50 // Corner slice
        )

        bg.setOrigin(0.5)

        return bg
    }

    createText() {
        let text = this.scene.add.text(0, 0, '', this.textStyle)

        text.setOrigin(0.5, 0.5)

        return text
    }

    createButton(frame, text) {
        let button = this.scene.add.container(0, 0)
        let buttonBg = this.scene.add.image(0, 0, 'prompt', frame)
        let buttonText = this.scene.add.text(0, 0, text, this.buttonTextStyle)

        button.add(buttonBg)
        button.add(buttonText)

        buttonText.setOrigin(0.5)
        buttonBg.setOrigin(0.5, 0.5)

        button.setSize(buttonBg.width, buttonBg.height)

        let component = new Button(buttonBg)
        component.spriteName = frame
        component.callback = () => this.visible = false

        return button
    }

}
