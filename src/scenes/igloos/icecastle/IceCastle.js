import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class IceCastle extends IglooScene {

    constructor() {
        super("IceCastle");

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

        this.load.pack("icecastle-igloo-pack", "assets/media/igloos/buildings/sprites/icecastle/icecastle-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_lower
        this.add.image(760, 634, "icecastle-igloo", "bg-lower");

        // door
        const door = this.add.image(758.8427484645825, 639.3832146853995, "icecastle-igloo", "door");
        door.setOrigin(0.5202249919188555, 0.9532472547969204);

        // floor
        const floor = this.add.image(760, 480, "icecastle-igloo", "bg-upper");

        // fg
        this.add.image(760, 480, "icecastle-igloo", "fg");

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";;
        new MoveTo(door);

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
