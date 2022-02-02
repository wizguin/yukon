import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Sprite} */
        this.canopy_lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.disco_lights;
        /** @type {Phaser.GameObjects.Image} */
        this.disco;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-pack", "assets/media/rooms/town/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-10, 0, "town", "bg");
        bg.setOrigin(0, 0);

        // fg
        const fg = this.add.image(-63, 976, "town", "fg");
        fg.setOrigin(0, 1);

        // left_sign
        const left_sign = this.add.image(179, 450, "town", "left_sign");
        left_sign.setOrigin(0, 0);

        // right_sign
        const right_sign = this.add.image(1286, 465, "town", "right_sign");
        right_sign.setOrigin(0, 0);

        // coffee_door
        const coffee_door = this.add.image(449, 305, "town", "coffee_door");
        coffee_door.setOrigin(0, 0);

        // gift_door
        const gift_door = this.add.image(995, 294, "town", "gift_door");
        gift_door.setOrigin(0, 0);

        // canopy
        const canopy = this.add.image(692, 464, "town", "canopy");
        canopy.setOrigin(0.49606299212598426, 0.9403669724770642);

        // canopy_lights
        const canopy_lights = this.add.sprite(648, 548, "town", "canopy_lights0001");
        canopy_lights.setOrigin(0, 7.142857142857143);
        canopy_lights.visible = false;

        // canopy_stars
        const canopy_stars = this.add.image(647, 548, "town", "canopy_stars");
        canopy_stars.setOrigin(0, 7.142857142857143);

        // disco_lights
        const disco_lights = this.add.sprite(766, 332, "town", "disco_lights0007");
        disco_lights.setOrigin(0, 0);
        disco_lights.visible = false;

        // disco
        const disco = this.add.image(648, 229, "town", "disco");
        disco.setOrigin(0, 0);

        // lights
        const lights = this.add.sprite(518, -75, "town", "lights0001");
        lights.setOrigin(0, 0);

        // box_1
        const box_1 = this.add.image(973, 432, "town", "box_1");
        box_1.setOrigin(0.49382716049382713, 0.6268656716417911);

        // box_2
        const box_2 = this.add.image(954, 483, "town", "box_2");
        box_2.setOrigin(0.49504950495049505, 0.6736842105263158);

        // box_3
        const box_3 = this.add.image(1148, 581, "town", "box_3");
        box_3.setOrigin(0.4943820224719101, 0.5569620253164557);

        // chair_2
        const chair_2 = this.add.image(436, 462, "town", "chair_2");
        chair_2.setOrigin(0.49382716049382713, 0.27358490566037735);

        // table_2
        const table_2 = this.add.image(485, 523, "town", "table_2");
        table_2.setOrigin(0.5, 0.7864077669902912);

        // chair_1
        const chair_1 = this.add.image(402, 511, "town", "chair_1");
        chair_1.setOrigin(0.49411764705882355, 0.2857142857142857);

        // table_1
        const table_1 = this.add.image(455, 575, "town", "table_1");
        table_1.setOrigin(0.49572649572649574, 0.7830188679245284);

        // lists
        const sort = [fg, box_2, box_1, box_3, chair_2, chair_1, table_1, table_2, canopy, canopy_stars, canopy_lights];

        // coffee_door (components)
        const coffee_doorButton = new Button(coffee_door);
        coffee_doorButton.spriteName = "coffee_door";
        coffee_doorButton.activeFrame = false;
        coffee_doorButton.pixelPerfect = true;
        const coffee_doorMoveTo = new MoveTo(coffee_door);
        coffee_doorMoveTo.x = 550;
        coffee_doorMoveTo.y = 450;

        // gift_door (components)
        const gift_doorButton = new Button(gift_door);
        gift_doorButton.spriteName = "gift_door";
        gift_doorButton.activeFrame = false;
        gift_doorButton.pixelPerfect = true;
        const gift_doorMoveTo = new MoveTo(gift_door);
        gift_doorMoveTo.x = 1010;
        gift_doorMoveTo.y = 466;

        // canopy (components)
        const canopySimpleButton = new SimpleButton(canopy);
        canopySimpleButton.hoverCallback = () => this.onCanopyOver();
        canopySimpleButton.hoverOutCallback = () => this.onCanopyOut();
        const canopyMoveTo = new MoveTo(canopy);
        canopyMoveTo.x = 684;
        canopyMoveTo.y = 410;

        // canopy_lights (components)
        const canopy_lightsAnimation = new Animation(canopy_lights);
        canopy_lightsAnimation.key = "canopy_lights";
        canopy_lightsAnimation.end = 57;
        canopy_lightsAnimation.autoPlay = false;
        canopy_lightsAnimation.showOnStart = true;
        canopy_lightsAnimation.hideOnComplete = true;

        // disco_lights (components)
        const disco_lightsAnimation = new Animation(disco_lights);
        disco_lightsAnimation.key = "disco_lights";
        disco_lightsAnimation.end = 57;
        disco_lightsAnimation.autoPlay = false;
        disco_lightsAnimation.showOnStart = true;
        disco_lightsAnimation.hideOnComplete = true;

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "lights";
        lightsAnimation.end = 69;
        lightsAnimation.repeatDelay = 1;

        this.canopy_lights = canopy_lights;
        this.disco_lights = disco_lights;
        this.disco = disco;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onCanopyOver() {
        this.disco.setFrame('disco-hover')
        this.canopy_lights.__Animation.play()
        this.disco_lights.__Animation.play()
    }

    onCanopyOut() {
        this.disco.setFrame('disco')
        this.canopy_lights.__Animation.stop()
        this.disco_lights.__Animation.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
