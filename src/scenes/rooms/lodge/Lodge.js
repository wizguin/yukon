import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Lodge extends RoomScene {

    constructor() {
        super("Lodge");

        /** @type {Phaser.GameObjects.Sprite} */
        this.flame;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame_out;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'attic': () => this.triggerRoom(221, 966, 560),
            'village': () => this.triggerRoom(200, 940, 540)
        }
        this.music = '589'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("lodge-pack", "assets/media/rooms/lodge/lodge-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-17, -2, "lodge", "bg");
        bg.setOrigin(0, 0);

        // door
        const door = this.add.image(136, 461, "lodge", "door");

        // footrest
        const footrest = this.add.image(1279, 747, "lodge", "footrest");
        footrest.setOrigin(0.49295775, 0.47222222);

        // chair
        const chair = this.add.image(1365, 763, "lodge", "chair");
        chair.setOrigin(0.5017064846416383, 0.5018450184501845);

        // fire
        const fire = this.add.sprite(1334, 473, "lodge", "fire0001");
        fire.setOrigin(0.5061728395061729, 0.5);

        // fishing_door
        const fishing_door = this.add.image(949, 249, "lodge", "fishing_door");
        fishing_door.setOrigin(0.2916666666666667, 0.3961218836565097);

        // rods
        this.add.image(820, 328, "lodge", "rods");

        // bait
        const bait = this.add.image(838, 416, "lodge", "bait");
        bait.setOrigin(0.5060240963855421, 0.5);

        // catalog_small
        const catalog_small = this.add.sprite(830, 240, "lodge", "catalog_small0001");
        catalog_small.setOrigin(0, 0);

        // catalog_small_tape
        const catalog_small_tape = this.add.image(847, 238, "lodge", "catalog_small_tape");
        catalog_small_tape.setOrigin(0, 0);

        // table3
        const table3 = this.add.image(600, 515, "lodge", "table3");
        table3.setOrigin(0.5, 0.6985294117647058);

        // table2
        const table2 = this.add.image(583, 792, "lodge", "table2");
        table2.setOrigin(0.5, 0.7586206896551724);

        // table4
        const table4 = this.add.image(1020, 812, "lodge", "table4");
        table4.setOrigin(0.5, 0.7727272727272727);

        // candle
        const candle = this.add.image(453, 259, "lodge", "candle");
        candle.setOrigin(0, 0);

        // flame
        const flame = this.add.sprite(518, 230, "lodge", "flame0001");
        flame.setOrigin(0, 0);

        // flame_out
        const flame_out = this.add.sprite(518, 198, "lodge", "flame_out0001");
        flame_out.setOrigin(0, 0);
        flame_out.visible = false;

        // fish
        const fish = this.add.sprite(1010, 365, "lodge", "fish0001");
        fish.setOrigin(0, 0);
        fish.visible = false;

        // zone
        const zone = this.add.rectangle(1227, 215, 115, 430);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // lists
        const sort = [door, table3, table2, table4, footrest, chair];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 184;
        doorMoveTo.y = 626;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 10;

        // fishing_door (components)
        const fishing_doorButton = new Button(fishing_door);
        fishing_doorButton.spriteName = "fishing_door";
        fishing_doorButton.hoverCallback = () => this.onFishOver();
        fishing_doorButton.hoverOutCallback = () => this.onFishOut();
        fishing_doorButton.activeFrame = false;
        const fishing_doorMoveTo = new MoveTo(fishing_door);
        fishing_doorMoveTo.x = 960;
        fishing_doorMoveTo.y = 460;
        const fishing_doorShowHint = new ShowHint(fishing_door);
        fishing_doorShowHint.text = "Go Fishing";

        // bait (components)
        const baitButton = new Button(bait);
        baitButton.spriteName = "bait";
        baitButton.activeFrame = false;

        // catalog_small (components)
        const catalog_smallAnimation = new Animation(catalog_small);
        catalog_smallAnimation.key = "catalog_small";
        catalog_smallAnimation.end = 7;
        catalog_smallAnimation.repeat = 0;
        catalog_smallAnimation.autoPlay = false;
        catalog_smallAnimation.onHover = true;
        const catalog_smallSimpleButton = new SimpleButton(catalog_small);
        catalog_smallSimpleButton.pixelPerfect = true;

        // table3 (components)
        const table3Button = new Button(table3);
        table3Button.spriteName = "table3";
        table3Button.activeFrame = false;
        new MoveTo(table3);
        const table3ShowHint = new ShowHint(table3);
        table3ShowHint.text = "Play Find Four";

        // table2 (components)
        const table2Button = new Button(table2);
        table2Button.spriteName = "table2";
        table2Button.activeFrame = false;
        new MoveTo(table2);
        const table2ShowHint = new ShowHint(table2);
        table2ShowHint.text = "Play Find Four";

        // table4 (components)
        const table4Button = new Button(table4);
        table4Button.spriteName = "table4";
        table4Button.activeFrame = false;
        new MoveTo(table4);
        const table4ShowHint = new ShowHint(table4);
        table4ShowHint.text = "Play Find Four";

        // candle (components)
        const candleSimpleButton = new SimpleButton(candle);
        candleSimpleButton.hoverCallback = () => this.onCandleOver();
        candleSimpleButton.pixelPerfect = true;

        // flame (components)
        const flameAnimation = new Animation(flame);
        flameAnimation.key = "flame";
        flameAnimation.end = 14;

        // flame_out (components)
        const flame_outAnimation = new Animation(flame_out);
        flame_outAnimation.key = "flame_out";
        flame_outAnimation.end = 30;
        flame_outAnimation.repeat = 0;
        flame_outAnimation.autoPlay = false;
        flame_outAnimation.showOnStart = true;
        flame_outAnimation.hideOnComplete = true;

        // fish (components)
        const fishAnimation = new Animation(fish);
        fishAnimation.key = "fish";
        fishAnimation.end = 18;
        fishAnimation.repeat = 0;
        fishAnimation.autoPlay = false;
        fishAnimation.showOnStart = true;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.callback = () => this.onZoneClick();

        this.flame = flame;
        this.flame_out = flame_out;
        this.fish = fish;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.flame_out.on('animationcomplete', () => this.onFlameOutComplete())
    }

    onCandleOver() {
        if (!this.flame.visible) return
        this.flame.visible = false
        this.flame_out.__Animation.play()
    }

    onFlameOutComplete() {
        this.flame.visible = true
    }

    onFishOver() {
        this.fish.__Animation.play()
    }

    onFishOut() {
        this.fish.__Animation.stop()
        this.fish.visible = false
    }

    onZoneClick() {
        this.world.client.penguin.move(1210, 460)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
