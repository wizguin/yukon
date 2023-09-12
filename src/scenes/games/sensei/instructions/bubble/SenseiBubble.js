/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
import SenseiBubbleWalk from "./SenseiBubbleWalk";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiBubble extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.bubble;
        /** @type {SenseiBubbleWalk} */
        this.senseiBubbleWalk2;
        /** @type {SenseiBubbleWalk} */
        this.senseiBubbleWalk1;
        /** @type {Phaser.GameObjects.Image} */
        this.maskImage;
        /** @type {SenseiBubbleWalk[]} */
        this.walks;


        // bubble
        const bubble = scene.add.sprite(0, 0, "senseiinstructions", "bubble/bubble0030");
        bubble.setOrigin(0.5006226650062267, 0.5008976660682226);
        this.add(bubble);

        // senseiBubbleWalk2
        const senseiBubbleWalk2 = new SenseiBubbleWalk(scene, 226, 11);
        this.add(senseiBubbleWalk2);

        // senseiBubbleWalk1
        const senseiBubbleWalk1 = new SenseiBubbleWalk(scene, -102, 11);
        senseiBubbleWalk1.scaleX = -1;
        senseiBubbleWalk1.scaleY = 1;
        this.add(senseiBubbleWalk1);

        // maskImage
        const maskImage = scene.add.image(0, 0, "senseiinstructions", "bubble/mask");
        maskImage.setOrigin(0.5006226650062267, 0.5008976660682226);
        maskImage.visible = false;
        this.add(maskImage);

        // lists
        const walks = [senseiBubbleWalk1, senseiBubbleWalk2];

        this.bubble = bubble;
        this.senseiBubbleWalk2 = senseiBubbleWalk2;
        this.senseiBubbleWalk1 = senseiBubbleWalk1;
        this.maskImage = maskImage;
        this.walks = walks;

        /* START-USER-CTR-CODE */

        this.startWalkIndex = 29
        this.endWalkIndex = 87

        bubble.on('animationupdate', this.onBubbleAnimUpdate, this)

        this.setMask()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        this.bubble.play('instructions/bubble')
    }

    get clientColor() {
        return this.world.client.penguin.items.all.color.id
    }

    showCompete() {
        this.setPlayerWalk(0)
        this.setOpponentWalk(6, 2)

        this.show()
    }

    showBlackBelt() {
        this.setPlayerWalk(9)
        this.setOpponentWalk(14, 0, true)

        this.show()
    }

    setPlayerWalk(rank) {
        this.setWalk(this.walks[0], this.clientColor, rank)
    }

    setOpponentWalk(color, rank, sensei = false) {
        this.setWalk(this.walks[1], color, rank, sensei)
    }

    setWalk(walk, color, rank, sensei = false) {
        walk.setColor(color)
        walk.setBelt(rank)
        walk.setSensei(sensei)
    }

    setMask() {
        const matrix = this.maskImage.getWorldTransformMatrix()

        // Set correct mask position
        this.maskImage.x = matrix.getX(0, 0)
        this.maskImage.y = matrix.getY(0, 0)

        const mask = this.maskImage.createBitmapMask()

        this.walks.forEach(walk => walk.setMask(mask))
    }

    onBubbleAnimUpdate(_, frame) {
        switch (frame.index) {
            case this.startWalkIndex:
                this.walks.forEach(walk => walk.show())
                break

            case this.endWalkIndex:
                this.walks.forEach(walk => walk.close())
                break
        }
    }

    stop() {
        this.bubble.stop()
        this.walks.forEach(walk => walk.close())
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
