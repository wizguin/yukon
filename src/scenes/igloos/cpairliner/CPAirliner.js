import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class CPAirliner extends IglooScene {

    constructor() {
        super("CPAirliner");

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

        this.load.pack("cpairliner-igloo-pack", "assets/media/igloos/buildings/sprites/cpairliner/cpairliner-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "cpairliner-igloo", "bg");

        // fg
        const fg = this.add.image(760, 1010.2892524515606, "cpairliner-igloo", "fg");
        fg.setOrigin(0.5, 1.0523846379703756);

        // door
        const door = this.add.image(150.28874992305697, 559.7271871729922, "cpairliner-igloo", "door");
        door.setOrigin(0.36621742656648976, 0.7701969928361644);

        // door_1
        const door_1 = this.add.image(409.87744411491667, 330.156191757789, "cpairliner-igloo", "door2");
        door_1.setOrigin(0.4912394456197931, 1.006144588526023);

        // lists
        const sort = [fg];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        new MoveTo(door);

        // door_1 (components)
        const door_1Button = new Button(door_1);
        door_1Button.spriteName = "door2";
        door_1Button.activeFrame = false;
        new MoveTo(door_1);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
