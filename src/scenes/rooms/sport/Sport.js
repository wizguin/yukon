/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import SimpleButton from "../../components/SimpleButton";
import Zone from "../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Sport extends RoomScene {

    constructor() {
        super("Sport");

        /** @type {Phaser.GameObjects.Sprite} */
        this.phone;
        /** @type {Phaser.GameObjects.Sprite} */
        this.register;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ball;
        /** @type {Phaser.GameObjects.Image} */
        this.catalog;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            village: () => this.triggerRoom(200, 1152, 510),
            agent: () => this.triggerAgent()
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sport-pack", "assets/media/rooms/sport/sport-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(4, 4, "sport", "bg");
        bg.setOrigin(0, 0);

        // container
        const container = this.add.container(1310, 664);

        // counter
        const counter = this.add.image(1.0305368858855672, 1.4989092534428892, "sport", "counter");
        counter.setOrigin(0.4, 0.8102766798418972);
        container.add(counter);

        // phone
        const phone = this.add.sprite(63, -178, "sport", "phone/phone0001");
        phone.setOrigin(0, 0);
        container.add(phone);

        // register
        const register = this.add.sprite(-102, -289, "sport", "register/register0001");
        register.setOrigin(0, 0);
        container.add(register);

        // ball
        const ball = this.add.sprite(1422, 698, "sport", "ball/ball0001");
        ball.setOrigin(0.5, 0.8963414634146342);

        // bike
        const bike = this.add.image(1342, 816, "sport", "bike");
        bike.setOrigin(0.5, 0.6623931623931624);

        // catalog
        const catalog = this.add.image(1329, 808, "sport", "catalog");
        catalog.setOrigin(0, 0);

        // door
        const door = this.add.image(1016, 140, "sport", "door");
        door.setOrigin(0, 0);

        // ring
        const ring = this.add.image(79, 805, "sport", "ring");
        ring.setOrigin(0, 0.69);

        // curtain
        const curtain = this.add.image(385, 280, "sport", "curtain");
        curtain.setOrigin(0, 0);

        // speaker
        const speaker = this.add.sprite(2, 189, "sport", "speaker/speaker0001");
        speaker.setOrigin(0, 0);

        // ballZone
        const ballZone = this.add.rectangle(1422, 668, 100, 100);
        ballZone.alpha = 0.5;
        ballZone.isFilled = true;
        ballZone.fillColor = 65280;

        // phoneZone
        const phoneZone = this.add.rectangle(1428, 541, 75, 60);
        phoneZone.alpha = 0.5;
        phoneZone.isFilled = true;
        phoneZone.fillColor = 65280;

        // registerZone
        const registerZone = this.add.rectangle(1292, 467, 110, 100);
        registerZone.alpha = 0.5;
        registerZone.isFilled = true;
        registerZone.fillColor = 65280;

        // lists
        const sort = [ring, bike, ball, container];

        // phone (components)
        const phoneAnimation = new Animation(phone);
        phoneAnimation.key = "phone/phone";
        phoneAnimation.end = 55;
        phoneAnimation.repeat = 0;
        phoneAnimation.autoPlay = false;
        phoneAnimation.onHover = true;
        phoneAnimation.stopOnOut = false;

        // ball (components)
        const ballAnimation = new Animation(ball);
        ballAnimation.key = "ball/ball";
        ballAnimation.end = 37;
        ballAnimation.repeat = 0;
        ballAnimation.autoPlay = false;
        ballAnimation.onHover = true;

        // catalog (components)
        const catalogButton = new Button(catalog);
        catalogButton.spriteName = "catalog";
        catalogButton.callback = () => this.onCatalogClick();
        catalogButton.activeFrame = false;
        catalogButton.pixelPerfect = true;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1080;
        doorMoveTo.y = 466;

        // curtain (components)
        const curtainButton = new Button(curtain);
        curtainButton.spriteName = "curtain";
        curtainButton.activeFrame = false;
        const curtainMoveTo = new MoveTo(curtain);
        curtainMoveTo.x = 460;
        curtainMoveTo.y = 540;

        // speaker (components)
        const speakerSimpleButton = new SimpleButton(speaker);
        speakerSimpleButton.pixelPerfect = true;
        const speakerAnimation = new Animation(speaker);
        speakerAnimation.key = "speaker/speaker";
        speakerAnimation.end = 30;
        speakerAnimation.repeat = 0;
        speakerAnimation.autoPlay = false;
        speakerAnimation.onHover = true;
        speakerAnimation.stopOnOut = false;

        // ballZone (components)
        const ballZoneZone = new Zone(ballZone);
        ballZoneZone.hoverCallback = () => this.ball.__Animation.play();

        // phoneZone (components)
        const phoneZoneZone = new Zone(phoneZone);
        phoneZoneZone.hoverCallback = () => this.phone.__Animation.play();

        // registerZone (components)
        const registerZoneZone = new Zone(registerZone);
        registerZoneZone.hoverCallback = () => this.onRegisterOver();

        this.phone = phone;
        this.register = register;
        this.ball = ball;
        this.catalog = catalog;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.catalog.depth = 1000
    }

    onRegisterOver() {
        const frame = parseInt(this.register.frame.name.slice(-4))

        if (frame === 1) {
            this.register.play('register_in')
        } else if (frame === 22) {
            this.register.play('register_out')
        }
    }

    onCatalogClick() {

    }

    triggerAgent() {
        if (this.world.client.isSecretAgent) {
            this.triggerRoom(803, 240, 720)
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
