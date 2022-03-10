import BaseContainer from '@scenes/base/BaseContainer'

import Button from '@scenes/components/Button'
import Interactive from '@scenes/components/Interactive'
import SimpleButton from '@scenes/components/SimpleButton'

import FindFourPlayer from './FindFourPlayer'


/* START OF COMPILED CODE */

export default class FindFour extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.hover;
        /** @type {Phaser.GameObjects.Image[]} */
        this.placers;


        // window
        const window = scene.add.image(0, 0, "four", "window");
        this.add(window);

        // shadow
        const shadow = scene.add.image(0, -44, "four", "shadow");
        this.add(shadow);

        // placer6
        const placer6 = scene.add.image(-146, 77, "four", "counter_1");
        placer6.visible = false;
        this.add(placer6);

        // placer5
        const placer5 = scene.add.image(-146, 29, "four", "counter_1");
        placer5.visible = false;
        this.add(placer5);

        // placer4
        const placer4 = scene.add.image(-146, -20, "four", "counter_1");
        placer4.visible = false;
        this.add(placer4);

        // placer3
        const placer3 = scene.add.image(-146, -68, "four", "counter_1");
        placer3.visible = false;
        this.add(placer3);

        // placer2
        const placer2 = scene.add.image(-146, -117, "four", "counter_1");
        placer2.visible = false;
        this.add(placer2);

        // placer1
        const placer1 = scene.add.image(-146, -165, "four", "counter_1");
        placer1.visible = false;
        this.add(placer1);

        // placer0
        const placer0 = scene.add.image(-146, -205, "four", "counter_1");
        placer0.visible = false;
        this.add(placer0);

        // board
        const board = scene.add.image(0, -44, "four", "board");
        this.add(board);

        // player2
        const player2 = new FindFourPlayer(scene, -126, 232);
        this.add(player2);

        // player1
        const player1 = new FindFourPlayer(scene, -126, 172);
        this.add(player1);

        // hover
        const hover = scene.add.image(-145, -194, "four", "button/counter_1");
        hover.setOrigin(0.5, 0.7);
        hover.visible = false;
        this.add(hover);

        // x_button
        const x_button = scene.add.image(181, -243, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(181, -245, "main", "blue-x");
        this.add(blue_x);

        // lists
        const placers = [placer0, placer1, placer2, placer3, placer4, placer5, placer6];

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        this.hover = hover;
        this.placers = placers;

        /* START-USER-CTR-CODE */

        this.scene = scene

        this.map = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
        this.buttons = []

        this.shadowIndex = this.getIndex(shadow)

        this.handleStartGame()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    handleStartGame() {
        // Create buttons
        let x = -146

        for (let column = 0; column < 7; column++) {
            let button = this.scene.add.image(x, -194, 'four', 'button/button')

            button.setOrigin(0.5, 0.078125)
            this.add(button)
            this.buttons.push(button)

            let component = new SimpleButton(button)

            component.callback = () => this.onButtonClick(column)
            component.hoverCallback = () => this.onButtonOver(button)
            component.hoverOutCallback = () => this.onButtonOut()

            x += 48.6
        }
    }

    onButtonClick(column) {
        this.addCounter(column, 5)
    }

    onButtonOver(button) {
        this.hover.visible = true

        this.hover.x = button.x
        this.hover.y = button.y
    }

    onButtonOut() {
        this.hover.visible = false
    }

    addCounter(x, y, drop = true) {
        y++

        // Get x from column button position
        let counterX = this.buttons[x].x
        // Get y from placer position
        let counterY = this.placers[0].y

        let counter = this.scene.add.image(counterX, counterY, 'four', 'counter_1')

        if (!drop) {
            counter.y = this.placers[y].y
        } else {
            this.playDrop(counter, y)
        }

        this.addAt(counter, this.shadowIndex + 1)
    }

    playDrop(counter, y) {
        let i = 0

        let timer = this.scene.time.addEvent({
            delay: 38,
            callback: () => {
                counter.y = this.placers[i].y

                if (i == y) {
                    this.scene.sound.play('drop', { volume: 0.5 })
                    this.scene.time.removeEvent(timer)
                }

                i++
            },
            repeat: y
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
