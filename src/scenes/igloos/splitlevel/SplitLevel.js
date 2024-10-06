import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'


/* START OF COMPILED CODE */

export default class SplitLevel extends IglooScene {

    constructor() {
        super("SplitLevel");

        /** @type {Phaser.GameObjects.Layer} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            triggers: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [1080, 490]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("splitlevel-pack", "assets/media/igloos/buildings/sprites/splitlevel/splitlevel-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.layer();

        // floor_1
        const floor_1 = this.add.image(760, 630, "splitlevel", "floor");
        floor_1.setOrigin(0.5003861003861004, 0.5);
        floor.add(floor_1);

        // stairs_top
        const stairs_top = this.add.image(763, 667, "splitlevel", "stairs_top");
        stairs_top.setOrigin(0.5, 0.5035971223021583);
        floor.add(stairs_top);

        // door
        const door = this.add.image(246, 637, "splitlevel", "door");
        door.setOrigin(0.6, 0.8932038834951457);

        // wall_1
        const wall_1 = this.add.image(757, 380, "splitlevel", "wall_1");
        wall_1.setOrigin(0.5003615328994938, 0.5);

        // stairs
        this.add.image(777, 667, "splitlevel", "stairs");

        // wall_2
        const wall_2 = this.add.image(925, 811, "splitlevel", "wall_2");
        wall_2.setOrigin(0.5, 0.5015197568389058);

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
