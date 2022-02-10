import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive } from '@components/components'

import IglooButton from './igloo_button/IglooButton'
import IglooItem from './igloo_item/IglooItem'


/* START OF COMPILED CODE */

export default class IglooMap extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Container} */
        this.panel;
        /** @type {Phaser.GameObjects.Container} */
        this.down;
        /** @type {Phaser.GameObjects.Image} */
        this.downButton;
        /** @type {Phaser.GameObjects.Container} */
        this.up;
        /** @type {Phaser.GameObjects.Image} */
        this.upButton;
        /** @type {IglooButton[]} */
        this.iglooSprites;
        /** @type {IglooItem[]} */
        this.items;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // igloo_bg
        const igloo_bg = scene.add.image(-11, -44, "map", "igloo/bg");
        this.add(igloo_bg);

        // igloo_igloo_27
        const igloo_igloo_27 = new IglooButton(scene, -336, -50);
        igloo_igloo_27.scaleX = 0.9;
        igloo_igloo_27.scaleY = 0.9;
        igloo_igloo_27.flipX = false;
        igloo_igloo_27.flipY = false;
        this.add(igloo_igloo_27);

        // igloo_igloo_22
        const igloo_igloo_22 = new IglooButton(scene, -277, -30);
        igloo_igloo_22.scaleX = 0.9;
        igloo_igloo_22.scaleY = 0.9;
        igloo_igloo_22.flipX = false;
        igloo_igloo_22.flipY = false;
        this.add(igloo_igloo_22);

        // igloo_igloo_21
        const igloo_igloo_21 = new IglooButton(scene, -216, -10);
        igloo_igloo_21.scaleX = 0.9;
        igloo_igloo_21.scaleY = 0.9;
        igloo_igloo_21.flipX = false;
        igloo_igloo_21.flipY = false;
        this.add(igloo_igloo_21);

        // igloo_igloo_9
        const igloo_igloo_9 = new IglooButton(scene, -156, 9);
        igloo_igloo_9.scaleX = 0.9;
        igloo_igloo_9.scaleY = 0.9;
        igloo_igloo_9.flipX = false;
        igloo_igloo_9.flipY = false;
        this.add(igloo_igloo_9);

        // igloo_igloo_5
        const igloo_igloo_5 = new IglooButton(scene, -107, 61);
        igloo_igloo_5.scaleX = 1;
        igloo_igloo_5.scaleY = 1;
        igloo_igloo_5.flipX = false;
        igloo_igloo_5.flipY = false;
        this.add(igloo_igloo_5);

        // igloo_igloo_16
        const igloo_igloo_16 = new IglooButton(scene, -224, 88);
        igloo_igloo_16.scaleX = 1;
        igloo_igloo_16.scaleY = 1;
        igloo_igloo_16.flipX = true;
        igloo_igloo_16.flipY = false;
        this.add(igloo_igloo_16);

        // igloo_igloo_20
        const igloo_igloo_20 = new IglooButton(scene, -150, 119);
        igloo_igloo_20.scaleX = 1;
        igloo_igloo_20.scaleY = 1;
        igloo_igloo_20.flipX = false;
        igloo_igloo_20.flipY = false;
        this.add(igloo_igloo_20);

        // igloo_igloo_19
        const igloo_igloo_19 = new IglooButton(scene, -89, 140);
        igloo_igloo_19.scaleX = 1;
        igloo_igloo_19.scaleY = 1;
        igloo_igloo_19.flipX = false;
        igloo_igloo_19.flipY = false;
        this.add(igloo_igloo_19);

        // igloo_igloo_29
        const igloo_igloo_29 = new IglooButton(scene, -439, -16);
        igloo_igloo_29.scaleX = 0.9;
        igloo_igloo_29.scaleY = 0.9;
        igloo_igloo_29.flipX = true;
        igloo_igloo_29.flipY = false;
        this.add(igloo_igloo_29);

        // igloo_igloo_28
        const igloo_igloo_28 = new IglooButton(scene, -382, 36);
        igloo_igloo_28.scaleX = 1;
        igloo_igloo_28.scaleY = 1;
        igloo_igloo_28.flipX = false;
        igloo_igloo_28.flipY = false;
        this.add(igloo_igloo_28);

        // igloo_igloo_18
        const igloo_igloo_18 = new IglooButton(scene, -323, 57);
        igloo_igloo_18.scaleX = 1;
        igloo_igloo_18.scaleY = 1;
        igloo_igloo_18.flipX = false;
        igloo_igloo_18.flipY = false;
        this.add(igloo_igloo_18);

        // igloo_igloo_17
        const igloo_igloo_17 = new IglooButton(scene, -286, 116);
        igloo_igloo_17.scaleX = 1;
        igloo_igloo_17.scaleY = 1;
        igloo_igloo_17.flipX = true;
        igloo_igloo_17.flipY = false;
        this.add(igloo_igloo_17);

        // igloo_igloo_10
        const igloo_igloo_10 = new IglooButton(scene, 108, 67);
        igloo_igloo_10.scaleX = 1;
        igloo_igloo_10.scaleY = 1;
        igloo_igloo_10.flipX = true;
        igloo_igloo_10.flipY = false;
        this.add(igloo_igloo_10);

        // igloo_igloo_6
        const igloo_igloo_6 = new IglooButton(scene, 81, 117);
        igloo_igloo_6.scaleX = 1;
        igloo_igloo_6.scaleY = 1;
        igloo_igloo_6.flipX = true;
        igloo_igloo_6.flipY = false;
        this.add(igloo_igloo_6);

        // igloo_igloo_8
        const igloo_igloo_8 = new IglooButton(scene, 188, 101);
        igloo_igloo_8.scaleX = 1;
        igloo_igloo_8.scaleY = 1;
        igloo_igloo_8.flipX = true;
        igloo_igloo_8.flipY = false;
        this.add(igloo_igloo_8);

        // igloo_igloo_13
        const igloo_igloo_13 = new IglooButton(scene, -121, -144);
        igloo_igloo_13.scaleX = 0.8;
        igloo_igloo_13.scaleY = 0.8;
        igloo_igloo_13.flipX = false;
        igloo_igloo_13.flipY = false;
        this.add(igloo_igloo_13);

        // igloo_igloo_12
        const igloo_igloo_12 = new IglooButton(scene, -76, -108);
        igloo_igloo_12.scaleX = 0.8;
        igloo_igloo_12.scaleY = 0.8;
        igloo_igloo_12.flipX = false;
        igloo_igloo_12.flipY = false;
        this.add(igloo_igloo_12);

        // igloo_igloo_25
        const igloo_igloo_25 = new IglooButton(scene, -35, -67);
        igloo_igloo_25.scaleX = 0.8;
        igloo_igloo_25.scaleY = 0.8;
        igloo_igloo_25.flipX = false;
        igloo_igloo_25.flipY = false;
        this.add(igloo_igloo_25);

        // igloo_igloo_2
        const igloo_igloo_2 = new IglooButton(scene, -46, -7);
        igloo_igloo_2.scaleX = 0.9;
        igloo_igloo_2.scaleY = 0.9;
        igloo_igloo_2.flipX = false;
        igloo_igloo_2.flipY = false;
        this.add(igloo_igloo_2);

        // igloo_igloo_14
        const igloo_igloo_14 = new IglooButton(scene, 135, -49);
        igloo_igloo_14.scaleX = 0.9;
        igloo_igloo_14.scaleY = 0.9;
        igloo_igloo_14.flipX = true;
        igloo_igloo_14.flipY = false;
        this.add(igloo_igloo_14);

        // igloo_igloo_3
        const igloo_igloo_3 = new IglooButton(scene, 95, -28);
        igloo_igloo_3.scaleX = 0.9;
        igloo_igloo_3.scaleY = 0.9;
        igloo_igloo_3.flipX = true;
        igloo_igloo_3.flipY = false;
        this.add(igloo_igloo_3);

        // igloo_igloo_1
        const igloo_igloo_1 = new IglooButton(scene, 44, 6);
        igloo_igloo_1.scaleX = 0.9;
        igloo_igloo_1.scaleY = 0.9;
        igloo_igloo_1.flipX = true;
        igloo_igloo_1.flipY = false;
        this.add(igloo_igloo_1);

        // igloo_igloo_0
        const igloo_igloo_0 = new IglooButton(scene, -5, 40);
        igloo_igloo_0.scaleX = 0.9;
        igloo_igloo_0.scaleY = 0.9;
        igloo_igloo_0.flipX = false;
        igloo_igloo_0.flipY = false;
        this.add(igloo_igloo_0);

        // igloo_igloo_15
        const igloo_igloo_15 = new IglooButton(scene, 191, -14);
        igloo_igloo_15.scaleX = 0.9;
        igloo_igloo_15.scaleY = 0.9;
        igloo_igloo_15.flipX = false;
        igloo_igloo_15.flipY = false;
        this.add(igloo_igloo_15);

        // igloo_igloo_23
        const igloo_igloo_23 = new IglooButton(scene, -136, -73);
        igloo_igloo_23.scaleX = 0.8;
        igloo_igloo_23.scaleY = 0.8;
        igloo_igloo_23.flipX = true;
        igloo_igloo_23.flipY = false;
        this.add(igloo_igloo_23);

        // igloo_igloo_24
        const igloo_igloo_24 = new IglooButton(scene, -189, -75);
        igloo_igloo_24.scaleX = 0.8;
        igloo_igloo_24.scaleY = 0.8;
        igloo_igloo_24.flipX = true;
        igloo_igloo_24.flipY = false;
        this.add(igloo_igloo_24);

        // igloo_igloo_26
        const igloo_igloo_26 = new IglooButton(scene, -31, -180);
        igloo_igloo_26.scaleX = 0.8;
        igloo_igloo_26.scaleY = 0.8;
        igloo_igloo_26.flipX = false;
        igloo_igloo_26.flipY = false;
        this.add(igloo_igloo_26);

        // igloo_igloo_7
        const igloo_igloo_7 = new IglooButton(scene, 10, -156);
        igloo_igloo_7.scaleX = 0.8;
        igloo_igloo_7.scaleY = 0.8;
        igloo_igloo_7.flipX = false;
        igloo_igloo_7.flipY = false;
        this.add(igloo_igloo_7);

        // igloo_igloo_11
        const igloo_igloo_11 = new IglooButton(scene, 71, -140);
        igloo_igloo_11.scaleX = 0.8;
        igloo_igloo_11.scaleY = 0.8;
        igloo_igloo_11.flipX = true;
        igloo_igloo_11.flipY = false;
        this.add(igloo_igloo_11);

        // igloo_igloo_4
        const igloo_igloo_4 = new IglooButton(scene, 37, -107);
        igloo_igloo_4.scaleX = 0.8;
        igloo_igloo_4.scaleY = 0.8;
        igloo_igloo_4.flipX = false;
        igloo_igloo_4.flipY = false;
        this.add(igloo_igloo_4);

        // igloo_note
        const igloo_note = scene.add.image(-485, -268, "map", "igloo/note");
        this.add(igloo_note);

        // grey_button
        const grey_button = scene.add.image(476, -286, "main", "grey-button");
        grey_button.angle = 6;
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(476, -288, "main", "grey-x");
        grey_x.angle = 6;
        this.add(grey_x);

        // spinner
        const spinner = scene.add.image(-19, -55, "map", "igloo/spinner");
        spinner.setOrigin(0.5076923076923077, 0.5);
        this.add(spinner);

        // panel
        const panel = scene.add.container(268, -238);
        this.add(panel);

        // igloo_card
        const igloo_card = scene.add.image(197, 318, "map", "igloo/card");
        panel.add(igloo_card);

        // igloo_tape
        const igloo_tape = scene.add.image(5, 0, "map", "igloo/tape");
        igloo_tape.setOrigin(0.5017421602787456, 0.5);
        panel.add(igloo_tape);

        // igloo_item_large
        const igloo_item_large = scene.add.image(183, 72, "map", "igloo/item_large");
        panel.add(igloo_item_large);

        // igloo_icon_player
        const igloo_icon_player = scene.add.image(18, 72, "map", "igloo/icon_player");
        igloo_icon_player.setOrigin(0.5128205128205128, 0.5128205128205128);
        panel.add(igloo_icon_player);

        // username
        const username = scene.add.text(180, 72, "", {});
        username.setOrigin(0.5, 0.5);
        username.setStyle({ "color": "#000", "fixedWidth":270,"fontFamily": "Arial", "fontSize": "24px" });
        panel.add(username);

        // iglooItem_7
        const iglooItem_7 = new IglooItem(scene, 155, 549);
        panel.add(iglooItem_7);

        // iglooItem_6
        const iglooItem_6 = new IglooItem(scene, 155, 497);
        panel.add(iglooItem_6);

        // iglooItem_5
        const iglooItem_5 = new IglooItem(scene, 155, 445);
        panel.add(iglooItem_5);

        // iglooItem_4
        const iglooItem_4 = new IglooItem(scene, 155, 393);
        panel.add(iglooItem_4);

        // iglooItem_3
        const iglooItem_3 = new IglooItem(scene, 155, 341);
        panel.add(iglooItem_3);

        // iglooItem_2
        const iglooItem_2 = new IglooItem(scene, 155, 289);
        panel.add(iglooItem_2);

        // iglooItem_1
        const iglooItem_1 = new IglooItem(scene, 155, 237);
        panel.add(iglooItem_1);

        // iglooItem
        const iglooItem = new IglooItem(scene, 155, 185);
        panel.add(iglooItem);

        // open
        const open = scene.add.text(0, 126, "", {});
        open.text = "Open Igloos";
        open.setStyle({ "color": "#999", "fontFamily": "Burbank Small", "fontSize": "22px", "fontStyle": "bold" });
        panel.add(open);

        // down
        const down = scene.add.container(358, 549);
        panel.add(down);

        // downButton
        const downButton = scene.add.image(0, 2, "main", "grey-button");
        down.add(downButton);

        // downArrow
        const downArrow = scene.add.image(0, 0, "main", "grey-arrow");
        downArrow.flipY = true;
        down.add(downArrow);

        // up
        const up = scene.add.container(358, 180);
        panel.add(up);

        // upButton
        const upButton = scene.add.image(0, 2, "main", "grey-button");
        up.add(upButton);

        // upArrow
        const upArrow = scene.add.image(0, 0, "main", "grey-arrow");
        up.add(upArrow);

        // lists
        const iglooSprites = [igloo_igloo_0, igloo_igloo_1, igloo_igloo_2, igloo_igloo_3, igloo_igloo_4, igloo_igloo_5, igloo_igloo_6, igloo_igloo_7, igloo_igloo_8, igloo_igloo_9, igloo_igloo_10, igloo_igloo_11, igloo_igloo_12, igloo_igloo_13, igloo_igloo_14, igloo_igloo_15, igloo_igloo_16, igloo_igloo_17, igloo_igloo_18, igloo_igloo_19, igloo_igloo_20, igloo_igloo_21, igloo_igloo_22, igloo_igloo_23, igloo_igloo_24, igloo_igloo_25, igloo_igloo_26, igloo_igloo_27, igloo_igloo_28, igloo_igloo_29];
        const items = [iglooItem, iglooItem_1, iglooItem_2, iglooItem_3, iglooItem_4, iglooItem_5, iglooItem_6, iglooItem_7];

        // block (components)
        new Interactive(block);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.visible = false;

        // igloo_item_large (components)
        const igloo_item_largeButton = new Button(igloo_item_large);
        igloo_item_largeButton.spriteName = "igloo/item_large";
        igloo_item_largeButton.callback = () => this.onIglooClick();
        igloo_item_largeButton.activeFrame = false;

        // downButton (components)
        const downButtonButton = new Button(downButton);
        downButtonButton.spriteName = "grey-button";
        downButtonButton.callback = () => this.nextPage();

        // upButton (components)
        const upButtonButton = new Button(upButton);
        upButtonButton.spriteName = "grey-button";
        upButtonButton.callback = () => this.prevPage();

        this.spinner = spinner;
        this.panel = panel;
        this.down = down;
        this.downButton = downButton;
        this.up = up;
        this.upButton = upButton;
        this.iglooSprites = iglooSprites;
        this.items = items;

        /* START-USER-CTR-CODE */

        username.text = this.world.client.penguin.username

        this.tween = scene.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic',
            paused: true
        })

        this.igloos

        this.page = 1
        this.pageSize = 8

        scene.events.on('sleep', this.stopSpinner, this)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get maxPage() {
        return Math.ceil(this.igloos.length / this.pageSize)
    }

    onIglooClick() {
        this.world.client.sendJoinIgloo(this.world.client.id)
    }

    show() {
        this.iglooSprites.map(igloo => igloo.reset())

        this.panel.visible = false
        this.startSpinner()

        this.visible = true
        this.interface.input.setDefaultCursor('default')

        this.network.send('get_igloos')
    }

    setIgloos(igloos) {
        if (!this.visible) {
            return
        }

        // Sort alphabetically
        this.igloos = igloos.sort((a, b) => {
            return a.username.toLowerCase().localeCompare(b.username.toLowerCase())
        })

        this.panel.visible = true
        this.stopSpinner()

        this.showPage()
    }

    showPage() {
        let page = this.igloos.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)

        for (let [index, item] of this.items.entries()) {
            let igloo = page[index]

            if (igloo) {
                item.setItem(igloo)
            } else {
                item.setItem(null)
            }
        }

        this.showIgloos()
        this.updateButtons()
    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) return

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) return

        this.page = page
        this.showPage()
    }

    showIgloos() {
        let max = this.iglooSprites.length

        for (let [index, igloo] of this.igloos.slice(0, max).entries()) {
            let iglooSprite = this.iglooSprites[index]

            if (iglooSprite) {
                iglooSprite.show(igloo)
            }
        }
    }

    updateButtons() {
        let upEnabled = this.page > 1
        let downEnabled = this.page < this.maxPage

        this.upButton.input.enabled = upEnabled
        this.downButton.input.enabled = downEnabled

        this.up.alpha = (upEnabled) ? 1 : 0.6
        this.down.alpha = (downEnabled) ? 1 : 0.6
    }

    startSpinner() {
        this.tween.restart()
        this.tween.play()
        this.spinner.visible = true
    }

    stopSpinner() {
        this.tween.pause()
        this.spinner.angle = 0
        this.spinner.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
