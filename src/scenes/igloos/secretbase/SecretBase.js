import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class SecretBase extends IglooScene {

    constructor() {
        super("SecretBase");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [690, 800]
        this.wallSpawn = [680, 150]
        this.wallBounds = [700, 980]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("secretbase-igloo-pack", "assets/media/igloos/buildings/sprites/secretbase/secretbase-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "secretbase-igloo", "bg");

        // door
        const door = this.add.image(325.6088772069406, 600.855949782962, "secretbase-igloo", "door");
        door.setOrigin(0.44981884232132413, 0.7537489823151257);

        // fg
        const fg = this.add.image(760, 966.1266806085654, "secretbase-igloo", "fg");
        fg.setOrigin(0.5, 1.0063819589672556);

        // lists
        const sort = [fg];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";;
        new MoveTo(door);

        this.floor = floor;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
