/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
/* START-USER-IMPORTS */

import CardJitsuBattle from './CardJitsuBattle'

/* END-USER-IMPORTS */

export default class CardJitsuPlayer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.username;


        /* START-USER-CTR-CODE */

        this.battle = new CardJitsuBattle(this)

        this.color

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    playBattle(battle) {
        this.battle.play(battle)
    }

    setColor(color) {
        this.battle.setColor(color)
    }

    setBeltColor(color) {
        this.battle.setBeltColor(color)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
