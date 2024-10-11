/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import CardJitsuPlayer from "./CardJitsuPlayer";
import Button from "../../components/Button";
import CardJitsuHelp from "./help/CardJitsuHelp";
import CardJitsuClock from "./clock/CardJitsuClock";
/* START-USER-IMPORTS */

import CardLoader from '@engine/loaders/CardLoader'
import CardJitsuCard from './card/CardJitsuCard'
import CardJitsuPower from './power/CardJitsuPower'

import Rules from './Rules'

/* END-USER-IMPORTS */

export default class CardJitsu extends GameScene {

    constructor() {
        super("CardJitsu");

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {CardJitsuPlayer} */
        this.player2;
        /** @type {CardJitsuPlayer} */
        this.player1;
        /** @type {Phaser.GameObjects.Image} */
        this.closeButton;
        /** @type {CardJitsuHelp} */
        this.help;
        /** @type {Phaser.GameObjects.Image} */
        this.frame;
        /** @type {CardJitsuClock} */
        this.clock;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Text} */
        this.username2;
        /** @type {Phaser.GameObjects.Text} */
        this.username1;
        /** @type {CardJitsuPlayer[]} */
        this.players;
        /** @type {Phaser.GameObjects.Text[]} */
        this.usernames;


        /* START-USER-CTR-CODE */

        window.card = this

        this.music = '116'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cardjitsu-pack", "assets/media/games/card/cardjitsu-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(760, 480, "cardjitsu", "bg");

        // player2
        const player2 = new CardJitsuPlayer(this, 760, 480);
        this.add.existing(player2);

        // player1
        const player1 = new CardJitsuPlayer(this, 760, 480);
        this.add.existing(player1);
        player1.scaleX = -1;
        player1.scaleY = 1;

        // closeButton
        const closeButton = this.add.image(1464, 57, "cardjitsu", "close");

        // help
        const help = new CardJitsuHelp(this, 754, 24);
        this.add.existing(help);

        // panel
        const panel = this.add.image(760, 854, "cardjitsu", "panel");
        panel.setOrigin(0.500351370344343, 0.5);

        // frame
        const frame = this.add.image(758, 480, "cardjitsu", "frame");
        frame.setOrigin(0.5003261578604045, 0.5005192107995846);

        // clock
        const clock = new CardJitsuClock(this, 760, 676);
        this.add.existing(clock);
        clock.visible = false;

        // spinner
        const spinner = this.add.image(760, 482, "cardjitsu", "spinner");

        // username2
        const username2 = this.add.text(1420, 736, "", {});
        username2.setOrigin(1, 0);
        username2.setStyle({ "align": "right", "color": "#000", "fixedWidth":410,"fontFamily": "CCComiccrazy", "fontSize": "28px", "fontStyle": "bold" });

        // username1
        const username1 = this.add.text(100, 736, "", {});
        username1.setStyle({ "color": "#000", "fixedWidth":410,"fontFamily": "CCComiccrazy", "fontSize": "28px", "fontStyle": "bold" });

        // lists
        const players = [player1, player2];
        const usernames = [username1, username2];

        // closeButton (components)
        const closeButtonButton = new Button(closeButton);
        closeButtonButton.spriteName = "close";
        closeButtonButton.callback = () => this.onCloseClick();

        this.bg = bg;
        this.player2 = player2;
        this.player1 = player1;
        this.closeButton = closeButton;
        this.help = help;
        this.frame = frame;
        this.clock = clock;
        this.spinner = spinner;
        this.username2 = username2;
        this.username1 = username1;
        this.players = players;
        this.usernames = usernames;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    async create() {
        this.container = this.add.dom(760, 480)
        this.container.visible = false

        this.battlesPath = 'assets/media/games/card/battles/'

        this.events.once('emulator_ready', this.onEmulatorReady, this)

        this.player = await this.loadEmulator()

        super.create()

        this.myPlayer
        this.opponent

        // Loader
        this.cardLoader = new CardLoader(this)

        this.onDealCardLoad = this.onDealCardLoad.bind(this)
        this.onRevealCardLoad = this.onRevealCardLoad.bind(this)

        // Spinner
        this.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        // Power effects
        this.activePowers = []
        this.powersQueue = []

        this.events.on('battle_complete', this.onBattleComplete, this)

        this.started = false

        this.awards = [4025, 4026, 4027, 4028, 4029, 4030, 4031, 4032, 4033, 104]
        this.rankUp = null

        this.addListeners()

        this.help.depth = 2000
        this.frame.depth = 2001

        this.closeButton.on('pointerdown', this.playCloseSound, this)
    }

