import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'


/* START OF COMPILED CODE */

export default class BigCandy extends IglooScene {

    constructor() {
        super("BigCandy");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            triggers: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [720, 720]
        this.wallSpawn = [720, 260]
        this.wallBounds = [350, 1200]
        this.floorFrame = 2

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("bigcandy-pack", "assets/media/igloos/buildings/sprites/bigcandy/bigcandy-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 636, "bigcandy", "floor");
        floor.setOrigin(0.5003940110323088, 0.5013477088948787);

        // door
        const door = this.add.image(250, 563, "bigcandy", "door");
        door.setOrigin(0.5636363636363636, 0.912621359223301);

        // wall_1
        const wall_1 = this.add.image(321, 389, "bigcandy", "wall_1");
        wall_1.setOrigin(0.5010266940451745, 0.5);

        // wall_2
        const wall_2 = this.add.image(762, 295, "bigcandy", "wall_2");
        wall_2.setOrigin(0.5008695652173913, 0.5);

        // wall_3
        this.add.image(1210, 401, "bigcandy", "wall_3");

        // window
        const window = this.add.image(1072, 485, "bigcandy", "window");
        window.setOrigin(0.5014164305949008, 0.5);

        // window_1
        const window_1 = this.add.image(529, 481, "bigcandy", "window");
        window_1.setOrigin(0.5014164305949008, 0.5);
        window_1.flipX = true;

        // chimney
        const chimney = this.add.image(1127, 133, "bigcandy", "chimney");
        chimney.setOrigin(0.5050505050505051, 0.5);

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
