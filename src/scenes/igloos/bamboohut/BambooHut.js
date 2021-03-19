import IglooScene from '../IglooScene'


/* START OF COMPILED CODE */

class BambooHut extends IglooScene {

    constructor() {
        super("BambooHut");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.mask;

        /* START-USER-CTR-CODE */

        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 4

        /* END-USER-CTR-CODE */
    }

    _preload() {

        this.load.pack("bamboohut-pack", "assets/media/igloos/buildings/sprites/bamboohut/bamboohut-pack.json");
    }

    _create() {

        // floor
        const floor = this.add.image(769, 691, "bamboohut", "floor");
        floor.setOrigin(0.5004468275245755, 0.5017421602787456);

        // mask
        const mask = this.add.image(767, 688, "bamboohut", "mask");
        mask.setOrigin(0.5004524886877828, 0.5);
        mask.visible = false;

        // door
        const door = this.add.image(424, 474, "bamboohut", "door");
        door.setOrigin(0.5054945054945055, 0.5);

        // wall
        const wall = this.add.image(760, 402, "bamboohut", "wall");
        wall.setOrigin(0.5004101722723544, 0.5);

        this.floor = floor;
        this.mask = mask;
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default BambooHut
