import fonts from './fonts'
import igloos from './igloos'
import rooms from './rooms'
import widgets from './widgets'

import SoundFileFactory from '@engine/sound/SoundFileFactory'


if (!localStorage.getItem('webgl')) {
    localStorage.setItem('webgl', 'true')
}

const width = 1520
const height = 960

const game = {
    type: (localStorage.getItem('webgl') == 'true')
        ? Phaser.WEBGL
        : Phaser.CANVAS,

    transparent: true,
    roundPixels: true,

    scale: {
        width: width,
        height: height,
        max: {
            width: width,
            height: height
        },
        parent: 'game',
        mode: Phaser.Scale.FIT,
        autoRound: true,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    dom: {
        createContainer: true
    },

    physics: {
        default: 'matter',
        matter: {
            debug: {
                renderFill: false,
                renderLine: false,
                showInternalEdges: true
            },
            gravity: false
        }
    },

    audio: {
        // Default Phaser audio systems not needed
        noAudio: true
    },

    crumbs: {
        fonts: fonts,

        scenes: {
            igloos: igloos,
            rooms: rooms
        },

        widgets: widgets,

        frameColor: 0x2e3440,
        iglooIdOffset: 2000
    },

    callbacks: {
        preBoot: () => {
            // Override default Phaser audio loader, loads audio for howler.js instead
            Phaser.Loader.FileTypesManager.register('audio', function(key, urls, _, xhrSettings) {
                return SoundFileFactory.create(this, key, urls, xhrSettings)
            })
        }
    }
}

export default game
