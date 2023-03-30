/* START OF COMPILED CODE */

import GameScene from "../GameScene";
import CardJitsuPlayer from "./CardJitsuPlayer";
/* START-USER-IMPORTS */

import CardLoader from '@engine/loaders/CardLoader'
import CardJitsuCard from './card/CardJitsuCard'
import StateMachine from '@engine/utils/state_machine/StateMachine'
import ServeState from './states/ServeState'

/* END-USER-IMPORTS */

export default class CardJitsu extends GameScene {

    constructor() {
        super("CardJitsu");

        /** @type {CardJitsuPlayer} */
        this.player2;
        /** @type {CardJitsuPlayer} */
        this.player1;
        /** @type {Phaser.GameObjects.Image} */
        this.clock;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Text} */
        this.username2;
        /** @type {Phaser.GameObjects.Text} */
        this.username1;
        /** @type {CardJitsuPlayer[]} */
        this.players;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cardjitsu-pack", "assets/media/games/card/cardjitsu-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "cardjitsu", "bg");

        // player2
        const player2 = new CardJitsuPlayer(this, 760, 315);
        this.add.existing(player2);

        // player1
        const player1 = new CardJitsuPlayer(this, 760, 315);
        this.add.existing(player1);
        player1.scaleX = -1;
        player1.scaleY = 1;

        // close
        this.add.image(1464, 57, "cardjitsu", "close0001");

        // help
        const help = this.add.image(754, 26, "cardjitsu", "help");
        help.setOrigin(0.5005370569280344, 0.5004436557231589);

        // panel
        const panel = this.add.image(760, 854, "cardjitsu", "panel");
        panel.setOrigin(0.500351370344343, 0.5);

        // frame
        const frame = this.add.image(758, 480, "cardjitsu", "frame");
        frame.setOrigin(0.5003261578604045, 0.5005192107995846);

        // clock
        const clock = this.add.image(760, 676, "cardjitsu", "clock/clock0001");
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

        // player2 (prefab fields)
        player2.username = username2;

        // player1 (prefab fields)
        player1.username = username1;

        this.player2 = player2;
        this.player1 = player1;
        this.clock = clock;
        this.spinner = spinner;
        this.username2 = username2;
        this.username1 = username1;
        this.players = players;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
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

        // States
        this.stateMachine = new StateMachine({
            'serve': new ServeState(this)
        })

        this.stateMachine.setState('serve')

        this.addListeners()
        this.network.send('start_game')
    }

    addListeners() {
        this.network.events.on('start_game', this.handleStartGame, this)
        this.network.events.on('send_deal', this.handleSendDeal, this)
        this.network.events.on('send_opponent_deal', this.handleSendOpponentDeal, this)
        this.network.events.on('pick_card', this.handlePickCard, this)
        this.network.events.on('reveal_card', this.handleRevealCard, this)
    }

    removeListeners() {
        this.network.events.off('start_game', this.handleStartGame, this)
        this.network.events.off('send_deal', this.handleSendDeal, this)
        this.network.events.off('send_opponent_deal', this.handleSendOpponentDeal, this)
        this.network.events.off('pick_card', this.handlePickCard, this)
        this.network.events.off('reveal_card', this.handleRevealCard, this)
    }

    handleStartGame(args) {
        for (let user of args.users) {
            this.setPlayer(user, args.users.indexOf(user))
        }

        this.events.emit('start_game')
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
        let card = this.opponent.dealtCards[args.card]
        this.opponent.pickCard(card)
    }

    handleRevealCard(args) {
        this.cardLoader.loadCard(args.card, this.onRevealCardLoad)
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

    playBattle(battle) {
        this.player1.playBattle(battle)
        this.player2.playBattle(battle)
    }

    onBattleComplete() {
        if (!this.player1.animating && !this.player2.animating) {
            this.events.emit('battle_complete')
        }
    }

    onDealCardLoad(key, card) {
        let cardPrefab = this.createCard()

        cardPrefab.init(this.myPlayer, 'front', card)
        cardPrefab.icon.setTexture(key)

        cardPrefab.enableInput()
    }

    onRevealCardLoad(key, card) {
        let cardPrefab = this.opponent.pick

        cardPrefab.updateCard(card)
        cardPrefab.icon.setTexture(key)
        cardPrefab.updateState('reveal')
    }

    createCard() {
        let card = new CardJitsuCard(this)
        this.add.existing(card)

        return card
    }

    pickCard(card) {
        this.myPlayer.pickCard(card)
        this.network.send('pick_card', { card: card.id })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
