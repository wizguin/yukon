
// You can write more code here

/* START OF COMPILED CODE */

class SimpleButton {
    
    constructor(gameObject) {
        gameObject["__SimpleButton"] = this;
        
        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject = gameObject;
        /** @type {any} */
        this.callback = () => {};
        
        /* START-USER-CTR-CODE */

        this.gameObject.setInteractive({ cursor: 'pointer' })

        this.gameObject.on('pointerup', () => this.onUp())

        /* END-USER-CTR-CODE */
    }
    
    /** @returns {SimpleButton} */
    static getComponent(gameObject) {
        return gameObject["__SimpleButton"];
    }
    
    /* START-USER-CODE */

    onUp() {
        this.callback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default SimpleButton
