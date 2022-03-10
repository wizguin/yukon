import BaseContainer from '@scenes/base/BaseContainer'

import SimpleButton from '@scenes/components/SimpleButton'
import Interactive from '@scenes/components/Interactive'

import FindFourPlayer from './FindFourPlayer'


/* START OF COMPILED CODE */

export default class FindFour extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.hover;


        // window
        const window = scene.add.image(0, 0, "four", "window");
        this.add(window);

        // board
        const board = scene.add.image(0, -44, "four", "board");
        this.add(board);

        // findFourPlayer
        const findFourPlayer = new FindFourPlayer(scene, -126, 172);
        this.add(findFourPlayer);

        // findFourPlayer_1
        const findFourPlayer_1 = new FindFourPlayer(scene, -126, 232);
        this.add(findFourPlayer_1);

        // hover
        const hover = scene.add.image(-146, -194, "four", "button/counter_1");
        hover.setOrigin(0.5, 0.7);
        this.add(hover);

        this.hover = hover;

        /* START-USER-CTR-CODE */

        this.scene = scene
        this.handleStartGame()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    handleStartGame() {
        // Create buttons
        let x = -146

        for (let i = 0; i < 7; i++) {
            let button = this.scene.add.image(x, -194, 'four', 'button/button')

            button.setOrigin(0.5, 0.078125)
            this.add(button)

            let component = new SimpleButton(button)

            component.hoverCallback = () => this.onButtonOver(button)
            component.hoverOutCallback = () => this.onButtonOut()

            x += 48.6
        }
    }

    onButtonOver(button) {
        this.hover.visible = true

        this.hover.x = button.x
        this.hover.y = button.y
    }

    onButtonOut() {
        this.hover.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
