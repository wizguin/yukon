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
        this.rank
        this.sensei

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

    get dealtNotNull() {
        return this.dealtCards.filter(Boolean)
    }

    getElementWins(element) {
        return this.wins.filter(win => win.elementId == element)
    }

    set(user) {
        this.seat = this.scene.players.indexOf(this)

        this.username = user.username
        this.usernameText.text = user.username.toUpperCase()

        this.rank = user.ninjaRank

        this.color = this.world.getColor(user.color)

        this.sensei = user.sensei || false
    }

    setColor(color) {
        this.battle.setColor(color)
    }

    setBelt(rank) {
        this.battle.setBelt(this.sensei ? 0 : rank)
    }

    playBattle(battle) {
        this.battle.play(battle)

        this.battle.sensei.visible = this.sensei

        this.setColor(this.color)
        this.setBelt(this.rank)
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
        for (let dealt of this.dealtNotNull) {
            dealt.enableInput()
        }
    }

    disableCards() {
        for (let dealt of this.dealtNotNull) {
            dealt.disableInput()
        }
    }

    findWins(find) {
        return find.map(id => this.wins.find(win => win.id == id)).filter(Boolean)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
