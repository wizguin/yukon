import State from '@engine/utils/state_machine/State'


export default class InitState extends State {

    constructor(scene) {
        super()

        this.scene = scene
        this.network = scene.network
    }

    enter() {
        this.scene.events.on('start_game', this.startGame, this)
        this.scene.events.on('battle_complete', this.battleComplete, this)
    }

    exit() {
        this.scene.events.off('start_game', this.startGame, this)
        this.scene.events.off('battle_complete', this.battleComplete, this)
    }

    startGame() {
        this.scene.spinner.visible = false
        this.scene.playBattle('walk')
    }

    battleComplete() {
        this.scene.playBattle('ambient')
        this.network.send('send_deal', { deal: 5 })
    }

}
