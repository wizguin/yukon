import Prompt from './Prompt'


class ErrorPrompt extends Prompt {

    constructor(scene, x, y) {
        super(scene, x, y)

        this.bg = this.createBackground(708, 'error')
        this.text = this.createText()
        this.button = this.createButton('error-button', 'Okay')

        this.add([ this.bg, this.text, this.button ])
    }

    show(text, buttonText, callback) {
        this.text.text = text
        this.button.text.text = buttonText
        // Allows for modification of callback
        this.button.component.callback = callback

        // Clamp minimum text height at 140px
        this.text.height = (this.text.height > 140) ? this.text.height : 140

        this.resize()

        super.show()
    }

    resize() {
        // Resize prompt background to fit all content, + total padding, + extra padding
        this.bg.resize(708, this.text.height + this.button.height + 100 + 25)

        // Reposition contents using new background and text height
        this.text.y = -(this.bg.height / 2) + (this.text.height / 2) + 50
        this.button.y = (this.bg.height / 2) - (this.button.height / 2) - 50
    }

}

export default ErrorPrompt
