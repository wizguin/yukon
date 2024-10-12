import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class FishBowl extends IglooScene {

    constructor() {
        super("FishBowl");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 720]
        this.wallSpawn = [760, 330]
        this.wallBounds = [436, 1124]
        this.floorFrame = 9

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fishbowl-igloo-pack", "assets/media/igloos/buildings/sprites/fishbowl/fishbowl-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "fishbowl-igloo", "bg");

        // fg
        const fg = this.add.image(760, 983.89076785164, "fishbowl-igloo", "fg");
        fg.setOrigin(0.5, 1.024886216512125);

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
