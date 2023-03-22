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

    set(user, turn) {
        this.username.text = user.username.toUpperCase()
        this.color = this.world.getColor(user.color)
    }

    playBattle(battle) {
        this.battle.play(battle)

        this.battle.sensei.visible = false

        this.setColor(this.color)
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
