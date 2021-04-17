import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

class Animation extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        gameObject["__Animation"] = this;

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject = gameObject;
        /** @type {string} */
        this.key = "";
        /** @type {number} */
        this.start = 1;
        /** @type {number} */
        this.end = 1;
        /** @type {number} */
        this.frameRate = 24;
        /** @type {number} */
        this.repeat = -1;
        /** @type {number} */
        this.repeatDelay = 0;
        /** @type {boolean} */
        this.onHover = false;

        /* START-USER-CTR-CODE */

        this.scene = gameObject.scene
        this.atlas = gameObject.texture.key
        this.initialFrame = gameObject.frame.name
        this.animation

        /* END-USER-CTR-CODE */
    }

    /** @returns {Animation} */
    static getComponent(gameObject) {
        return gameObject["__Animation"];
    }

    /* START-USER-CODE */

    start() {
        this.animation = this.createAnim()

        if (this.onHover) {
            this.gameObject.on('pointerover', () => this.onOver())
            this.gameObject.on('pointerout', () => this.onOut())
        } else {
            this.gameObject.play(this.animation)
        }
    }

    createAnim() {
        // If animation already exists
        if (this.scene.anims.exists(this.key)) {
            return this.scene.anims.get(this.key)
        }

        // Create animation
        return this.scene.anims.create({
            key: this.key,
            frames: this.scene.anims.generateFrameNames(this.atlas, {
                prefix: `${this.key}`,
                start: this.start,
                end: this.end,
                zeroPad: 4
            }),
            frameRate: this.frameRate,
            repeat: this.repeat,
            repeatDelay: this.repeatDelay
        })
    }

    onOver() {
        this.gameObject.play(this.animation)
    }

    onOut() {
        this.gameObject.anims.stop()
        this.gameObject.setFrame(this.initialFrame)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Animation