    // probably a better way than needing 2 functions for this
    addListeners() {
        this.network.events.on('start_game', this.handleStartGame, this)
        this.network.events.on('send_deal', this.handleSendDeal, this)
        this.network.events.on('send_opponent_deal', this.handleSendOpponentDeal, this)
        this.network.events.on('pick_card', this.handlePickCard, this)
        this.network.events.on('reveal_card', this.handleRevealCard, this)
        this.network.events.on('judge', this.handleJudge, this)
        this.network.events.on('winner', this.handleWinner, this)
        this.network.events.on('close_game', this.handleCloseGame, this)
        this.network.events.on('award', this.handleAward, this)
    }

    removeListeners() {
        this.network.events.off('start_game', this.handleStartGame, this)
        this.network.events.off('send_deal', this.handleSendDeal, this)
        this.network.events.off('send_opponent_deal', this.handleSendOpponentDeal, this)
        this.network.events.off('pick_card', this.handlePickCard, this)
        this.network.events.off('reveal_card', this.handleRevealCard, this)
        this.network.events.off('judge', this.handleJudge, this)
        this.network.events.off('winner', this.handleWinner, this)
        this.network.events.off('close_game', this.handleCloseGame, this)
        this.network.events.off('close_game', this.handleCloseGame, this)
        this.network.events.off('award', this.handleAward, this)
    }

    async loadEmulator() {
        const ruffle = window.RufflePlayer.newest()
        const player = ruffle.createPlayer()

        this.container.setElement(player, {
            width: '100%',
            height: '100%',
            pointerEvents: 'auto'
        })

        // Position dom below canvas
        this.game.domContainer.style.zIndex = -10

        await player.load({
            url: 'assets/media/games/card/battle.swf',
            allowScriptAccess: true,
            menu: false,
            contextMenu: false,
            scale: 'noborder',
            autoplay: 'on',

            logLevel: 'info',
            splashScreen: false
        })

        return player
    }

    onEmulatorReady() {
        this.bg.visible = false
        this.container.visible = true

        this.network.send('start_game')
    }

    getBattlesPath() {
        return this.battlesPath
    }

    getColor(seat) {
        return this.players[seat].color
    }

    getSensei(seat) {
        return this.players[seat].sensei
    }

    getRank(seat) {
        return this.players[seat].rank
    }

    handleStartGame(args) {
        for (let user of args.users) {
            this.setPlayer(user, args.users.indexOf(user))
        }

        this.spinner.visible = false
        this.playBattle('walk')

        this.started = true
    }

    handleSendDeal(args) {
        for (let card of args.cards) {
            this.cardLoader.loadCard(card, this.onDealCardLoad)
        }
    }

    handleSendOpponentDeal(args) {
        for (let i = 0; i < args.deal; i++) {
            let cardPrefab = this.createCard()

            cardPrefab.init(this.opponent, 'back')
        }
    }

    handlePickCard(args) {
        if (this.opponent.pick) {
            this.events.once('remove_pick', () => this.handlePickCard(args))
            return
        }

        let card = this.opponent.dealtCards[args.card]
        this.opponent.pickCard(card)
    }

    handleRevealCard(args) {
        this.cardLoader.loadCard(args.card, this.onRevealCardLoad)
    }

    handleJudge(args) {
        let cardPrefab = this.opponent.pick

        cardPrefab.setState('reveal')

        this.events.once('flipped', () => this.onFlipped(args.winner))
    }

