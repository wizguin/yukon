import BaseScene from '@scenes/base/BaseScene'


export default class RuffleController extends BaseScene {

    constructor(key) {
        super(key)

        this.player
        this.container

        this.basePath = 'assets/media/flash/'
        this.path

        window.ruffle = this

        this.keys = [
            'getGamesPath',
            'getPlayerObjectById',
            'getMyPlayerHex',
            'isMyPlayerMember',
            'isItemOnMyPlayer',
            'sendGameOver'
        ]
    }

    create() {
        window.RufflePlayer = window.RufflePlayer || {}

        this.playerStyle = {
            width: '100%',
            height: '100%',
            pointerEvents: 'auto'
        }

        this.container = this.add.dom(760, 480)
        this.container.visible = false
    }

    bootGame(game) {
        this.path = `games/${game.key}/bootstrap.swf`
        this.music = game.music || 0

        this.boot()
    }

    boot() {
        let ruffle = window.RufflePlayer.newest()
        this.player = ruffle.createPlayer()

        this.container.setElement(this.player, this.playerStyle)

        this.player.load({
            url: `${this.basePath}boot.swf`,
            allowScriptAccess: true,
            menu: false,
            contextMenu: false,
            scale: 'noborder',
            autoplay: 'on',

            logLevel: (localStorage.logging == 'true')
                ? 'trace'
                : 'error'
        })
    }

    onLoadComplete() {
        this.interface.hideLoading()
        this.interface.hideInterface()

        this.stopMusic()

        this.container.visible = true
    }

    close() {
        this.game.domContainer.style.zIndex = 'auto'

        setTimeout(() => {
            this.player.pause()
        }, 100)

        this.container.visible = false
        this.stopMusic()
    }

    getKeys() {
        return this.keys
    }

    getPath() {
        return `${this.basePath}${this.path}`
    }

    getFrameColor() {
        return this.crumbs.frameColor
    }

    getMyPlayer() {
        // todo
    }

    getGamesPath() {
        return `${this.basePath}games/`
    }

    getPlayerObjectById() {
        // todo
    }

    getMyPlayerHex() {
        return this.world.getColor(this.world.client.penguin.color)
    }

    isMyPlayerMember() {
        return true
    }

    isItemOnMyPlayer() {
        // todo
    }

    sendGameOver(obj) {
        this.network.send('game_over', { coins: obj.coins })

        this.game.domContainer.style.zIndex = -10
    }

    startGameMusic() {
        let music = this.music

        if (!music) {
            return
        }

        if (this.cache.audio.exists(music)) {
            return this.playMusic(music)
        }

        this.load.audio(music, `assets/media/music/${music}.mp3`)
        this.load.start()

        this.load.once(`filecomplete-audio-${music}`, () => {
            this.playMusic(music)
        })
    }

}
