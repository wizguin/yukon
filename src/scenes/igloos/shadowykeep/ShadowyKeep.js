import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class ShadowyKeep extends IglooScene {

    constructor() {
        super("ShadowyKeep");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 430]
        this.wallBounds = [4420, 1100]
        this.floorFrame = 8

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shadowykeep-igloo-pack", "assets/media/igloos/buildings/sprites/shadowykeep/shadowykeep-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_lower
        this.add.image(758, 639, "shadowykeep-igloo", "bg-lower");

        // floor
        const floor = this.add.image(760, 480, "shadowykeep-igloo", "bg-upper");

        // door
        const door = this.add.image(755, 643, "shadowykeep-igloo", "door");
        door.setOrigin(0.5052631578947369, 0.9666666666666667);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        new MoveTo(door);

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
