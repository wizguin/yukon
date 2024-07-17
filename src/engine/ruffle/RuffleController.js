import BaseScene from '@scenes/base/BaseScene'


export default class RuffleController extends BaseScene {

    constructor(key) {
        super(key)

        this.player = null
        this.container = null

        this.isActive = false

        this.basePath = 'assets/media/flash/'
        this.gamesPath = `${this.basePath}games/`
        this.path = ''

        window.ruffle = this

        this.keys = [
            'getGamesPath',
            'getMyPlayer',
            'getMyPlayerHex',
            'getMyPlayerId',
            'getPlayerObjectById',
            'isItemOnMyPlayer',
            'isMyPlayerMember',
            'sendGameOver',
            'sendJoinLastRoom',
            'buyInventory'
        ]
    }

    get client() {
        return this.world.client
    }

    get clientObject() {
        return this.client.penguin.items.flat
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
        const gamePath = game.path || `${game.key}/bootstrap.swf`

        this.path = `${this.gamesPath}${gamePath}`
        this.music = game.music || 0

        this.boot()
    }

    boot() {
        this.isActive = true

        const ruffle = window.RufflePlayer.newest()

        this.player = ruffle.createPlayer()

        this.container.setElement(this.player, this.playerStyle)

        this.player.load({
            url: `${this.basePath}boot.swf`,
            allowScriptAccess: true,
            menu: false,
            contextMenu: 'off',
            scale: 'noborder',
            autoplay: 'on',
            splashScreen: false,

            logLevel: localStorage.logging === 'true'
                ? 'info'
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
        setTimeout(() => {
            this.player.pause()
        }, 100)

        this.container.visible = false
        this.isActive = false

        this.stopMusic()
        this.resetDepth()

        this.scene.sleep()
    }

    getKeys() {
        return this.keys
    }

    getPath() {
        return this.path
    }

    getFrameColor() {
        return this.crumbs.frameColor
    }

    getGamesPath() {
        return this.gamesPath
    }

    getMyPlayer() {
        return this.clientObject
    }

    getMyPlayerHex() {
        return this.world.getColor(this.client.penguin.color)
    }

    getMyPlayerId() {
        return this.client.id
    }

    getPlayerObjectById([id]) {
        if (id === this.client.id) {
            return this.clientObject
        }
    }

    isItemOnMyPlayer([id]) {
        return Object.values(this.clientObject).includes(id)
    }

    isMyPlayerMember() {
        return true
    }

    sendGameOver(obj) {
        this.network.send('game_over', { coins: obj.coins })

        this.sendToBack()
    }

    sendJoinLastRoom() {
        this.close()

        this.world.client.sendJoinLastRoom()
    }

    buyInventory([itemId]) {
        this.interface.prompt.showItem(itemId)
    }

    startGameMusic() {
        const music = this.music

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

    getMyLastRoom() {
        return this.world.lastRoom
    }

    joinRoom(roomId) {
        this.close()

        if (roomId in this.crumbs.scenes.rooms) {
            const room = this.crumbs.scenes.rooms[roomId]

            this.world.client.sendJoinRoom(roomId, room.key, room.x, room.y)
        }
    }

    resetDepth() {
        this.game.domContainer.style.zIndex = 'auto'
    }

    sendToBack() {
        this.game.domContainer.style.zIndex = -10
    }

}
