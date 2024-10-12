import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class GreenPuffleTreeHouse extends IglooScene {

    constructor() {
        super("GreenPuffleTreeHouse");

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

        this.load.pack("greenpuffletreehouse-igloo-pack", "assets/media/igloos/buildings/sprites/greenpuffletreehouse/greenpuffletreehouse-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        this.add.image(760, 480, "greenpuffletreehouse-igloo", "bg");

        // fg
        const fg = this.add.image(760, 975.6472409848757, "greenpuffletreehouse-igloo", "fg");
        fg.setOrigin(0.5, 1.0162992093592456);

        // lists
        const sort = [fg];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
