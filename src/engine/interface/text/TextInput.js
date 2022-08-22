const defaultRegex = /[^ -~]/gi


export default class TextInput extends Phaser.GameObjects.DOMElement {

    constructor(scene, x, y, type, style, callback = () => {}, maxLength = 100, preventTab = true, regex = defaultRegex) {
        let element = document.createElement('input')

        // Combine default styles with passed in styles
        style = {
            backgroundColor: 'transparent',
            border: 'transparent',
            outline: 'transparent',
            pointerEvents: 'auto',

            ...style
        }

        element.type = type
        element.autocomplete = 'new-password'
        element.spellcheck = false
        element.maxLength = maxLength

        super(scene, x, y, element, style)

        this.callback = callback
        this.maxLength = maxLength
        this.preventTab = preventTab
        this.regex = regex

        let totalPadding = this.getTotalPadding(style.padding)

        // Phaser Text object which will be used on focus lost
        this.phaserText = this.scene.add.text(x, y, '', {
            fixedWidth: style.width - totalPadding,
            fontFamily: style.fontFamily,
            fontSize: style.fontSize,
            color: style.color
        })

        this.phaserText.setOrigin(0.5, 0.5)
        this.phaserText.visible = false

        this.addListeners()
        this.addInput()
    }

    get text() {
        return this.node.value
    }

    setText(text = this.text) {
        this.node.value = this.filterText(text)
    }

    filterText(text) {
        return text.replace(this.regex, '').substring(0, this.maxLength)
    }

    /**
     * Gets total width of padding, requires padding to be in the following format:
     * "1px 1px 1px 1px".
     *
     * @param {string} padding - CSS padding string
     */
    getTotalPadding(padding) {
        if (!padding) {
            return 0
        }

        let parsed = padding.replaceAll('px', '').split(' ')
        return parseInt(parsed[1]) + parseInt(parsed[3])
    }

    addListeners() {
        this.addListener('focus')
        this.addListener('blur')
        this.addListener('keydown')
        this.addListener('input')

        this.scene.events.on('showinput', () => this.onShow())
        this.scene.events.on('hideinput', () => this.onHide())

        this.on('destroy', () => this.onDestroy())
    }

    addInput() {
        this.on('focus', () => this.onFocus())
        this.on('blur', () => this.onBlur())
        this.on('keydown', (event) => this.onKeyDown(event))
        this.on('input', () => this.setText())
    }

    onFocus() {
        this.clearEmoteKey()
        this.scene.game.input.keyboard.enabled = false
    }

    onBlur() {
        this.clearEmoteKey()
        this.scene.game.input.keyboard.enabled = true
    }

    onKeyDown(event) {
        if (event.key == 'Enter') {
            event.preventDefault()

            if (!this.text) {
                this.node.blur()
            }

            this.callback()

        } else if (event.key == 'Tab' && this.preventTab) {
            // Prevent default to stop tab switching elements
            event.preventDefault()
        }
    }

    onShow() {
        this.phaserText.visible = false
        this.visible = true
    }

    onHide() {
        // Update phaser text
        let text = (this.node.type == 'password') ? '•'.repeat(this.text.length) : this.text
        this.phaserText.text = text

        this.phaserText.visible = true
        this.visible = false
    }

    onDestroy() {
        this.scene.events.off('showinput')
        this.scene.events.off('hideinput')
    }

    setFocus() {
        this.node.focus()
    }

    clearText() {
        this.setText('')
    }

    clearEmoteKey() {
        if (this.scene.world.client) {
            this.scene.world.client.emoteKeyPressed = false
        }
    }

}
