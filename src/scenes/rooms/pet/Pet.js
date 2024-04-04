import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Pet extends RoomScene {

    constructor() {
        super("Pet");

        /** @type {Phaser.GameObjects.Sprite} */
        this.black;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffles;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jump;
        /** @type {Phaser.GameObjects.Sprite} */
        this.red;
        /** @type {Phaser.GameObjects.Sprite} */
        this.yellow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eyesYellow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fishIdle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eyesRed;
        /** @type {Phaser.GameObjects.Image} */
        this.adoptCatalog;
        /** @type {Phaser.GameObjects.Image} */
        this.petCatalog;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.penEyes;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 384, 620),
            'adopt': null,
            'roundup': () => this.triggerGame(902),
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pet-pack", "assets/media/rooms/pet/pet-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-4, 0, "pet", "bg");
        bg.setOrigin(0, 0);

        // black
        const black = this.add.sprite(92, 375, "pet", "black/black0001");
        black.setOrigin(0.56875, 0.9064039408866995);

        // post
        const post = this.add.image(1084, 439, "pet", "post");
        post.setOrigin(0.5220125786163522, 0.8860103626943006);

        // bowls
        const bowls = this.add.image(1104, 499, "pet", "bowls");
        bowls.setOrigin(0.5116279069767442, 0.7614678899082569);

        // sack
        const sack = this.add.image(1427, 602, "pet", "sack");
        sack.setOrigin(0.4557823129251701, 0.660377358490566);

        // os
        const os = this.add.sprite(1423, 688, "pet", "os/os0001");
        os.setOrigin(0.395, 0.6936619718309859);

        // employees
        const employees = this.add.image(1423, 352, "pet", "employees");
        employees.setOrigin(0.5, 0.5015479876160991);

        // door
        const door = this.add.image(639, 58, "pet", "door");
        door.setOrigin(0, 0);

        // puffles
        const puffles = this.add.sprite(369, 325, "pet", "puffles");
        puffles.setOrigin(0, 0);

        // jump
        const jump = this.add.sprite(432, 288, "pet", "jump/jump0001");
        jump.setOrigin(0, 0);
        jump.visible = false;

        // red
        const red = this.add.sprite(-243, -280, "pet", "red/red0001");
        red.setOrigin(0, 0);

        // yellow
        const yellow = this.add.sprite(554, 172, "pet", "yellow/yellow");
        yellow.setOrigin(0, 0);

        // eyesBlack
        const eyesBlack = this.add.sprite(600, 383, "pet", "eyes/black/black0001");
        eyesBlack.setOrigin(0, 0);

        // eyesPink
        const eyesPink = this.add.sprite(503, 408, "pet", "eyes/pink/pink0001");
        eyesPink.setOrigin(0, 0);

        // eyesBlue
        const eyesBlue = this.add.sprite(438, 390, "pet", "eyes/blue/blue0001");
        eyesBlue.setOrigin(0, 0);

        // eyesGreen
        const eyesGreen = this.add.sprite(528, 365, "pet", "eyes/green/green0001");
        eyesGreen.setOrigin(0, 0);

        // eyesPurple
        const eyesPurple = this.add.sprite(481, 354, "pet", "eyes/purple/purple0001");
        eyesPurple.setOrigin(0, 0);

        // eyesYellow
        const eyesYellow = this.add.sprite(570, 241, "pet", "eyes/green/green0001");
        eyesYellow.setOrigin(0, 0);

        // pen
        const pen = this.add.image(370, 323, "pet", "pen_front");
        pen.setOrigin(0, 0);

        // fish
        const fish = this.add.sprite(363, 473, "pet", "fish/fish0001");
        fish.setOrigin(0.8174807197943444, 0.8061420345489443);

        // fishIdle
        const fishIdle = this.add.sprite(316, 380, "pet", "fish/idle/idle0001");
        fishIdle.setOrigin(0, 0);

        // house3
        const house3 = this.add.image(178, 581, "pet", "house_3");
        house3.setOrigin(0.4897959183673469, 0.7444933920704846);

        // house2
        const house2 = this.add.image(280, 652, "pet", "house_2");
        house2.setOrigin(0.4724137931034483, 0.6473029045643154);

        // house1
        const house1 = this.add.image(170, 710, "pet", "house_1");
        house1.setOrigin(0.5288135593220339, 0.6590038314176245);

        // bedBack
        const bedBack = this.add.image(182, 781, "pet", "bed_back");
        bedBack.setOrigin(0.5020080321285141, 0.5);

        // bedFront
        const bedFront = this.add.image(182, 860, "pet", "bed_front");
        bedFront.setOrigin(0.5020242914979757, 0.6495726495726496);

        // eyesRed
        const eyesRed = this.add.sprite(293, 112, "pet", "eyes/green/green0001");
        eyesRed.setOrigin(0, 0);

        // yellowZone
        const yellowZone = this.add.rectangle(585, 248, 60, 50);
        yellowZone.alpha = 0.5;
        yellowZone.isFilled = true;
        yellowZone.fillColor = 65280;

        // blackZone
        const blackZone = this.add.rectangle(92, 356, 150, 120);
        blackZone.alpha = 0.5;
        blackZone.isFilled = true;
        blackZone.fillColor = 65280;

        // adoptCatalog
        const adoptCatalog = this.add.image(1331, 927, "pet", "adopt_catalog");
        adoptCatalog.setOrigin(0, 1);

        // petCatalog
        const petCatalog = this.add.image(1331, 808, "pet", "pets_catalog");
        petCatalog.setOrigin(0, 1);

        // lists
        const penEyes = [eyesPink, eyesBlue, eyesPurple, eyesGreen, eyesBlack];
        const sort = [bedFront, bedBack, house1, house2, house3, bowls, post, sack, os];

        // os (components)
        const osSimpleButton = new SimpleButton(os);
        osSimpleButton.pixelPerfect = true;
        const osAnimation = new Animation(os);
        osAnimation.key = "os/os";
        osAnimation.end = 74;
        osAnimation.repeat = 0;
        osAnimation.autoPlay = false;
        osAnimation.onHover = true;
        osAnimation.stopOnOut = false;

        // employees (components)
        const employeesButton = new Button(employees);
        employeesButton.spriteName = "employees";
        employeesButton.activeFrame = false;
        const employeesMoveTo = new MoveTo(employees);
        employeesMoveTo.x = 1328;
        employeesMoveTo.y = 572;
        const employeesShowHint = new ShowHint(employees);
        employeesShowHint.text = "roundup_hint";

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 808;
        doorMoveTo.y = 380;

        // jump (components)
        const jumpAnimation = new Animation(jump);
        jumpAnimation.key = "jump/jump";
        jumpAnimation.end = 89;

        // red (components)
        const redSimpleButton = new SimpleButton(red);
        redSimpleButton.hoverCallback = () => this.onRedOver();

        // yellow (components)
        const yellowAnimation = new Animation(yellow);
        yellowAnimation.key = "yellow/yellow";
        yellowAnimation.end = 11;
        yellowAnimation.autoPlay = false;

        // eyesBlack (components)
        const eyesBlackAnimation = new Animation(eyesBlack);
        eyesBlackAnimation.key = "eyes/black/black";
        eyesBlackAnimation.end = 54;

        // eyesPink (components)
        const eyesPinkAnimation = new Animation(eyesPink);
        eyesPinkAnimation.key = "eyes/pink/pink";
        eyesPinkAnimation.end = 50;

        // eyesBlue (components)
        const eyesBlueAnimation = new Animation(eyesBlue);
        eyesBlueAnimation.key = "eyes/blue/blue";
        eyesBlueAnimation.end = 54;

        // eyesGreen (components)
        const eyesGreenAnimation = new Animation(eyesGreen);
        eyesGreenAnimation.key = "eyes/green/green";
        eyesGreenAnimation.end = 56;

        // eyesPurple (components)
        const eyesPurpleAnimation = new Animation(eyesPurple);
        eyesPurpleAnimation.key = "eyes/purple/purple";
        eyesPurpleAnimation.end = 62;

        // eyesYellow (components)
        const eyesYellowAnimation = new Animation(eyesYellow);
        eyesYellowAnimation.key = "eyes/green/green";
        eyesYellowAnimation.end = 56;

        // pen (components)
        const penSimpleButton = new SimpleButton(pen);
        penSimpleButton.hoverCallback = () => this.onPenOver();
        penSimpleButton.hoverOutCallback = () => this.onPenOut();
        const penMoveTo = new MoveTo(pen);
        penMoveTo.x = 590;
        penMoveTo.y = 490;

        // fish (components)
        const fishSimpleButton = new SimpleButton(fish);
        fishSimpleButton.hoverCallback = () => this.onFishOver();
        fishSimpleButton.pixelPerfect = true;
        const fishAnimation = new Animation(fish);
        fishAnimation.key = "fish/fish";
        fishAnimation.start = 2;
        fishAnimation.end = 32;
        fishAnimation.repeat = 0;
        fishAnimation.autoPlay = false;

        // fishIdle (components)
        const fishIdleAnimation = new Animation(fishIdle);
        fishIdleAnimation.key = "fish/idle/idle";
        fishIdleAnimation.end = 95;

        // eyesRed (components)
        const eyesRedAnimation = new Animation(eyesRed);
        eyesRedAnimation.key = "eyes/green/green";
        eyesRedAnimation.end = 56;

        // yellowZone (components)
        const yellowZoneZone = new Zone(yellowZone);
        yellowZoneZone.hoverCallback = () => this.onYellowOver();
        yellowZoneZone.hoverOutCallback = () => this.onYellowOut();

        // blackZone (components)
        const blackZoneZone = new Zone(blackZone);
        blackZoneZone.hoverCallback = () => this.onBlackOver();

        // adoptCatalog (components)
        const adoptCatalogButton = new Button(adoptCatalog);
        adoptCatalogButton.spriteName = "adopt_catalog";
        adoptCatalogButton.callback = () => this.onAdoptCatalogClick();
        adoptCatalogButton.activeFrame = false;
        adoptCatalogButton.pixelPerfect = true;

        // petCatalog (components)
        const petCatalogButton = new Button(petCatalog);
        petCatalogButton.spriteName = "pets_catalog";
        petCatalogButton.callback = () => this.onPetCatalogClick();
        petCatalogButton.activeFrame = false;
        petCatalogButton.pixelPerfect = true;

        this.black = black;
        this.puffles = puffles;
        this.jump = jump;
        this.red = red;
        this.yellow = yellow;
        this.eyesYellow = eyesYellow;
        this.fish = fish;
        this.fishIdle = fishIdle;
        this.eyesRed = eyesRed;
        this.adoptCatalog = adoptCatalog;
        this.petCatalog = petCatalog;
        this.penEyes = penEyes;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.fish.on('animationcomplete', this.onFishAnimComplete, this)
        this.black.on('animationcomplete', this.onBlackAnimComplete, this)
        this.red.on('animationcomplete', this.onRedAnimComplete, this)
        this.red.on('animationupdate', this.onRedAnimUpdate, this)

        this.black.play('black_sleep')

        this.petCatalog.depth = 1000
        this.adoptCatalog.depth = 1000
    }

    onPetCatalogClick() {
        this.interface.loadWidget('PetsCatalog')
    }

    onAdoptCatalogClick() {
        this.interface.loadWidget('AdoptCatalog')
    }

    onPenOver() {
        this.penEyes.map(sprite => sprite.visible = false)
        this.puffles.visible = false

        this.jump.visible = true
        this.jump.anims.restart()
    }

    onPenOut() {
        this.penEyes.map(sprite => {
            sprite.visible = true
            sprite.anims.restart()
        })
        this.puffles.visible = true

        this.jump.visible = false
    }

    onFishOver() {
        this.fishIdle.visible = false
        this.fish.__Animation.play()
    }

    onFishAnimComplete() {
        this.fishIdle.visible = true
        this.fishIdle.anims.restart()

        this.fish.setFrame('fish/fish0001')
    }

    onYellowOver() {
        this.eyesYellow.visible = false
        this.yellow.__Animation.play()
    }

    onYellowOut() {
        this.eyesYellow.visible = true
        this.yellow.__Animation.stop()
    }

    onBlackOver() {
        this.black.play('black_wake')
    }

    onBlackAnimComplete() {
        this.black.play('black_sleep')
    }

    onRedOver() {
        let frame = this.red.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
                this.eyesRed.visible = false
                this.red.play('red_walk')
                break
            case '0050':
                this.eyesRed.visible = false
                this.red.play('red_down')
                break
            default:
                break
        }
    }

    onRedAnimComplete(animation) {
        switch (animation.key) {
            case 'red_walk':
                this.red.play('red_up')
                break
            default:
                break
        }
    }

    onRedAnimUpdate() {
        let frame = this.red.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
                this.resetEyesRed(293, 112)
                break
            case '0050':
                this.resetEyesRed(140, 63)
                break
            default:
                break
        }
    }

    resetEyesRed(x, y) {
        this.eyesRed.setPosition(x, y)
        this.eyesRed.visible = true
        this.eyesRed.anims.restart()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
