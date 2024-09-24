import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class SweetSwirl extends IglooScene {

    constructor() {
        super("SweetSwirl");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [720, 720]
        this.wallSpawn = [400, 340]
        this.wallBounds = [480, 940]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sweetswirl-igloo-pack", "assets/media/igloos/buildings/sprites/sweetswirl/sweetswirl-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "sweetswirl-igloo", "bg_lower");

        // door
        const door = this.add.image(215.72656106823746, 625.4397284611821, "sweetswirl-igloo", "door");
        door.setOrigin(0.6624402244165981, 0.705483141024683);

        // bg_upper
        this.add.image(760, 480, "sweetswirl-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 975.6472409848757, "sweetswirl-igloo", "fg");
        fg.setOrigin(0.5, 1.0162992093592456);

        // lists
        const sort = [fg];

        // door (components)
        new MoveTo(door);
        new Button(door);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
