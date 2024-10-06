import BaseScene from '@scenes/base/BaseScene'

import Hint from '@scenes/interface/game/hint/Hint'
import MetricsManager from './metrics/MetricsManager'
import PromptController from './prompt/PromptController'


const Status = Phaser.Scenes

export default class InterfaceController extends BaseScene {

    metricsManager = new MetricsManager()

    goingToSleep = new Set()

    create() {
        this.hint = new Hint(this, 0, 0)
        this.add.existing(this.hint)

        this.prompt = new PromptController(this)

        this.widgets = this.crumbs.widgets
        // Dynamically loaded widgets
        this.loadedWidgets = {}

        // Draw frame
        const graphics = this.add.graphics()

        graphics.lineStyle(16, this.crumbs.frameColor, 1)
        graphics.strokeRoundedRect(0, 0, 1520, 960, 15)
        graphics.depth = 100

        // Last scene interacted with
        this.lastScene
    }

    get loading() {
        return this.scene.get('Load')
    }

    get main() {
        return this.scene.get('Main')
    }

    get iglooEdit() {
        return this.scene.get('IglooEdit')
    }

    showLoading(text = '', showBar = false) {
        if (this.scene.isActive(this.loading)) {
            this.loading.setContent(text, showBar)

        } else {
            this.hideInterface()
            this.runScene(this.loading, { text, showBar })
        }
    }

    showInterface() {
        this.hideLoading()
        this.runScene(this.main)
    }

    showIglooEdit() {
        this.runScene(this.iglooEdit)
    }

    hideLoading() {
        this.sleepScene(this.loading)
    }

    hideInterface(clearChat = true) {
        this.sleepScene(this.main, { clearChat })
    }

    hideIglooEdit() {
        this.sleepScene(this.iglooEdit)
    }

    runScene(scene, data = {}) {
        if (!scene) return

        const status = this.scene.getStatus(scene)

        if (status < Status.START) {
            this.scene.launch(scene, data)
        } else {
            this.scene.wake(scene, data)
        }

        this.bringToTop(scene)
    }

    sleepScene(scene, data = {}) {
        if (!scene) return

        const status = this.scene.getStatus(scene)

        if (status !== Status.CREATING && status !== Status.RUNNING) {
            return
        }

        // Prevent sleep from being queued multiple times
        if (this.goingToSleep.has(scene)) {
            return
        }

        this.goingToSleep.add(scene)

        this.scene.sleep(scene, data)
        scene.events.once('sleep', () => this.goingToSleep.delete(scene))
    }

    bringToTop(scene = null) {
        if (scene) {
            this.scene.bringToTop(scene)
        }

        // Keeps InterfaceController scene always on top, for prompts
        this.scene.bringToTop()

        this.input.setDefaultCursor('default')
    }

    showEmoteBalloon(id, emote) {
        this.main.balloonFactory.showEmoteBalloon(id, emote)
    }

    showTextBalloon(id, text, addToLog = true) {
        this.main.balloonFactory.showTextBalloon(id, text, addToLog)
    }

    showTourMessage(id, roomId) {
        if (!(roomId in this.crumbs.scenes.rooms)) {
            return
        }

        const roomName = this.crumbs.scenes.rooms[roomId].key.toLowerCase()
        const message = this.crumbs.tour_messages[roomName]

        if (message) {
            this.showTextBalloon(id, message, false)
        }
    }

    showCard(id, refresh = false) {
        this.main.playerCard.showCard(id, refresh)
    }

    /**
     * Refreshes buddy list and player card to reflect changes from the server.
     */
    updateBuddies() {
        if (this.main.scene.isActive()) {
            this.main.playerCard.updateButtons()
            this.main.buddy.showPage()
        }
    }

    refreshPlayerCard() {
        if (this.main.playerCard.visible && this.main.playerCard.id == this.world.client.id) {
            this.showCard(this.world.client.id, true)
        }
    }

    showWidget(widget) {
        if (widget.widgetLayer) {
            widget.widgetLayer.bringToTop(widget)
        }

        widget.show()
    }

    destroyWidget(widget) {
        widget.destroy()

        for (const key in this.loadedWidgets) {
            if (this.loadedWidgets[key] == widget) {
                delete this.loadedWidgets[key]
            }
        }
    }

    loadWidget(key, addToWidgetLayer = false) {
        if (!(key in this.widgets)) {
            return
        }

        if (key in this.loadedWidgets) {
            return this.showWidget(this.loadedWidgets[key])
        }

        const preload = this.widgets[key].preload
        const callback = () => this.onWidgetLoaded(key, addToWidgetLayer)

        if (!preload) {
            callback()
            return
        }

        const text = this.getWidgetLoadString(preload.loadString)

        this.prompt.showLoading(text, preload.key, preload.url, preload.unload, () => {
            callback()
        })
    }

    getWidgetLoadString(loadString) {
        if (Array.isArray(loadString)) {
            return this.getString(...loadString)
        } else {
            return this.getString(loadString)
        }
    }

    onWidgetLoaded(key, addToWidgetLayer) {
        const scene = (addToWidgetLayer) ? this.main : this

        const widget = new this.widgets[key].default(scene)

        this.loadedWidgets[key] = widget

        if (addToWidgetLayer) {
            this.main.addToWidgetLayer(widget)
        } else {
            this.add.existing(widget)
            widget.depth = -1
        }

        scene.events.once('update', () => {
            this.showWidget(widget)
        })
    }

    updateCatalogCoins(coins) {
        const books = Object.values(this.loadedWidgets).filter(
            widget => widget.isBook
        )

        books.forEach(book => {
            if (book.coins) {
                book.setCoins(coins)
            }
        })
    }

    resetCursor(scene = this) {
        if (!this.lastScene) {
            this.lastScene = scene
            return
        }

        if (this.lastScene == scene) {
            return
        }

        this.lastScene.input._over[0].forEach(gameObject => {
            if (gameObject.input && gameObject.input.enabled) {
                gameObject.emit('pointerout')
            }
        })

        const currentlyOver = scene.input._temp[0]

        // Only reset cursor if currently over has no cursor
        if (!currentlyOver || (currentlyOver.input && !currentlyOver.input.cursor)) {
            scene.input.setDefaultCursor('default')
        }

        this.lastScene.input._over[0] = []

        this.lastScene = scene
    }

}
