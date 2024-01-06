/* START OF COMPILED CODE */

import BaseImage from "../../base/BaseImage";
/* START-USER-IMPORTS */

import Button from '@scenes/components/Button'

/* END-USER-IMPORTS */

export default class GoToButton extends BaseImage {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 760, y ?? 480, texture || "mail", frame ?? "goto_button");

        /** @type {number} */
        this.roomId = 0;


        this.setOrigin(0.5031847133757962, 0.5);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    enableInput() {
        const component = new Button(this)

        component.spriteName = 'goto_button'
        component.callback = () => this.onClick()
        component.activeFrame = false
    }

    onClick() {
        if (this.roomId in this.crumbs.scenes.rooms) {
            const room = this.crumbs.scenes.rooms[this.roomId]

            if (this.world.room.key !== room.key) {
                this.world.client.sendJoinRoom(this.roomId, room.key, room.x, room.y)
            }
        }

       this.interface.main.mail.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
