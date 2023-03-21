/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Dojo extends RoomScene {

    constructor() {
        super("Dojo");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'door': () => this.triggerRoom(321, 780, 640),
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojo-pack", "assets/media/rooms/dojo/dojo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-4, -2, "dojo", "bg");
        bg.setOrigin(0, 0);

        // door
        const door = this.add.image(358, 421, "dojo", "door");
        door.setOrigin(0, 0);

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 400;
        doorMoveTo.y = 570;

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
