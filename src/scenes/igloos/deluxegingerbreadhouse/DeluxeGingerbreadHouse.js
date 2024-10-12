import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class DeluxeGingerbreadHouse extends IglooScene {

    constructor() {
        super("DeluxeGingerbreadHouse");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [1000, 686]
        this.wallSpawn = [654, 440]
        this.wallBounds = [440, 1054]
        this.floorFrame = 4

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("deluxegingerbreadhouse-igloo-pack", "assets/media/igloos/buildings/sprites/deluxegingerbreadhouse/deluxegingerbreadhouse-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "deluxegingerbreadhouse-igloo", "bg-lower");

        // door
        const door = this.add.image(374.1365051269531, 691.4832763671875, "deluxegingerbreadhouse-igloo", "door");
        door.setOrigin(0.6910340037940098, 0.8985403365857759);

        // bg_upper
        this.add.image(760, 480, "deluxegingerbreadhouse-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 971.4395405059269, "deluxegingerbreadhouse-igloo", "fg");
        fg.setOrigin(0.5, 1.0119161880270071);

        // lists
        const sort = [fg];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        new MoveTo(door);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
