import BaseScene from '@scenes/base/BaseScene'

import Hint from '@engine/interface/hint/Hint'
import MetricsManager from './metrics/MetricsManager'
import PromptController from './prompt/PromptController'


export default class InterfaceController extends BaseScene {

    metricsManager = new MetricsManager()

    create() {
        this.hint = new Hint(this, 0, 0)
        this.add.existing(this.hint)

        this.prompt = new PromptController(this)

        this.widgets = this.crumbs.widgets
        // Dynamically loaded widgets
        this.loadedWidgets = {}

        // Draw frame
        let graphics = this.add.graphics()

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
        this.hideInterface()

        if (this.scene.isActive('Load')) {
            this.loading.setContent(text, showBar)

        } else if (this.scene.isSleeping('Load')) {
            this.scene.wake('Load', { text: text, showBar: showBar })

        } else {
            this.scene.launch('Load', { text: text, showBar: showBar })
        }

        this.bringToTop('Load')
    }

    hideLoading() {
        if (this.loading && this.loading.scene.isActive()) {
            this.scene.sleep('Load')
        }
    }

    showInterface() {
        this.hideLoading()

        if (this.scene.isSleeping('Main')) {
            this.scene.wake('Main')

        } else if (!this.scene.isActive('Main')) {
            this.scene.launch('Main')
        }

        this.bringToTop('Main')
    }

    hideInterface(clearChat = true) {
        if (this.main && this.main.scene.isActive()) {
            this.scene.sleep('Main', { clearChat: clearChat })
        }
    }

    showIglooEdit() {
        if (this.scene.isSleeping('IglooEdit')) {
            this.scene.wake('IglooEdit')

        } else if (!this.scene.isActive('IglooEdit')) {
            this.scene.launch('IglooEdit')
        }

        this.bringToTop('IglooEdit')
    }

    bringToTop(key) {
        this.scene.bringToTop(key)

        // Keeps InterfaceController scene always on top, for prompts
        this.scene.bringToTop()

        this.input.setDefaultCursor('default')
    }

    hideIglooEdit() {
        if (this.iglooEdit && this.iglooEdit.scene.isActive()) {
            this.scene.sleep('IglooEdit')
        }
    }

    showEmoteBalloon(id, emote) {
        this.main.balloonFactory.showEmoteBalloon(id, emote)
    }

    showTextBalloon(id, text) {
        this.main.balloonFactory.showTextBalloon(id, text)
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

        for (let key in this.loadedWidgets) {
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

        let preload = this.widgets[key].preload
        let text = this.getWidgetLoadString(preload.loadString)

        this.prompt.showLoading(text, preload.key, preload.url, () => {
            this.onWidgetLoaded(key, addToWidgetLayer)
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
        let scene = (addToWidgetLayer) ? this.main : this

        let widget = new this.widgets[key].default(scene)

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
        let books = Object.values(this.loadedWidgets).filter(
            widget => widget.isBook
        )

        books.map(book => {
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

        this.lastScene.input._over[0].map(gameObject => {
            if (gameObject.input && gameObject.input.enabled) {
                gameObject.emit('pointerout')
            }
        })

        let currentlyOver = scene.input._temp[0]

        // Only reset cursor if currently over has no cursor
        if (!currentlyOver || (currentlyOver.input && !currentlyOver.input.cursor)) {
            scene.input.setDefaultCursor('default')
        }

        this.lastScene.input._over[0] = []

        this.lastScene = scene
    }

}
