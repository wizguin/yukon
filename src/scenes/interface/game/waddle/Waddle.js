/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import DraggableContainer from "../../../components/DraggableContainer";
import WaddleItem from "./waddle_item/WaddleItem";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Waddle extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {WaddleItem[]} */
        this.items;


        // bg
        const bg = scene.add.image(0, -16, "main", "waddle");
        this.add(bg);

        // tab
        const tab = scene.add.image(0, -190, "main", "tab-2");
        this.add(tab);

        // waddle_item_3
        const waddle_item_3 = new WaddleItem(scene, 0, 100);
        this.add(waddle_item_3);

        // waddle_item_2
        const waddle_item_2 = new WaddleItem(scene, 0, 48);
        this.add(waddle_item_2);

        // waddle_item_1
        const waddle_item_1 = new WaddleItem(scene, 0, -4);
        this.add(waddle_item_1);

        // waddle_item
        const waddle_item = new WaddleItem(scene, 0, -56);
        this.add(waddle_item);

        // text
        const text = scene.add.text(0, -122, "", {});
        text.setOrigin(0.5, 0.5);
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":420,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // x_button
        const x_button = scene.add.image(178, -126, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(178, -128, "main", "blue-x");
        this.add(blue_x);

        // lists
        const items = [waddle_item, waddle_item_1, waddle_item_2, waddle_item_3];

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = bg;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.close();

        this.text = text;
        this.items = items;

        /* START-USER-CTR-CODE */

        this.activeWaddleId = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get activeWaddle() {
        return this.world.room.waddles[this.activeWaddleId]
    }

    get activeWaddleContainer() {
        return this.getWaddleContainer(this.activeWaddleId)
    }

    getWaddleContainer(waddle) {
        return this.world.room.getWaddle(waddle)
    }

    getSeatPoint(waddle, seat) {
        return this.getWaddleContainer(waddle)[`seat${seat}`]
    }

    getDonePoint() {
        return this.getWaddleContainer(waddle)[`done${seat}`]
    }

    setText(game) {
        this.text.text = this.getString(game)
    }

    show(waddle, seat, game) {
        this.activeWaddleId = waddle
        this.enterSeat(waddle, seat)

        this.setText(game)

        this.items.map(item => item.hideItem())

        for (let [index, username] of this.activeWaddle.entries()) {
            this.items[index].setItem(username)
        }

        super.show()
    }

    close() {
        this.network.send('leave_waddle')

        this.leaveSeat()
        this.activeWaddleId = null

        super.close()
    }

    updateWaddle(waddle, seat, username) {
        // Update in room waddles object
        this.world.room.waddles[waddle][seat] = username

        if (waddle === this.activeWaddleId) {
            this.items[seat].setItem(username)
        }
    }

    enterSeat(waddle, seat) {
        this.world.client.sendMoveToSeat(waddle, seat, 'waddle')
    }

    leaveSeat() {
        this.world.client.sendLeaveSeat()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
