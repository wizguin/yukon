import Game from '@/Game'
import rooms from '@/crumbs/rooms'
import worlds from '@/crumbs/worlds'


window.addEventListener('load', function () {

    new Game({
        width: 1520,
        height: 960,
        type: Phaser.AUTO,
        backgroundColor: '#14529b',
        autoRound: true,
        roundPixels: true,
        parent: 'client-container',
        dom: {
            createContainer: true
        },
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        plugins: {
            global: [ NineSlice.Plugin.DefaultCfg ]
        },
        crumbs: {
            rooms: rooms,
            worlds: worlds
        }
    })

})
