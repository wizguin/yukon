import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /** @type {Phaser.GameObjects.Sprite} */
        this.board;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 580, 520),
            'beans': () => this.triggerGame(901),
            'book': () => this.triggerRoom(111, 1200, 580)
        }

        this.music = '1'

        this.boardToggle = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee-pack", "assets/media/rooms/coffee/coffee-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, -7, "coffee", "bg");
        bg.setOrigin(0, 0);

        // lamp
        const lamp = this.add.image(172, -11, "coffee", "lamp");
        lamp.setOrigin(0, 0);

        // table
        const table = this.add.image(414, 499, "coffee", "table");
        table.setOrigin(0.5217391304347826, 0.5368421052631579);

        // counter_back
        const counter_back = this.add.image(850, 458, "coffee", "counter_back");
        counter_back.setOrigin(0.27906976744186046, 0.8363636363636363);

        // counter_front
        const counter_front = this.add.image(808, 621, "coffee", "counter_front");
        counter_front.setOrigin(0.2864583333333333, 0.8710801393728222);

        // smoke
        const smoke = this.add.sprite(903, 180, "coffee", "smoke0001");
        smoke.setOrigin(0, 0);

        // sign_back
        const sign_back = this.add.image(903, 632, "coffee", "sign_back");
        sign_back.setOrigin(0.5, 0.4789915966386555);

        // sign_front
        const sign_front = this.add.image(880, 695, "coffee", "sign_front");
        sign_front.setOrigin(0.5190839694656488, 0.8827586206896552);

        // board
        const board = this.add.sprite(947, 146, "coffee", "board0001");
        board.setOrigin(0, 0);

        // machine_1
        const machine_1 = this.add.image(952, 468, "coffee", "machine_1");
        machine_1.setOrigin(0, 0);

        // machine_2
        const machine_2 = this.add.image(960, 314, "coffee", "machine_2");
        machine_2.setOrigin(0, 0);

        // machine_3
        const machine_3 = this.add.image(1017, 406, "coffee", "machine_3");
        machine_3.setOrigin(0, 0);

        // bag
        const bag = this.add.image(1073, 646, "coffee", "bag");
        bag.setOrigin(0.4430379746835443, 0.5060240963855421);

        // beans
        const beans = this.add.image(1012, 643, "coffee", "beans");
        beans.setOrigin(0.3411764705882353, 0.5528455284552846);

        // lamp_2
        const lamp_2 = this.add.image(988, 151, "coffee", "lamp_2");
        lamp_2.setOrigin(0, 0);

        // stairs
        const stairs = this.add.image(1203, 328, "coffee", "stairs");
        stairs.setOrigin(0, 0);

        // door
        const door = this.add.image(724, 135, "coffee", "door");
        door.setOrigin(0, 0);

        // lists
        const sort = [beans, bag, sign_front, sign_back, counter_front, counter_back, table];

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // board (components)
        const boardSimpleButton = new SimpleButton(board);
        boardSimpleButton.callback = () => this.onBoardClick();
        boardSimpleButton.pixelPerfect = true;

        // beans (components)
        const beansButton = new Button(beans);
        beansButton.spriteName = "beans";
        beansButton.activeFrame = false;
        beansButton.pixelPerfect = true;
        new MoveTo(beans);
        const beansShowHint = new ShowHint(beans);
        beansShowHint.text = "beans_hint";

        // stairs (components)
        const stairsButton = new Button(stairs);
        stairsButton.spriteName = "stairs";
        stairsButton.activeFrame = false;
        const stairsMoveTo = new MoveTo(stairs);
        stairsMoveTo.x = 1255;
        stairsMoveTo.y = 820;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 750;
        doorMoveTo.y = 392;

        this.board = board;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onBoardClick() {
        let animation = (this.boardToggle) ? 'board1' : 'board2'

        this.board.play(animation)
        this.boardToggle = !this.boardToggle
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