    handleWinner(args) {
        // Remove original handler
        this.events.off('battle_complete')

        this.events.once('battle_complete', () => this.onLastBattle(args.winner, args.cards))
    }

    handleCloseGame(args) {
        this.interface.prompt.showWindow(this.getFormatString('player_quit_prompt', args.username))

        // remove this delay when BUG with 2 players joining the same room at exactly the same time is fixed
        // currently add_player breaks because the previous room hasn't shut down yet
        this.time.delayedCall(500, () => this.sendLeaveGame())
    }

    handleAward(args) {
        this.rankUp = args.rank

        this.addAward(this.awards[args.rank - 1])
    }

    addAward(award) {
        let type = award == 104 ? 'face' : 'body'

        // this should be abstracted, user inventory could be its own class
        if (this.world.client.inventory[type].includes(award)) {
            return
        }

        this.world.client.inventory[type].push(award)
        this.world.client.inventory[type].sort((a, b) => a - b)
    }

    setPlayer(user, index) {
        let player = this.players[index]
        player.set(user)

        if (this.world.isClientUsername(user.username)) {
            this.myPlayer = player
        } else {
            this.opponent = player
        }
    }

    onBattleComplete() {
        this.playBattle('ambient')

        this.network.send('send_deal')
    }

    onFlipped(winner) {
        if (winner == -1) {
            this.onFlippedTie()
        } else {
            this.onFlippedWin(winner)
        }

        this.checkPowersOnPlayed()

        this.processPowers()
    }

    onFlippedTie() {
        this.events.once('powers_complete', this.judgeTie, this)
    }

    onFlippedWin(winner) {
        let winCard = this.players[winner].pick

        this.checkPowerOnScored(this.players[winner], winCard)

        this.events.once('powers_complete', () => this.judge(winner, winCard))
    }

    // powers start

    checkPowersOnPlayed() {
        this.checkPowerOnPlayed(this.player1, this.player1.pick)
        this.checkPowerOnPlayed(this.player2, this.player2.pick)
    }

    checkPowerOnPlayed(player, card) {
        if (this.hasPower(card) && Rules.onPlayed.includes(card.powerId)) {
            this.addPower(player, card)
        }
    }

    checkPowerOnScored(player, card) {
        if (this.hasPower(card) && !Rules.onPlayed.includes(card.powerId)) {
            this.addPower(player, card)
        }
    }

    hasPower(card) {
        return card.powerId > 0
    }

    addPower(player, card) {
        if (card.powerId == 1) {
            let hasReverse = this.activePowers.some(power => power.isReverseEffect & power.isPick)

            if (hasReverse) {
                return
            }
        }

        let power = new CardJitsuPower(this, player, card)

        this.add.existing(power)

        this.activePowers.push(power)
    }

    removePower(power) {
        let index = this.activePowers.indexOf(power)

        this.activePowers.splice(index, 1)
    }

    processPowers() {
        this.powersQueue = this.activePowers.slice()

        this.nextPower()
    }

    nextPower() {
        if (!this.powersQueue.length) {
            this.events.emit('powers_complete')
            return
        }

        let next = this.powersQueue.shift()

        next.process()
    }

    // powers end

    onDealCardLoad(key, card) {
        let cardPrefab = this.createCard()

        cardPrefab.init(this.myPlayer, 'front', card)
        cardPrefab.icon.setTexture(key)
    }

    onRevealCardLoad(key, card) {
        let cardPrefab = this.opponent.pick

        cardPrefab.updateCard(card)
        cardPrefab.icon.setTexture(key)
    }

    onLastBattle(winSeat, winCards = []) {
        this.playBattle('ambient')

        let winner = this.players[winSeat]
        let cards = winner.findWins(winCards)

        for (let i = 0; i < cards.length; i++) {
            cards[i].tweenToOver(i)
        }

        this.stopMusic()
        this.soundManager.play('end')

        this.time.delayedCall(1000, () => this.playGameOver(winSeat, !winCards.length))
    }

    onCloseClick() {
        if (!this.started) {
            this.sendLeaveGame()
            return
        }

        this.showCloseGamePrompt()
    }

