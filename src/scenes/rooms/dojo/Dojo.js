/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import Waddle203 from "./waddle/Waddle203";
import Waddle202 from "./waddle/Waddle202";
import Waddle201 from "./waddle/Waddle201";
import Waddle200 from "./waddle/Waddle200";
import Zone from "../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Dojo extends RoomScene {

    constructor() {
        super("Dojo");

        /** @type {Phaser.GameObjects.Sprite} */
        this.sensei;
        /** @type {Waddle203} */
        this.waddle203;
        /** @type {Waddle202} */
        this.waddle202;
        /** @type {Waddle201} */
        this.waddle201;
        /** @type {Waddle200} */
        this.waddle200;
        /** @type {Phaser.GameObjects.Image} */
        this.cards;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cauldronSmoke;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'door': () => this.triggerRoom(321, 780, 640),
            'sensei': () => this.triggerGame(951),
            'table200': () => this.triggerMat(200),
            'table201': () => this.triggerMat(201),
            'table202': () => this.triggerMat(202),
            'table203': () => this.triggerMat(203)
        }

        this.music = 21

        this.waddles = {}

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
        const sensei = this.add.sprite(973, 372, "dojo", "sensei/sensei0001");
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

        // waddle203
        const waddle203 = new Waddle203(this, 1188, 813);
        this.add.existing(waddle203);

        // waddle202
        const waddle202 = new Waddle202(this, 358, 813);
        this.add.existing(waddle202);

        // waddle201
        const waddle201 = new Waddle201(this, 930, 706);
        this.add.existing(waddle201);

        // waddle200
        const waddle200 = new Waddle200(this, 616, 706);
        this.add.existing(waddle200);

        // zone
        const zone = this.add.rectangle(1096, 490, 246, 217);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // cards
        const cards = this.add.image(1342, 819, "dojo", "cards");
        cards.setOrigin(0, 0);
        cards.visible = false;

        // cauldronBack
        const cauldronBack = this.add.image(918, 540, "dojo", "cauldron/back");
        cauldronBack.setOrigin(0, 0);

        // cauldronSmoke
        const cauldronSmoke = this.add.sprite(954, 511, "dojo", "cauldron/smoke/smoke0001");

        // cauldronFront
        const cauldronFront = this.add.image(926, 550, "dojo", "cauldron/front");
        cauldronFront.setOrigin(0, 0);

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

        // waddle203 (prefab fields)
        waddle203.moveToX = 1160;
        waddle203.moveToY = 750;

        // waddle202 (prefab fields)
        waddle202.moveToX = 380;
        waddle202.moveToY = 750;

        // waddle201 (prefab fields)
        waddle201.moveToX = 920;
        waddle201.moveToY = 650;

        // waddle200 (prefab fields)
        waddle200.moveToX = 620;
        waddle200.moveToY = 650;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onSenseiOver();
        zoneZone.hoverOutCallback = () => this.onSenseiOut();
        const zoneMoveTo = new MoveTo(zone);
        zoneMoveTo.x = 1096;
        zoneMoveTo.y = 640;

        // cards (components)
        const cardsButton = new Button(cards);
        cardsButton.spriteName = "cards";
        cardsButton.callback = () => this.interface.loadWidget('NinjaProgress');
        cardsButton.activeFrame = false;
        cardsButton.pixelPerfect = true;

        this.sensei = sensei;
        this.waddle203 = waddle203;
        this.waddle202 = waddle202;
        this.waddle201 = waddle201;
        this.waddle200 = waddle200;
        this.cards = cards;
        this.cauldronSmoke = cauldronSmoke;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get userHasDeck() {
        return this.world.client.inventory.award.includes(821)
    }

    create() {
        super.create()

        this.cauldronSmoke.play('smoke')

        this.cards.depth = 960
        this.cards.visible = this.userHasDeck
    }

    onSenseiOver() {
        this.sensei.play('sensei_over')
    }

    onSenseiOut() {
        this.sensei.play('sensei_out')
    }

    triggerMat(id) {
        if (!this.userHasDeck) {
            this.interface.prompt.showWindow(this.getString('starter_deck_prompt'))
            return
        }

        const text = this.getString('card_prompt')

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('join_waddle', { waddle: id })

            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
