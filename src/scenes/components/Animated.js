import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

class Animated extends EventComponent {
    
    constructor(gameObject) {
        super(gameObject);
        
        gameObject["__Animated"] = this;
        
        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject = gameObject;
        /** @type {string} */
        this.animation = "";
        /** @type {boolean} */
        this.onHover = false;
        
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    
    /** @returns {Animated} */
    static getComponent(gameObject) {
        return gameObject["__Animated"];
    }
    
    /* START-USER-CODE */

    start() {
        if (this.onHover) {
            this.gameObject.on('pointerover', () => { this.onOver() })
            this.gameObject.on('pointerout', () => { this.onOut() })

        } else {
            this.gameObject.play(this.animation)
        }
    }

    onOver() {
        this.gameObject.play(this.animation)
    }

    onOut() {
        this.gameObject.anims.stop()
        this.gameObject.setFrame(this.animation)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Animated
