/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
/* START-USER-IMPORTS */

import CardJitsuBattle from './CardJitsuBattle'

/* END-USER-IMPORTS */

export default class CardJitsuPlayer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /* START-USER-CTR-CODE */

        this.battle = new CardJitsuBattle(this)

        this.playBattle('ambient')
        this.setColor(0x009900)
        this.setBeltColor(4473924)

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
