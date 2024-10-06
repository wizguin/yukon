/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import DraggableContainer from "../../../components/DraggableContainer";
import Button from "../../../components/Button";
import Animation from "../../../components/Animation";
import Zone from "../../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Phone extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gadget;
        /** @type {Phaser.GameObjects.Sprite} */
        this.scroll;
        /** @type {Phaser.GameObjects.Text} */
        this.screenText;


        // gadget
        const gadget = scene.add.sprite(121, -24, "main", "phone/comb/comb0001");
        gadget.setOrigin(0.5010615711252654, 0.5);
        this.add(gadget);

        // scroll
        const scroll = scene.add.sprite(-91, -45, "main", "phone/scroll0001");
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
        const hqText = scene.add.text(0, 125, "", {});
        hqText.setOrigin(0.5, 0.5);
        hqText.text = "Visit HQ";
        hqText.setStyle({ "align": "center", "fixedWidth":160,"fontFamily": "Arial Narrow", "fontSize": "28px", "fontStyle": "bold" });
        this.add(hqText);

        // teleportText
        const teleportText = scene.add.text(0, 41, "", {});
        teleportText.setOrigin(0.5, 0.5);
        teleportText.text = "Teleport";
        teleportText.setStyle({ "align": "center", "fixedWidth":160,"fontFamily": "Arial Narrow", "fontSize": "28px", "fontStyle": "bold" });
        this.add(teleportText);

        // closeButton
        const closeButton = scene.add.image(94, -123, "main", "phone/close_button");
        this.add(closeButton);

        // light
        const light = scene.add.sprite(45, -144, "main", "phone/light/light0001");
        light.setOrigin(0.5294117647058824, 0.5);
        this.add(light);

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

        // screenText
        const screenText = scene.add.text(0, -48, "", {});
        screenText.scaleX = 0.66;
        screenText.setOrigin(0.5, 0.5);
        screenText.text = "the town";
        screenText.setStyle({ "align": "center", "color": "#000", "fixedWidth":300,"fontFamily": "CPLCD", "fontSize": "48px" });
        this.add(screenText);

        // screenButton
        const screenButton = scene.add.rectangle(0, -55, 208, 64);
        screenButton.alpha = 0.5;
        screenButton.isFilled = true;
        screenButton.fillColor = 65280;
        this.add(screenButton);

        // secretButton
        const secretButton = scene.add.rectangle(45, -143, 32, 32);
        secretButton.alpha = 0.5;
        secretButton.isFilled = true;
        secretButton.fillColor = 65280;
        this.add(secretButton);

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

        // closeButton (components)
        const closeButtonButton = new Button(closeButton);
        closeButtonButton.spriteName = "phone/close_button";
        closeButtonButton.callback = () => this.close();

        // light (components)
        const lightAnimation = new Animation(light);
        lightAnimation.key = "phone/light/light";
        lightAnimation.end = 648;

        // scrollDown (components)
        const scrollDownButton = new Button(scrollDown);
        scrollDownButton.spriteName = "phone/scroll_button";
        scrollDownButton.callback = () => this.onScrollDownClick();
        scrollDownButton.activeFrame = false;

        // scrollUp (components)
        const scrollUpButton = new Button(scrollUp);
        scrollUpButton.spriteName = "phone/scroll_button";
        scrollUpButton.callback = () => this.onScrollUpClick();
        scrollUpButton.activeFrame = false;

        // screenButton (components)
        const screenButtonZone = new Zone(screenButton);
        screenButtonZone.callback = () => this.onScrollUpClick();

        // secretButton (components)
        const secretButtonZone = new Zone(secretButton);
        secretButtonZone.callback = () => this.onSecretClick();

        this.gadget = gadget;
        this.scroll = scroll;
        this.screenText = screenText;

        /* START-USER-CTR-CODE */

        this.gadgetAnims = ['phone_comb', 'phone_wrench', 'phone_scissors']
        this.gadgetInitialFrame = this.gadget.frame.name

        this.currentGadget = 0
        this.maxGadget = this.gadgetAnims.length

        this.currentLocation = 0
        this.maxLocation = this.crumbs.phone_locations.length

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.updateLocation(0)

        // Make sure any previous gadget animations are removed
        if (!this.visible) {
            this.gadget.stop()
            this.gadget.setFrame(this.gadgetInitialFrame)

            this.currentGadget = 0
        }

        super.show()
    }

    get currentLocationData() {
        return this.crumbs.phone_locations[this.currentLocation]
    }

    onScrollUpClick() {
        this.scroll.play('phone_scroll_up')

        const location = (this.currentLocation + 1) % this.maxLocation

        this.updateLocation(location)
    }

    onScrollDownClick() {
        this.scroll.play('phone_scroll_down')

        const location = (this.currentLocation - 1 + this.maxLocation) % this.maxLocation

        this.updateLocation(location)
    }

    onTeleportClick() {
        this.joinRoom(this.currentLocationData.id)
    }

    onHqClick() {
        this.joinRoom(803)
    }

    onSecretClick() {
        this.gadget.play(this.gadgetAnims[this.currentGadget])

        this.currentGadget = (this.currentGadget + 1) % this.maxGadget
    }

    updateLocation(location) {
        this.currentLocation = location
        this.screenText.text = this.currentLocationData.name
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
