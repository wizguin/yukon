/* START OF COMPILED CODE */

import BaseImage from "../../base/BaseImage";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class GoToButton extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 760, y ?? 480, texture || "mail", frame ?? "goto_button");

        /** @type {number} */
        this.roomId = 0;


        this.setOrigin(0.5031847133757962, 0.5);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "goto_button";
        thisButton.callback = () => this.onClick();
        thisButton.activeFrame = false;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onClick() {
        const room = this.crumbs.scenes.rooms[this.roomId]

        if (this.world.room.key !== room.key) {
            this.world.client.sendJoinRoom(this.roomId, room.key, room.x, room.y)
        }

        this.interface.main.mail.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
