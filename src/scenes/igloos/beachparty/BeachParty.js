import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class BeachParty extends IglooScene {

    constructor() {
        super("BeachParty");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.water_anim_lower;
        /** @type {Phaser.GameObjects.Sprite} */
        this.water_anim_upper;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [670, 440]
        this.wallSpawn = [870, 70]
        this.wallBounds = [838, 904]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beachparty-igloo-pack", "assets/media/igloos/buildings/sprites/beachparty/beachparty-igloo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // floor
        const floor = this.add.image(760, 480, "beachparty-igloo", "bg-lower");

        // bg_middle
        this.add.image(760, 480, "beachparty-igloo", "bg-middle");

        // door
        const door = this.add.image(229, 330.95607374795964, "beachparty-igloo", "door");
        door.setOrigin(0.5, 0.7932161966612257);

        // bg_upper
        this.add.image(760, 480, "beachparty-igloo", "bg-upper");

        // water_anim_lower
        const water_anim_lower = this.add.sprite(1367, 661, "beachparty-igloo", "water-anim-lower0001");
        water_anim_lower.play("beachparty-water-anim-lower");

        // water_anim_upper
        const water_anim_upper = this.add.sprite(1334, 340, "beachparty-igloo", "water-anim-upper0001");
        water_anim_upper.play("beachparty-water-anim-lower");

        // fg
        const fg = this.add.image(760, 980.0929316408556, "beachparty-igloo", "fg");
        fg.setOrigin(0.5, 1.0209301371258912);

        // lists
        const sort = [fg];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        new MoveTo(door);

        this.floor = floor;
        this.water_anim_lower = water_anim_lower;
        this.water_anim_upper = water_anim_upper;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.water_anim_lower.play('beachparty-water-anim-lower')
        this.water_anim_upper.play('beachparty-water-anim-upper')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