    getOppositeSeat(seat) {
        return (seat + 1) % 2
    }

    playBattle(battle, winSeat = null) {
        this.player.loadBattle(battle, winSeat)
    }

    createCard() {
        let card = new CardJitsuCard(this)
        this.add.existing(card)

        return card
    }

    allCardsDealt() {
        this.myPlayer.enableCards()
        this.updateDisabledCards()

        this.clock.start()
        this.help.unlock()
    }

    updateDisabledCards() {
        let limit = this.activePowers.find(power => power.isLimiter && power.player != this.myPlayer)

        if (limit) {
            this.disableElement(limit)
        }
    }

    disableElement(power) {
        let element = Rules.limiters[power.powerId]

        this.myPlayer.disableElement(element)
    }

    timeUp() {
        let pickable = this.myPlayer.pickableCards

        if (pickable.length) {
            let random = Phaser.Math.RND.pick(pickable)

            this.pickCard(random)
        }
    }

    pickCard(card) {
        if (this.myPlayer.pick || !this.myPlayer.pickableCards.includes(card)) {
            return
        }

        this.myPlayer.pickCard(card)
        this.network.send('pick_card', { card: card.id })

        this.clock.stop()
        this.help.lock()
    }

    judge(winner, winCard) {
        if (winner == this.myPlayer.seat) {
            this.judgeWin(winner, winCard)
        } else {
            this.judgeLoss(winner, winCard)
        }
    }

    judgeTie() {
        this.players.forEach(player => player.cardLose())

        this.playBattle('tie')
        this.soundManager.play('tie')
    }

    judgeWin(winSeat, winCard) {
        this.myPlayer.cardWin()
        this.opponent.cardLose()

        this.judgePlayBattle(winSeat, winCard)
    }

    judgeLoss(winSeat, winCard) {
        this.myPlayer.cardLose()
        this.opponent.cardWin()

        this.judgePlayBattle(winSeat, winCard)
    }

    judgePlayBattle(winSeat, winCard) {
        let battle = winCard.powerId == 0 ? winCard.elementId : `pow_${winCard.id}`

        this.playBattle(battle, winSeat)
    }

    playGameOver(winSeat, hasNoCards) {
        this.playBattle('tie')

        let callback = () => this.time.delayedCall(500, () => this.showGameOverPrompt(winSeat, hasNoCards))

        this.events.once('battle_complete', callback)
    }

    showCloseGamePrompt() {
        this.interface.prompt.showWindow(this.getString('quit_game_prompt'), 'dual', () => {
            this.sendLeaveGame()

            this.interface.prompt.window.visible = false
        })
    }

    showGameOverPrompt(winSeat, hasNoCards) {
        let message = this.getGameOverMessage(winSeat, hasNoCards)

        this.interface.prompt.showWindow(message, 'single', () => {
            this.winsPromptCallback()

            this.interface.prompt.window.visible = false
        })
    }

    getGameOverMessage(winSeat, hasNoCards) {
        let username = this.players[winSeat].username
        let message = this.getFormatString('wins', username)

        if (!hasNoCards) {
            return message
        }

        let loserUsername = this.players[this.getOppositeSeat(winSeat)].username
        let loserMessage = this.getFormatString('sudden_death', loserUsername)

        return `${loserMessage}\n${message}`
    }

    winsPromptCallback() {
        if (!this.rankUp) {
            this.sendLeaveGame()
            return
        }

        this.interface.events.once('sensei_ready', () => {
            this.interface.loadedWidgets.Sensei.rankUp(this.rankUp)
        })

        this.interface.loadWidget('Sensei')
    }

    sendLeaveGame() {
        this.network.send('leave_game')
        this.leaveGame()
    }

    leaveGame() {
        this.removeListeners()

        // destroying room scene would remove need to remove these events
        this.events.off('battle_complete')
        this.events.off('flipped')
        this.events.off('remove_pick')
        this.events.off('powers_complete')

        this.game.domContainer.style.zIndex = 'auto'

        this.world.client.sendJoinLastRoom()
    }

    playCloseSound() {
        this.soundManager.play('switch')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
