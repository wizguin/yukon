import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class BrownPuffleTreeHouse extends IglooScene {

    constructor() {
        super("BrownPuffleTreeHouse");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [580, 634]
        this.wallSpawn = [1040, 250]
        this.wallBounds = [460, 1060]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("brownpuffletreehouse-igloo-pack", "assets/media/igloos/buildings/sprites/brownpuffletreehouse/brownpuffletreehouse-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "brownpuffletreehouse-igloo", "bg");

        // fg
        const fg = this.add.image(760, 968.0458933536619, "brownpuffletreehouse-igloo", "fg");
        fg.setOrigin(0.5, 1.0083811462245094);

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
