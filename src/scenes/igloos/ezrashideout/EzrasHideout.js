import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class EzrasHideout extends IglooScene {

    constructor() {
        super("EzrasHideout");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 740]
        this.wallSpawn = [760, 320]
        this.wallBounds = [470, 1050]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("ezrashideout-igloo-pack", "assets/media/igloos/buildings/sprites/ezrashideout/ezrashideout-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "ezrashideout-igloo", "bg-lower");

        // bg_upper
        this.add.image(760, 480, "ezrashideout-igloo", "bg-upper");

        // door
        const door = this.add.image(392.46917750651227, 374.994848909551, "ezrashideout-igloo", "door");
        door.setOrigin(0.5228235362270544, 0.8269032650367347);

        // fg
        const fg = this.add.image(760, 985.707708299273, "ezrashideout-igloo", "fg");
        fg.setOrigin(0.5, 1.0267788628117427);

        // lists
        const sort = [fg];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        new MoveTo(door);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
