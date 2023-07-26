/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import CardTable1 from "../../shared_prefabs/card/CardTable1";
import CardTable2 from "../../shared_prefabs/card/CardTable2";
import Zone from "../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Dojo extends RoomScene {

    constructor() {
        super("Dojo");

        /** @type {Phaser.GameObjects.Sprite} */
        this.sensei;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'door': () => this.triggerRoom(321, 780, 640),
            'sensei': () => this.triggerGame(951),
            'table200': () => {},
            'table201': () => {},
            'table202': () => {},
            'table203': () => {}
        }
        this.roomAnims = true

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

        // sensei
        const sensei = this.add.sprite(965, 373, "dojo", "sensei/sensei0001");
        sensei.setOrigin(0, 0);

        // tree
        const tree = this.add.image(1198, 451, "dojo", "tree");
        tree.setOrigin(0, 0);

        // instructionsPoster
        const instructionsPoster = this.add.image(631, 375, "dojo", "instructions_poster");
        instructionsPoster.setOrigin(0, 0);

        // instructions
        const instructions = this.add.image(647, 381, "dojo", "instructions");
        instructions.setOrigin(0, 0);

        // legendPoster
        const legendPoster = this.add.image(512, 375, "dojo", "legend_poster");
        legendPoster.setOrigin(0, 0);

        // legend
        const legend = this.add.image(534, 382, "dojo", "legend");
        legend.setOrigin(0, 0);

        // table203
        const table203 = new CardTable1(this, 1188, 813);
        this.add.existing(table203);
        table203.scaleX = -1;
        table203.scaleY = 1;

        // table202
        const table202 = new CardTable1(this, 358, 813);
        this.add.existing(table202);

        // table201
        const table201 = new CardTable2(this, 930, 706);
        this.add.existing(table201);
        table201.scaleX = -1;
        table201.scaleY = 1;

        // table200
        const table200 = new CardTable2(this, 616, 706);
        this.add.existing(table200);

        // zone
        const zone = this.add.rectangle(1096, 490, 246, 217);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 400;
        doorMoveTo.y = 570;

        // instructionsPoster (components)
        const instructionsPosterButton = new Button(instructionsPoster);
        instructionsPosterButton.spriteName = "instructions_poster";
        instructionsPosterButton.callback = () => this.interface.loadWidget('NinjaInstructions');
        instructionsPosterButton.activeFrame = false;

        // legendPoster (components)
        const legendPosterButton = new Button(legendPoster);
        legendPosterButton.spriteName = "legend_poster";
        legendPosterButton.callback = () => this.interface.loadWidget('NinjaBelts');
        legendPosterButton.activeFrame = false;

        // table203 (prefab fields)
        table203.moveToX = 1160;
        table203.moveToY = 750;

        // table202 (prefab fields)
        table202.moveToX = 380;
        table202.moveToY = 750;

        // table201 (prefab fields)
        table201.moveToX = 920;
        table201.moveToY = 650;

        // table200 (prefab fields)
        table200.moveToX = 620;
        table200.moveToY = 650;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onSenseiOver();
        zoneZone.hoverOutCallback = () => this.onSenseiOut();
        const zoneMoveTo = new MoveTo(zone);
        zoneMoveTo.x = 1096;
        zoneMoveTo.y = 640;

        this.sensei = sensei;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onSenseiOver() {
        this.sensei.play('sensei_over')
    }

    onSenseiOut() {
        this.sensei.play('sensei_out')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
