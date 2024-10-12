import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Cave extends IglooScene {

    constructor() {
        super("Cave");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            triggers: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 760]
        this.wallSpawn = [760, 260]
        this.wallBounds = [250, 1200]
        this.floorFrame = 2

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cave-igloo-pack", "assets/media/igloos/buildings/sprites/cave/cave-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "cave-igloo", "bg-lower");

        // bg_upper
        this.add.image(760, 480, "cave-igloo", "bg-upper");

        // door
        const door = this.add.image(236.2735848853143, 535.8254715251716, "cave-igloo", "door");
        door.setOrigin(0.584305317139221, 0.8826479200251047);

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
