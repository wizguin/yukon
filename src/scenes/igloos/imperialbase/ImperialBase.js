import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class ImperialBase extends IglooScene {

    constructor() {
        super("ImperialBase");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [748, 444]
        this.wallSpawn = [760, 170]
        this.wallBounds = [300, 1230]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("imperialbase-igloo-pack", "assets/media/igloos/buildings/sprites/imperialbase/imperialbase-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "imperialbase-igloo", "bg");

        // door
        const door = this.add.image(1463.5797817763448, 818.2601171409206, "imperialbase-igloo", "door");
        door.setOrigin(0.9194124436263208, 0.8260854983351174);

        // fg
        const fg = this.add.image(760, 480, "imperialbase-igloo", "fg");

        // lists
        const sort = [fg];

        // door (components)
        new Button(door);
        new MoveTo(door);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
