import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice } from '@components/components'

import SingleButton from './buttons/SingleButton'


/* START OF COMPILED CODE */

export default class CoinPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.text;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.rectangle(0, -40, 708, 584);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // text
        const text = scene.add.text(0, 0, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "You have found a party hat.\nWould you like to pick it up?";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":628,"fixedHeight":136,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // singleButton
        const singleButton = new SingleButton(scene, 0, 130);
        this.add(singleButton);

        // prompt_coin
        const prompt_coin = scene.add.image(0, -182, "main", "prompt_coin");
        this.add(prompt_coin);

        // block (components)
        new Interactive(block);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        this.bg = bg;
        this.text = text;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(coins) {
        this.visible = true

        let newCoins = this.world.client.coins + coins

        if (coins == 1) {
            this.text.text = this.getFormatString('game_over1', newCoins)
        } else {
            this.text.text = this.getFormatString('game_over', coins, newCoins)
        }
    }

    callback() {
        if (this.ruffle.container.visible) {
            this.ruffle.close()
        }

        this.world.client.sendJoinLastRoom()

        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
