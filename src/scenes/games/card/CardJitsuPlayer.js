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

        this.dealtCards = new Array(5).fill(null)
        this.pick

        this.wins = []
        this.losses = []

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get animating() {
        return this.battle.animating
    }

    getElementWins(element) {
        return this.wins.filter(win => win.elementId == element)
    }

    set(user) {
        this.username.text = user.username.toUpperCase()
        this.color = this.world.getColor(user.color)
    }

    setColor(color) {
        this.battle.setColor(color)
    }

    setBeltColor(color) {
        this.battle.setBeltColor(color)
    }

    playBattle(battle) {
        this.battle.play(battle)

        this.battle.sensei.visible = false

        this.setColor(this.color)
    }

    pickCard(card) {
        for (let dealt of this.dealtCards) {
            dealt.disableInput()
        }

        let index = this.dealtCards.indexOf(card)
        this.dealtCards[index] = null

        card.setState('pick')
        this.pick = card
    }

    cardWin() {
        if (!this.pick) {
            return
        }

        this.wins.push(this.pick)

        this.pick.setState('thumbnail')
        this.pick = null
    }

    cardLose() {
        if (!this.pick) {
            return
        }

        this.losses.push(this.pick)

        this.pick.destroy()
        this.pick = null
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
