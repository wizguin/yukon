export default class TextInput extends Phaser.GameObjects.DOMElement {

    constructor(scene, x, y, type, style, callback = () => {}, maxLength = 100, preventTab = true) {
        let element = document.createElement('input')

        // Combine default styles with passed in styles
        style = {
            backgroundColor: 'transparent',
            border: 'transparent',
            outline: 'transparent',

            ...style
        }

        element.type = type
        element.autocomplete = 'new-password'
        element.spellcheck = false
        element.maxLength = maxLength

        super(scene, x, y, element, style)

        this.callback = callback
        this.preventTab = preventTab

        this.addListeners()
        this.addInput()
    }

    get text() {
        return this.node.value
    }

    addListeners() {
        this.addListener('focus')
        this.addListener('blur')
        this.addListener('keydown')
    }

    addInput() {
        this.on('focus', () => { this.onFocus() })
        this.on('blur', () => { this.onBlur() })
        this.on('keydown', (event) => { this.onKeyDown(event) })
    }

    onFocus() {
        this.scene.game.input.keyboard.enabled = false
    }

    onBlur() {
        this.scene.game.input.keyboard.enabled = true
    }

    onKeyDown(event) {
        if (event.key == 'Enter') {
            event.preventDefault()

            if (!this.text) this.node.blur()
            this.callback()

        } else if (event.key == 'Tab' && this.preventTab) {
            // Prevent default to stop tab switching elements
            event.preventDefault()
        }
    }

    setFocus() {
        this.node.focus()
    }

    clearText() {
        this.node.value = ''
    }

}
