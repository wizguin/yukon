import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class SpringPalace extends IglooScene {

    constructor() {
        super("SpringPalace");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 540]
        this.wallSpawn = [740, 140]
        this.wallBounds = [470, 1050]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("springpalace-igloo-pack", "assets/media/igloos/buildings/sprites/springpalace/springpalace-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "springpalace-igloo", "bg");

        // door
        const door = this.add.image(175.03652281259787, 492.9391286456702, "springpalace-igloo", "door");
        door.setOrigin(0.20568323939819524, 0.6733095540872878);

        // fg
        const fg = this.add.image(760, 977.2632550553474, "springpalace-igloo", "fg");
        fg.setOrigin(0.5, 1.0179825573493202);

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
