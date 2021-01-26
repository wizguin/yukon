import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

class NineSlice extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        gameObject["__NineSlice"] = this;

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject = gameObject;
        /** @type {{key:string,frame?:string|number}} */
        this.texture = {"key":"prompt","frame":"window"};
        /** @type {number} */
        this.corner = 10;

        /* START-USER-CTR-CODE */

        gameObject.visible = false

        /* END-USER-CTR-CODE */
    }

    /** @returns {NineSlice} */
    static getComponent(gameObject) {
        return gameObject["__NineSlice"];
    }

    /* START-USER-CODE */

    start() {
        this.sliced = this.scene.add.nineslice(
            this.gameObject.x, this.gameObject.y,
            this.gameObject.width, this.gameObject.height,
            this.texture,
            this.corner
        )

        this.sliced.setOrigin(this.gameObject.originX, this.gameObject.originY)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default NineSlice
