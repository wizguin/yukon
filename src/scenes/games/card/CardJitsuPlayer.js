/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardJitsuPlayer extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /* START-USER-CTR-CODE */

        this.seat
        this.username

        this.color
        this.sensei
        this.rank

        this.dealtCards = new Array(5).fill(null)
        this.pick

        this.wins = []
        this.losses = []

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get usernameText() {
        return this.scene.usernames[this.seat]
    }

    get dealtNotNull() {
        return this.dealtCards.filter(Boolean)
    }

    get pickableCards() {
        return this.dealtNotNull.filter(card => !card.isDisabled)
    }

    getElementWins(element) {
        return this.wins.filter(win => win.elementId == element)
    }

    getColorWins(color) {
        return this.wins.filter(win => win.color == color)
    }

    set(user) {
        this.seat = this.scene.players.indexOf(this)

        this.username = user.username
        this.usernameText.text = user.username.toUpperCase()

        this.color = this.world.getColor(user.color)

        this.sensei = user.sensei || false

        this.rank = user.ninjaRank
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

        this.pick.explode()
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
        return this.wins.filter(card => find.includes(card.id))
    }

    disableElement(element) {
        for (let card of this.dealtNotNull) {
            if (card.elementId == element) {
                card.disableCard()
            }
        }
    }

    discardElement(element) {
        let elementWins = this.getElementWins(element)

        if (elementWins.length) {
            this.discardCard(elementWins.pop())
        }
    }

    discardColor(color) {
        let colorWins = this.getColorWins(color)

        // Order by element
        let order = { f: 1, w: 2, s: 3 }
        colorWins.sort((a, b) => order[a.elementId] - order[b.elementId])

        if (colorWins.length) {
            this.discardCard(colorWins.shift())
        }
    }

    discardCard(card) {
        this.wins.splice(this.wins.indexOf(card), 1)

        card.destroy()
    }

    arrangeWinCards() {
        for (let card of this.wins) {
            card.tweenToWin()
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
