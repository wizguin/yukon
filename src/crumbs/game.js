import colors from './colors'
import fonts from './fonts'
import igloos from './igloos'
import penguin from './penguin'
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
        colors: colors,
        fonts: fonts,
        igloos: igloos,
        penguin: penguin,
        rooms: rooms
    }
}

export default game
