import RoomScene from '../RoomScene'

import { Button, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class DojoExt extends RoomScene {

    constructor() {
        super("DojoExt");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'map': () => this.interface.loadWidget('Map'),
            'dojo': () => this.triggerRoom(320, 400, 660),
            'dojohide': null
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojoext-pack", "assets/media/rooms/dojoext/dojoext-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-15, -6, "dojoext", "bg");
        bg.setOrigin(0, 0);

        // trees
        const trees = this.add.image(1364, 915, "dojoext", "trees");
        trees.setOrigin(0.518840579710145, 0.8611111111111112);

        // fence
        const fence = this.add.image(170, 920, "dojoext", "fence");
        fence.setOrigin(0.4491315136476427, 0.773109243697479);

        // puffles
        const puffles = this.add.image(786, 823, "dojoext", "puffles");
        puffles.setOrigin(0.49942196531791905, 0.47202797202797203);

        // dojo_door
        const dojo_door = this.add.image(682, 425, "dojoext", "dojo_door");
        dojo_door.setOrigin(0, 0);

        // ninja_door_locked
        const ninja_door_locked = this.add.image(221, 562, "dojoext", "ninja_door_locked0001");
        ninja_door_locked.setOrigin(0, 0);

        // door_top
        const door_top = this.add.image(689, 430, "dojoext", "door_top");
        door_top.setOrigin(0, 0);

        // tree
        const tree = this.add.image(311, 577, "dojoext", "tree");
        tree.setOrigin(0, 0);

        // lists
        const sort = [puffles, fence, trees];

        // dojo_door (components)
        const dojo_doorButton = new Button(dojo_door);
        dojo_doorButton.spriteName = "dojo_door";
        dojo_doorButton.activeFrame = false;
        const dojo_doorMoveTo = new MoveTo(dojo_door);
        dojo_doorMoveTo.x = 780;
        dojo_doorMoveTo.y = 610;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
