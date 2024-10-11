/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import ShowHint from "../../components/ShowHint";
import Animation from "../../components/Animation";
import Zone from "../../components/Zone";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Pizza extends RoomScene {

    constructor() {
        super("Pizza");

        /** @type {Phaser.GameObjects.Sprite} */
        this.book;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cash;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            plaza: () => this.triggerRoom(300, 1110, 580),
            pizzatron: () => this.triggerGame(910)
        }

        this.music = '20'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pizza-pack", "assets/media/rooms/pizza/pizza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(764, 480, "pizza", "bg");

        // kitchen
        this.add.image(393.7, 35.3, "pizza", "kitchen");

        // door
        const door = this.add.image(840, 267, "pizza", "door");

        // kitchen_door
        const kitchen_door = this.add.image(396.2591247558594, 197.7699432373047, "pizza", "kitchen_door");
        kitchen_door.setOrigin(0.509836937003536, 0.3761316356689409);

        // steam
        const steam = this.add.sprite(57, 154, "pizza", "steam0001");

        // deskContainer
        const deskContainer = this.add.container(534, 452);

        // desk
        const desk = this.add.image(0, -23, "pizza", "desk/desk");
        deskContainer.add(desk);

        // book
        const book = this.add.sprite(73, -109, "pizza", "desk/book0001");
        deskContainer.add(book);

        // cash
        const cash = this.add.sprite(-66, -141, "pizza", "desk/cash0001");
        deskContainer.add(cash);

        // cashZone
        const cashZone = this.add.rectangle(-66.4, -123.9, 110, 98);
        cashZone.alpha = 0.5;
        cashZone.isFilled = true;
        cashZone.fillColor = 65280;
        deskContainer.add(cashZone);

        // bookZone
        const bookZone = this.add.rectangle(74, -94, 134, 34);
        bookZone.alpha = 0.5;
        bookZone.isFilled = true;
        bookZone.fillColor = 65280;
        deskContainer.add(bookZone);

        // piano
        const piano = this.add.image(1339.481689453125, 440.89052393296305, "pizza", "piano");
        piano.setOrigin(0.40765680693892903, 0.6082990446357159);

        // chair2
        const chair2 = this.add.image(576, 584, "pizza", "chair");
        chair2.setOrigin(0.506083670741084, 0.388330843730328);

        // chair1
        const chair1 = this.add.image(414, 584, "pizza", "chair");
        chair1.setOrigin(0.506083670741084, 0.388330843730328);
        chair1.flipX = true;

        // table1Container
        const table1Container = this.add.container(486, 684);

        // table1
        const table1 = this.add.image(6.9, -22.5, "pizza", "table/table");
        table1Container.add(table1);

        // candle1
        const candle1 = this.add.sprite(10.4, -106.6, "pizza", "table/candle0001");
        table1Container.add(candle1);

        // chair4
        const chair4 = this.add.image(843.5, 700, "pizza", "chair");
        chair4.setOrigin(0.506083670741084, 0.388330843730328);

        // chair3
        const chair3 = this.add.image(682, 700, "pizza", "chair");
        chair3.setOrigin(0.506083670741084, 0.388330843730328);
        chair3.flipX = true;

        // table2Container
        const table2Container = this.add.container(774, 794);

        // table2
        const table2 = this.add.image(-7.6, -23, "pizza", "table/table");
        table2.flipX = true;
        table2Container.add(table2);

        // candle2
        const candle2 = this.add.sprite(-10.4, -106, "pizza", "table/candle0001");
        candle2.flipX = true;
        table2Container.add(candle2);

        // chair5
        const chair5 = this.add.image(982.5, 664.5, "pizza", "chair");
        chair5.setOrigin(0.506083670741084, 0.388330843730328);
        chair5.flipX = true;

        // chair6
        const chair6 = this.add.image(1154, 658, "pizza", "chair");
        chair6.setOrigin(0.506083670741084, 0.388330843730328);

        // table3Container
        const table3Container = this.add.container(1074, 752);

        // table3
        const table3 = this.add.image(-7.6, -23, "pizza", "table/table");
        table3.flipX = true;
        table3Container.add(table3);

        // candle3
        const candle3 = this.add.sprite(-10.4, -106, "pizza", "table/candle0001");
        candle3.flipX = true;
        table3Container.add(candle3);

        // pan
        const pan = this.add.image(142.51476047863997, 700.7032584843068, "pizza", "pan");
        pan.setOrigin(0.10074519791324657, 0.971436461221082);

        // oven
        const oven = this.add.image(6.861707159353852, 768.720386854, "pizza", "oven");
        oven.setOrigin(0.005557987954675192, 0.865012182798766);

        // fire
        const fire = this.add.sprite(124, 769.8586163235276, "pizza", "fire0001");
        fire.setOrigin(0.5, 0.5791703111763603);

        // fg
        const fg = this.add.image(4, 956, "pizza", "fg");
        fg.setOrigin(0, 1);

        // lists
        const sort = [pan, fg, piano, oven, fire, deskContainer, table1Container, table2Container, table3Container, chair6, chair5, chair4, chair3, chair2, chair1];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 828;
        doorMoveTo.y = 460;

        // kitchen_door (components)
        const kitchen_doorButton = new Button(kitchen_door);
        kitchen_doorButton.spriteName = "kitchen_door";
        kitchen_doorButton.activeFrame = false;
        const kitchen_doorMoveTo = new MoveTo(kitchen_door);
        kitchen_doorMoveTo.x = 400;
        kitchen_doorMoveTo.y = 420;
        const kitchen_doorShowHint = new ShowHint(kitchen_door);
        kitchen_doorShowHint.text = "pizzatron_hint";

        // steam (components)
        const steamAnimation = new Animation(steam);
        steamAnimation.key = "steam";
        steamAnimation.end = 5;

        // cashZone (components)
        const cashZoneZone = new Zone(cashZone);
        cashZoneZone.hoverCallback = () => this.onCashOver();

        // bookZone (components)
        const bookZoneZone = new Zone(bookZone);
        bookZoneZone.hoverCallback = () => this.onBookOver();

        // candle1 (components)
        const candle1Animation = new Animation(candle1);
        candle1Animation.key = "table/candle";
        candle1Animation.end = 14;

        // candle2 (components)
        const candle2Animation = new Animation(candle2);
        candle2Animation.key = "table/candle";
        candle2Animation.end = 14;

        // candle3 (components)
        const candle3Animation = new Animation(candle3);
        candle3Animation.key = "table/candle";
        candle3Animation.end = 14;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 8;

        this.book = book;
        this.cash = cash;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onCashOver() {
        const frame = parseInt(this.cash.frame.name.slice(-4))

        if (frame === 1) {
            this.cash.play('pizza/cash_in')
        } else if (frame === 22) {
            this.cash.play('pizza/cash_out')
        }
    }

    onBookOver() {
        this.book.play('pizza/book')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */