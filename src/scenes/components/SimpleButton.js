import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SimpleButton extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;
        /** @type {any} */
        this.hoverCallback = null;
        /** @type {any} */
        this.hoverOutCallback = null;
        /** @type {any} */
        this.callback = () => {};
        /** @type {boolean} */
        this.pixelPerfect = false;


        this.gameObject = gameObject;
        gameObject["__SimpleButton"] = this;

        /* START-USER-CTR-CODE */

        gameObject.isButton = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {SimpleButton} */
    static getComponent(gameObject) {
        return gameObject["__SimpleButton"];
    }


    /* START-USER-CODE */

    start() {
        this.setInteractive()

        this.gameObject.on('pointerover', () => this.onOver())
        this.gameObject.on('pointerout', () => this.onOut())
        this.gameObject.on('pointerup', (pointer) => this.onUp(pointer))
    }

    setInteractive() {
        // Input already enabled by Hit Area tool
        if (this.gameObject.input && this.gameObject.input.enabled) {
            this.gameObject.input.cursor = 'pointer'
            return
        }

        this.gameObject.setInteractive({
            cursor: 'pointer',
            pixelPerfect: this.pixelPerfect
        })
    }

    onOver() {
        if (this.hoverCallback) this.hoverCallback()
    }

    onOut() {
        if (this.hoverOutCallback) this.hoverOutCallback()
    }

    onUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.callback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
