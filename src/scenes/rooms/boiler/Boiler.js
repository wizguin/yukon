/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import Animation from "../../components/Animation";
import SimpleButton from "../../components/SimpleButton";
import ShowHint from "../../components/ShowHint";
import Zone from "../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Boiler extends RoomScene {

    constructor() {
        super("Boiler");

        /** @type {Phaser.GameObjects.Image} */
        this.archives_icon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cab;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            cave: () => this.triggerRoom(806, 328, 646),
            dance: () => this.triggerRoom(120, 980, 560)
        }

        this.music = '6'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("boiler-pack", "assets/media/rooms/boiler/boiler-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(759, 477, "boiler", "bg");

        // door
        const door = this.add.image(591, 364, "boiler", "door");

        // steam
        const steam = this.add.sprite(262, 195, "boiler", "steam0001");

        // archives_icon
        const archives_icon = this.add.image(1428, 854, "boiler", "archives_icon");

        // cab5
        this.add.image(940, 541, "boiler", "cab0001");

        // cab4
        this.add.image(824, 542, "boiler", "cab0001");

        // cab3
        this.add.image(943, 467, "boiler", "cab0001");

        // cab2
        this.add.image(827, 467, "boiler", "cab0001");

        // cab1
        this.add.image(946, 392, "boiler", "cab0001");

        // cab
        const cab = this.add.sprite(830, 392, "boiler", "cab0001");

        // zone
        const zone = this.add.rectangle(965.9, 1.1, 118, 536);
        zone.setOrigin(0, 0);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 600;
        doorMoveTo.y = 554;

        // steam (components)
        const steamAnimation = new Animation(steam);
        steamAnimation.key = "steam";
        steamAnimation.end = 5;

        // archives_icon (components)
        const archives_iconButton = new Button(archives_icon);
        archives_iconButton.spriteName = "archives_icon";
        archives_iconButton.callback = () => this.onArchivesClick();
        archives_iconButton.activeFrame = false;

        // cab (components)
        const cabSimpleButton = new SimpleButton(cab);
        cabSimpleButton.hoverCallback = () => this.onCabOver();
        cabSimpleButton.hoverOutCallback = () => this.onCabOut();
        cabSimpleButton.callback = () => this.onArchivesClick();
        cabSimpleButton.pixelPerfect = true;
        const cabShowHint = new ShowHint(cab);
        cabShowHint.text = "archives_hint";

        // zone (components)
        new Zone(zone);
        const zoneMoveTo = new MoveTo(zone);
        zoneMoveTo.x = 1042;
        zoneMoveTo.y = 560;

        this.archives_icon = archives_icon;
        this.cab = cab;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.archives_icon.depth = 1000
    }

    onCabOver() {
        this.cab.play('boiler/cab_in')
    }

    onCabOut() {
        this.cab.play('boiler/cab_out')
    }

    onArchivesClick() {

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */