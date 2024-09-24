import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Ship extends IglooScene {

    constructor() {
        super("Ship");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [768, 720]
        this.wallSpawn = [756, 436]
        this.wallBounds = [390, 1100]
        this.floorFrame = 7

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("ship-igloo-pack", "assets/media/igloos/buildings/sprites/ship/ship-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "ship-igloo", "bg");

        // fg
        const fg = this.add.image(760, 967.6529306464103, "ship-igloo", "fg");
        fg.setOrigin(0.5, 1.0079718027566773);

        // lists
        const sort = [fg];

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
