import SimpleButton from './SimpleButton'


/* START OF COMPILED CODE */

class Button extends SimpleButton {
    
    constructor(gameObject) {
        super(gameObject);
        
        gameObject["__Button"] = this;
        
        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject = gameObject;
        /** @type {string} */
        this.spriteName = "";
        /** @type {any} */
        this.callback = () => {};
        
        /* START-USER-CTR-CODE */

        this.gameObject.on('pointerover', () => this.onOver())
        this.gameObject.on('pointerout', () => this.onOut())
        this.gameObject.on('pointerdown', () => this.onDown())

        /* END-USER-CTR-CODE */
    }
    
    /** @returns {Button} */
    static getComponent(gameObject) {
        return gameObject["__Button"];
    }
    
    /* START-USER-CODE */

    onOver() {
        this.gameObject.setFrame(`${this.spriteName}-hover`)
    }

    onOut() {
        this.gameObject.setFrame(this.spriteName)
    }

    onDown() {
        this.gameObject.setFrame(`${this.spriteName}-active`)
    }

    onUp() {
        this.gameObject.setFrame(this.spriteName)
        this.callback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Button
