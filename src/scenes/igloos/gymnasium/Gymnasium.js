import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Gymnasium extends IglooScene {

    constructor() {
        super("Gymnasium");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 430]
        this.wallBounds = [340, 1200]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("gymnasium-igloo-pack", "assets/media/igloos/buildings/sprites/gymnasium/gymnasium-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        this.add.image(760, 480, "gymnasium-igloo", "bg");

        // fg
        const fg = this.add.image(760, 973.6767658005932, "gymnasium-igloo", "fg");
        fg.setOrigin(0.5, 1.0142466310422846);

        // door
        const door = this.add.image(204.67768430732596, 729.6797376891021, "gymnasium-igloo", "door");
        door.setOrigin(0.5786803602221623, 0.7065359455831759);

        // lists
        const sort = [fg];

        // door (components)
        new Button(door);
        new MoveTo(door);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
