import IglooScene from '../IglooScene'


/* START OF COMPILED CODE */

export default class DeluxeBlue extends IglooScene {

    constructor() {
        super("DeluxeBlue");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [720, 720]
        this.wallSpawn = [720, 260]
        this.wallBounds = [350, 1200]
        this.floorFrame = 2

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("deluxeblue-pack", "assets/media/igloos/buildings/sprites/deluxeblue/deluxeblue-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 636, "deluxeblue", "floor");
        floor.setOrigin(0.5003940110323088, 0.5013477088948787);

        // door
        this.add.image(243, 478, "deluxeblue", "door");

        // wall_1
        const wall_1 = this.add.image(321, 389, "deluxeblue", "wall_1");
        wall_1.setOrigin(0.5010266940451745, 0.5);

        // wall_2
        const wall_2 = this.add.image(762, 295, "deluxeblue", "wall_2");
        wall_2.setOrigin(0.5008695652173913, 0.5);

        // wall_3
        this.add.image(1210, 401, "deluxeblue", "wall_3");

        // window
        const window = this.add.image(1072, 485, "deluxeblue", "window");
        window.setOrigin(0.5014164305949008, 0.5);

        // window_1
        const window_1 = this.add.image(529, 481, "deluxeblue", "window");
        window_1.setOrigin(0.5014164305949008, 0.5);
        window_1.flipX = true;

        // chimney
        const chimney = this.add.image(1127, 133, "deluxeblue", "chimney");
        chimney.setOrigin(0.5050505050505051, 0.5);

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
