import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Shipwreck extends IglooScene {

    constructor() {
        super("Shipwreck");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 580]
        this.wallSpawn = [840, 260]
        this.wallBounds = [580, 1000]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shipwreck-igloo-pack", "assets/media/igloos/buildings/sprites/shipwreck/shipwreck-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "shipwreck-igloo", "bg");

        // fg
        const fg = this.add.image(760, 975.6472409848757, "shipwreck-igloo", "fg");
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
