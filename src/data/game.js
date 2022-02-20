import fonts from './fonts'
import igloos from './igloos'
import interfaces from './interfaces'
import rooms from './rooms'


const game = {
    width: 1520,
    height: 960,
    type: (localStorage.webgl == 'true') ? Phaser.WEBGL : Phaser.CANVAS,
    transparent: true,
    roundPixels: true,

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

    plugins: {
        global: [ NineSlice.Plugin.DefaultCfg ]
    },

    scale: {
        parent: 'game',
        mode: Phaser.Scale.FIT,
        autoRound: true,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    crumbs: {
        fonts: fonts,

        scenes: {
            igloos: igloos,
            interfaces: interfaces,
            rooms: rooms
        },

        frameColor: 0x2e3440
    }
}

export default game
