import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class IcePalace extends IglooScene {

    constructor() {
        super("IcePalace");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("icepalace-igloo-pack", "assets/media/igloos/buildings/sprites/icepalace/icepalace-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "icepalace-igloo", "bg-lower");

        // door
        const door = this.add.image(124.60876175959251, 704.1420696882822, "icepalace-igloo", "door");
        door.setOrigin(0.5084550244387849, 0.753290944889556);

        // bg_upper
        this.add.image(760, 480, "icepalace-igloo", "bg-upper");

        // fg
        const fg = this.add.image(760, 1011.7065039428029, "icepalace-igloo", "fg");
        fg.setOrigin(0.5, 1.0538609416070863);

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
