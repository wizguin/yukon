import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

export default class NineSlice extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject;
        /** @type {{key:string,frame?:string|number}} */
        this.texture = {"key":"prompt","frame":"window"};
        /** @type {number} */
        this.corner = 10;


        this.gameObject = gameObject;
        gameObject["__NineSlice"] = this;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {NineSlice} */
    static getComponent(gameObject) {
        return gameObject["__NineSlice"];
    }


    /* START-USER-CODE */

    start() {
        if (this.gameObject.visible == false) return

        let sliced = this.scene.add.nineslice(
            this.gameObject.x, this.gameObject.y,
            this.gameObject.width, this.gameObject.height,
            this.texture,
            this.corner
        )

        sliced.setOrigin(this.gameObject.originX, this.gameObject.originY)

        // Set correct position inside container
        if (this.gameObject.parentContainer) {
            let parent = this.gameObject.parentContainer
            let index = parent.getIndex(this.gameObject)

            parent.addAt(sliced, index)
        }

        this.gameObject.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
