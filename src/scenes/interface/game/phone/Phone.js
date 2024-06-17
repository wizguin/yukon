/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import DraggableContainer from "../../../components/DraggableContainer";
import Button from "../../../components/Button";
import Animation from "../../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Phone extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // scroll
        const scroll = scene.add.image(-91, -45, "main", "phone/scroll0001");
        this.add(scroll);

        // bg
        const bg = scene.add.image(0, 0, "main", "phone/bg");
        bg.setOrigin(0.5018867924528302, 0.5009523809523809);
        this.add(bg);

        // hq
        const hq = scene.add.image(0, 121, "main", "phone/button");
        this.add(hq);

        // teleport
        const teleport = scene.add.image(0, 37, "main", "phone/button");
        this.add(teleport);

        // hqText
        const hqText = scene.add.text(0, 41, "", {});
        hqText.setOrigin(0.5, 0.5);
        hqText.text = "Teleport";
        hqText.setStyle({ "align": "center", "fixedWidth":160,"fontFamily": "Arial Narrow", "fontSize": "28px", "fontStyle": "bold" });
        this.add(hqText);

        // teleportText
        const teleportText = scene.add.text(0, 125, "", {});
        teleportText.setOrigin(0.5, 0.5);
        teleportText.text = "Visit HQ";
        teleportText.setStyle({ "align": "center", "fixedWidth":160,"fontFamily": "Arial Narrow", "fontSize": "28px", "fontStyle": "bold" });
        this.add(teleportText);

        // light
        const light = scene.add.sprite(45, -144, "main", "phone/light/light0001");
        light.setOrigin(0.5294117647058824, 0.5);
        this.add(light);

        // closeButton
        const closeButton = scene.add.image(94, -123, "main", "phone/close_button");
        this.add(closeButton);

        // scrollDown
        const scrollDown = scene.add.image(-153, -4, "main", "phone/scroll_button");
        scrollDown.setInteractive(new Phaser.Geom.Rectangle(10, 0, 36, 81), Phaser.Geom.Rectangle.Contains);
        scrollDown.setOrigin(0.5087719298245614, 0.5);
        scrollDown.flipY = true;
        this.add(scrollDown);

        // scrollUp
        const scrollUp = scene.add.image(-153, -87, "main", "phone/scroll_button");
        scrollUp.setInteractive(new Phaser.Geom.Rectangle(10, 0, 36, 81), Phaser.Geom.Rectangle.Contains);
        scrollUp.setOrigin(0.5087719298245614, 0.5);
        this.add(scrollUp);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = bg;

        // hq (components)
        const hqButton = new Button(hq);
        hqButton.spriteName = "phone/button";
        hqButton.callback = () => this.onHqClick();

        // teleport (components)
        const teleportButton = new Button(teleport);
        teleportButton.spriteName = "phone/button";
        teleportButton.callback = () => this.onTeleportClick();

        // light (components)
        const lightAnimation = new Animation(light);
        lightAnimation.key = "phone/light/light";
        lightAnimation.end = 648;

        // closeButton (components)
        const closeButtonButton = new Button(closeButton);
        closeButtonButton.spriteName = "phone/close_button";
        closeButtonButton.callback = () => this.close();

        // scrollDown (components)
        const scrollDownButton = new Button(scrollDown);
        scrollDownButton.spriteName = "phone/scroll_button";
        scrollDownButton.activeFrame = false;

        // scrollUp (components)
        const scrollUpButton = new Button(scrollUp);
        scrollUpButton.spriteName = "phone/scroll_button";
        scrollUpButton.activeFrame = false;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onTeleportClick() {

    }

    onHqClick() {
        this.joinRoom(803)
    }

    joinRoom(roomId) {
        if (!(roomId in this.crumbs.scenes.rooms)) return

        const room = this.crumbs.scenes.rooms[roomId]

        if (this.world.room.key !== room.key) {
            this.world.client.sendJoinRoom(roomId, room.key, room.x, room.y)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
