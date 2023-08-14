/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiSprite extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.base;
        /** @type {Phaser.GameObjects.Sprite} */
        this.beard;
        /** @type {Phaser.GameObjects.Sprite} */
        this.beak;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eyebrows;
        /** @type {Phaser.GameObjects.Sprite} */
        this.front;


        // base
        const base = scene.add.sprite(0, 0, "sensei", "sensei/talk/base/base0001");
        base.setOrigin(0.501039501039501, 0.5);
        this.add(base);

        // beard
        const beard = scene.add.sprite(66, 118, "sensei", "sensei/talk/beard/beard0001");
        this.add(beard);

        // beak
        const beak = scene.add.sprite(84, -111, "sensei", "sensei/talk/beak/beak0001");
        beak.setOrigin(0.5, 0.5037593984962406);
        this.add(beak);

        // eyebrows
        const eyebrows = scene.add.sprite(45, -148, "sensei", "sensei/talk/eyebrows/eyebrows0001");
        eyebrows.setOrigin(0.5, 0.5027624309392266);
        this.add(eyebrows);

        // front
        const front = scene.add.sprite(71, 182, "sensei", "sensei/talk/front/front0001");
        front.setOrigin(0.5009487666034156, 0.5);
        this.add(front);

        this.base = base;
        this.beard = beard;
        this.beak = beak;
        this.eyebrows = eyebrows;
        this.front = front;

        /* START-USER-CTR-CODE */

        this.currentAnim

        this.playWait()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    playTalk() {
        this.playAnims('talk')
    }

    playWait() {
        this.playAnims('wait')
    }

    playAnims(key) {
        if (key === this.currentAnim) {
            return
        }

        this.currentAnim = key

        this.base.play(`${key}/base`)
        this.beak.play(`${key}/beak`)
        this.beard.play(`${key}/beard`)
        this.eyebrows.play(`${key}/eyebrows`)
        this.front.play(`${key}/front`)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
