import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ShowHint extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject;
        /** @type {string} */
        this.text = "";


        this.gameObject = gameObject;
        gameObject["__ShowHint"] = this;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {ShowHint} */
    static getComponent(gameObject) {
        return gameObject["__ShowHint"];
    }


    /* START-USER-CODE */

    get hint() {
        return this.gameObject.scene.interface.hint
    }

    start() {
        let gameObject = (this.gameObject.zone) ? this.gameObject.zone : this.gameObject

        gameObject.on('pointerover', () => this.onOver())
        gameObject.on('pointerout', () => this.onOut())
        gameObject.on('pointerup', () => this.onOut())
    }

    onOver() {
        if (!this.text) {
            return
        }

        this.hint.showHint(
            this.gameObject,
            this.gameObject.scene.getString(this.text)
        )
    }

    onOut() {
        this.hint.hideHint()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
