import BaseScene from '@scenes/base/BaseScene'

import MetricsManager from './metrics/MetricsManager'
import PromptController from './prompt/PromptController'


export default class InterfaceController extends BaseScene {

    metricsManager = new MetricsManager()

    create() {
        this.prompt = new PromptController(this)

        // External interface scenes
        this.interfaces = this.crumbs.scenes.interfaces
        this.loadedScenes = []
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

            // Stop external scenes
            this.stopExternals()
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
     * Loads an external interface scene, e.g catalog, newspaper, telescope.
     *
     * @param {string} key - Scene key
     */
     loadExternal(key) {
        if (!(key in this.interfaces) || this.prompt.loading.visible) {
            return
        }

        if (!(key in this.scene.manager.keys)) {
            // Create scene
            this.scene.add(key, this.interfaces[key], true)
            return this.loadedScenes.push(key)
        }

        if (!this.scene.isVisible(key)) {
            // Scene stopped
            this.scene.launch(key)
        } else {
            // Scene still preloading
            this.scene.get(key).events.emit('showloading')
        }

        this.bringToTop(key)
    }

    /**
     * Stop external interface scenes, called when hiding interface on room change.
     */
    stopExternals() {
        for (let key of this.loadedScenes) {
            let scene = this.scene.get(key)

            if (scene.scene.isActive()) {
                scene.scene.stop()

            } else if (scene.scene.isVisible()) {
                // Scene still preloading
                scene.events.once('create', () => scene.scene.stop())
            }
        }
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

    updateCatalogCoins(coins) {
        let books = this.scene.manager.getScenes().filter(
            scene => Object.getPrototypeOf(scene.constructor).name == 'Book'
        )

        books.map(book => {
            if (book.coins) {
                book.setCoins(coins)
            }
        })
    }

}
