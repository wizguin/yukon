/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import DraggableContainer from "../../../components/DraggableContainer";
import SenseiMatchItem from "./SenseiMatchItem";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiMatch extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {SenseiMatchItem} */
        this.opponent;
        /** @type {SenseiMatchItem} */
        this.myPlayer;
        /** @type {Phaser.GameObjects.Text} */
        this.text;


        // bg
        const bg = scene.add.image(0, 0, "sensei", "match/window");
        this.add(bg);

        // opponent
        const opponent = new SenseiMatchItem(scene, 0, 98);
        this.add(opponent);

        // myPlayer
        const myPlayer = new SenseiMatchItem(scene, 0, 46);
        this.add(myPlayer);

        // text
        const text = scene.add.text(0, -20, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Waiting for more players";
        text.setStyle({ "align": "center", "fixedWidth":460,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        this.add(text);

        // spinner
        const spinner = scene.add.image(0, -100, "sensei", "match/spinner");
        spinner.setOrigin(0.5, 0.5063291139240507);
        spinner.visible = false;
        this.add(spinner);

        // xButton
        const xButton = scene.add.image(234, -124, "main", "blue-button");
        this.add(xButton);

        // xIcon
        const xIcon = scene.add.image(234, -126, "main", "blue-x");
        this.add(xIcon);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = bg;

        // xButton (components)
        const xButtonButton = new Button(xButton);
        xButtonButton.spriteName = "blue-button";
        xButtonButton.callback = () => this.close();

        this.opponent = opponent;
        this.myPlayer = myPlayer;
        this.text = text;

        /* START-USER-CTR-CODE */

        // Spinner
        scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        this.originalX = this.x
        this.originalY = this.y

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    addListeners() {
        this.network.events.on('join_matchmaking', this.handleJoinMatchmaking, this)
    }

    removeListeners() {
        this.network.events.off('join_matchmaking', this.handleJoinMatchmaking, this)
    }

    show() {
        this.x = this.originalX
        this.y = this.originalY

        this.addListeners()
        this.scene.network.send('join_matchmaking')

        super.show()
    }

    close() {
        this.scene.network.send('leave_matchmaking')
        this.removeListeners()

        super.close()

        this.scene.showMenu('start')
    }

    handleJoinMatchmaking() {
        this.myPlayer.setItem(this.world.client.penguin.username)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
