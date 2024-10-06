import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class LogCabin extends IglooScene {

    constructor() {
        super("LogCabin");

        /** @type {Phaser.GameObjects.Layer} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            triggers: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 728]
        this.wallSpawn = [760, 450]
        this.wallBounds = [490, 1030]
        this.floorFrame = 5

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("logcabin-pack", "assets/media/igloos/buildings/sprites/logcabin/logcabin-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.layer();

        // floor_1
        const floor_1 = this.add.image(760, 703, "logcabin", "floor_1");
        floor.add(floor_1);

        // floor_2
        const floor_2 = this.add.image(748, 838, "logcabin", "floor_2");
        floor_2.setOrigin(0.5, 0.5070422535211268);
        floor.add(floor_2);

        // wall
        const wall = this.add.image(760, 426, "logcabin", "wall");
        wall.setOrigin(0.5003441156228493, 0.5006896551724138);

        // door
        const door = this.add.image(418, 666, "logcabin", "door");
        door.setOrigin(0.4594594594594595, 0.9302325581395349);

        // door (components)
        new MoveTo(door);
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;

        this.floor = floor;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
