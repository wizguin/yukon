/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
/* START-USER-IMPORTS */

import CardJitsuBattle from './CardJitsuBattle'

/* END-USER-IMPORTS */

export default class CardJitsuPlayer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /* START-USER-CTR-CODE */

        this.seat
        this.username

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

    get usernameText() {
        return this.scene.usernames[this.seat]
    }

    getElementWins(element) {
        return this.wins.filter(win => win.elementId == element)
    }

    set(user) {
        this.seat = this.scene.players.indexOf(this)

        this.username = user.username
        this.usernameText.text = user.username.toUpperCase()

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
        this.disableCards()

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
        this.removePick()
    }

    cardLose() {
        if (!this.pick) {
            return
        }

        this.losses.push(this.pick)

        this.pick.destroy()
        this.removePick()
    }

    removePick() {
        this.pick = null

        if (this === this.scene.opponent) {
            this.scene.events.emit('remove_pick')
        }
    }

    enableCards() {
        for (let dealt of this.dealtCards) {
            if (dealt) {
                dealt.enableInput()
            }
        }
    }

    disableCards() {
        for (let dealt of this.dealtCards) {
            if (dealt) {
                dealt.disableInput()
            }
        }
    }

    findWins(find) {
        return find.map(id => this.wins.find(win => win.id == id)).filter(Boolean)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
