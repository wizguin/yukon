/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import SimpleButton from "../../components/SimpleButton";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.rings;
        /** @type {Phaser.GameObjects.Sprite} */
        this.chair;
        /** @type {Phaser.GameObjects.Image} */
        this.lift;
        /** @type {Phaser.GameObjects.Image} */
        this.toursText;
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'sport': () => this.triggerRoom(210, 1000, 560)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-pack", "assets/media/rooms/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rings
        const rings = this.add.sprite(1377, 584, "village", "rings/rings0001");
        rings.setInteractive(new Phaser.Geom.Polygon("1455 456 1455 643 1295 643"), Phaser.Geom.Polygon.Contains);
        rings.setOrigin(0.9297771775827144, 0.906832298136646);

        // bg
        const bg = this.add.image(-26, -12, "village", "bg");
        bg.setOrigin(0, 0);

        // lodgeFront
        const lodgeFront = this.add.image(1086, 384, "village", "lodge_front");
        lodgeFront.setOrigin(0.4789272030651341, 0.5352112676056338);

        // lodgeSnow
        const lodgeSnow = this.add.image(1067, 423, "village", "lodge_snow");
        lodgeSnow.setOrigin(0.46332046332046334, 0.47435897435897434);

        // lodgeStairs
        const lodgeStairs = this.add.image(931, 459, "village", "lodge_stairs");
        lodgeStairs.setOrigin(0, 0.7868852459016393);

        // lodgeDoor
        const lodgeDoor = this.add.image(1024, 186, "village", "lodge_door");
        lodgeDoor.setOrigin(0, 0);

        // smoke
        const smoke = this.add.sprite(1093, -39, "village", "smoke0001");
        smoke.setOrigin(0, 0);
        smoke.play("village/smoke");

        // sportShop
        const sportShop = this.add.container(1185, 428.3932671887646);

        // sport
        const sport = this.add.image(0, -395.3932695094585, "village", "sport");
        sport.setOrigin(0, 0);
        sportShop.add(sport);

        // sportDoor
        const sportDoor = this.add.image(126, -208.3932695094585, "village", "sport_door");
        sportDoor.setOrigin(0, 0);
        sportShop.add(sportDoor);

        // ring
        const ring = this.add.image(1468, 566, "village", "ring");
        ring.setOrigin(0.5, 0.8181818181818182);

        // sled
        const sled = this.add.image(1415, 576, "village", "sled");
        sled.setOrigin(0.49206349206349204, 2);

        // chairLift
        const chairLift = this.add.layer();

        // chair
        const chair = this.add.sprite(-116, -136, "village", "chair/chair0001");
        chair.setOrigin(0, 0);
        chair.play("village/chair");
        chairLift.add(chair);

        // lift
        const lift = this.add.image(85, -5, "village", "lift");
        lift.setOrigin(0, 0);
        chairLift.add(lift);

        // rightSign
        const rightSign = this.add.image(1465, 667, "village", "right_sign");
        rightSign.setOrigin(0.4794520547945205, 0.7831325301204819);

        // leftSign
        const leftSign = this.add.image(139, 675, "village", "left_sign");
        leftSign.setOrigin(0.4444444444444444, 0.5217391304347826);

        // tourBooth
        const tourBooth = this.add.container(797, 476);

        // tours
        const tours = this.add.image(0, 0, "village", "tours");
        tours.setOrigin(0.5028901734104047, 0.8894230769230769);
        tourBooth.add(tours);

        // toursText
        const toursText = this.add.image(3, -144, "village", "tours_text");
        toursText.setOrigin(0.5034965034965035, 0.5);
        tourBooth.add(toursText);

        // lists
        const sort = [tourBooth, leftSign, rightSign, sled, rings, ring, sportShop, lodgeStairs, lodgeSnow, lodgeFront];

        // rings (components)
        const ringsSimpleButton = new SimpleButton(rings);
        ringsSimpleButton.hoverCallback = () => this.onRingsOver();

        // lodgeDoor (components)
        const lodgeDoorButton = new Button(lodgeDoor);
        lodgeDoorButton.spriteName = "lodge_door";
        lodgeDoorButton.activeFrame = false;
        const lodgeDoorMoveTo = new MoveTo(lodgeDoor);
        lodgeDoorMoveTo.x = 1000;
        lodgeDoorMoveTo.y = 400;

        // sportDoor (components)
        const sportDoorButton = new Button(sportDoor);
        sportDoorButton.spriteName = "sport_door";
        sportDoorButton.activeFrame = false;
        const sportDoorMoveTo = new MoveTo(sportDoor);
        sportDoorMoveTo.x = 1340;
        sportDoorMoveTo.y = 480;

        // tours (components)
        const toursButton = new Button(tours);
        toursButton.spriteName = "tours";
        toursButton.hoverCallback = () => this.onToursOver();
        toursButton.hoverOutCallback = () => this.onToursOut();
        toursButton.callback = () => this.onToursClick();
        toursButton.activeFrame = false;
        toursButton.pixelPerfect = true;

        this.rings = rings;
        this.chair = chair;
        this.lift = lift;
        this.toursText = toursText;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.chair.on('animationupdate', this.onChairUpdate, this)
    }

    onChairUpdate(animation, frame) {
        this.chair.depth = frame.index > 90 ? 1 : -1
    }

    onRingsOver() {
        this.rings.play('village/rings')
    }

    onToursOver() {
        this.toursText.setFrame('tours_text_large')
        this.toursText.y -= 6
    }

    onToursOut() {
        this.toursText.setFrame('tours_text')
        this.toursText.y += 6
    }

    onToursClick() {
        if (this.world.client.isTourGuide) {
            this.interface.loadWidget('GiveTour')
        } else {
            this.interface.loadWidget('TakeTour')
        }

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
