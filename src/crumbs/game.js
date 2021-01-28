import colors from './colors'
import penguin from './penguin'
import rooms from './rooms'
import worlds from './worlds'


const game = {
    width: 1520,
    height: 960,
    type: Phaser.WEBGL,
    transparent: true,
    roundPixels: true,

    dom: {
        createContainer: true
    },

    physics: {
        default: 'matter',
        matter: {
            debug: false,
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
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
    },

    crumbs: {
        colors: colors,
        penguin: penguin,
        rooms: rooms,
        worlds: worlds
    }
}

export default game
