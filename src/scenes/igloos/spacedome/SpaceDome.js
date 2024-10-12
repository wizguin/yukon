import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class SpaceDome extends IglooScene {

    constructor() {
        super("SpaceDome");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [700, 620]
        this.wallSpawn = [380, 210]
        this.wallBounds = [490, 1030]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("spacedome-igloo-pack", "assets/media/igloos/buildings/sprites/spacedome/spacedome-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "spacedome-igloo", "bg-lower");

        // door
        const door = this.add.image(294, 417, "spacedome-igloo", "door");
        door.setOrigin(0.5541101037566035, 0.8394827491226905);

        // bg_upper
        this.add.image(760, 480, "spacedome-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 964.9881605335881, "spacedome-igloo", "fg");
        fg.setOrigin(0.5, 1.005196000555821);

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
