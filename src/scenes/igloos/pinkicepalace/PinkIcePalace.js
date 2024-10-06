import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class PinkIcePalace extends IglooScene {

    constructor() {
        super("PinkIcePalace");

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

        this.load.pack("pinkicepalace-igloo-pack", "assets/media/igloos/buildings/sprites/pinkicepalace/pinkicepalace-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_lower
        this.add.image(760, 634, "pinkicepalace-igloo", "bg-lower");

        // floor
        const floor = this.add.image(760, 480, "pinkicepalace-igloo", "bg-upper");

        // door
        const door = this.add.image(761, 644, "pinkicepalace-igloo", "door");
        door.setOrigin(0.5368421052631579, 0.9769230769230769);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        new MoveTo(door);

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
