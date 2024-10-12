import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class TreeHouse extends IglooScene {

    constructor() {
        super("TreeHouse");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [670, 570]
        this.wallSpawn = [650, 310]
        this.wallBounds = [280, 1250]
        this.floorFrame = 7

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("treehouse-igloo-pack", "assets/media/igloos/buildings/sprites/treehouse/treehouse-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "treehouse-igloo", "bg-lower");

        // bg_upper
        this.add.image(760, 480, "treehouse-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 966.8674310998953, "treehouse-igloo", "fg");
        fg.setOrigin(0.5, 1.007153574062391);

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
