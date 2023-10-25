/* START OF COMPILED CODE */

import BaseContainer from "../../../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardJitsuExplosion extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Sprite} */
        this.poof;
        /** @type {Phaser.GameObjects.Sprite} */
        this.start;


        // poof
        const poof = scene.add.sprite(8, -24, "cardjitsu", "card/explosion/poof/poof0008");
        poof.setOrigin(0.5006501950585176, 0.5);
        poof.visible = false;
        this.add(poof);

        // start
        const start = scene.add.sprite(0, 0, "cardjitsu", "card/explosion/start");
        start.setOrigin(0.5014577259475219, 0.5016722408026756);
        start.visible = false;
        this.add(start);

        this.poof = poof;
        this.start = start;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        super.show()

        this.start.once('animationcomplete', this.showPoof, this)
        this.start.play('card/explosion/start')
    }

    showPoof() {
        this.poof.once('animationcomplete', this.close, this)
        this.poof.play('card/explosion/poof')

        this.soundManager.play('explosion', { volume: 1.5 })
    }

    close() {
        super.close()

        // Destroy card
        this.parentContainer.destroy()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
