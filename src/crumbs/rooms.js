import Attic from '@rooms/attic/Attic'
import Dock from '@rooms/dock/Dock'
import Lodge from '@rooms/lodge/Lodge'
import Plaza from '@rooms/plaza/Plaza'
import Rink from '@rooms/rink/Rink'
import Village from '@rooms/village/Village'


const rooms = {
    200: {
        name: 'Village',
        scene: Village,
        x: 800,
        y: 640
    },
    220: {
        name: 'Lodge',
        scene: Lodge,
        x: 760,
        y: 800
    },
    221: {
        name: 'Attic',
        scene: Attic,
        x: 966,
        y: 560
    },
    300: {
        name: 'Plaza',
        scene: Plaza,
        x: 760,
        y: 680
    },
    800: {
        name: 'Dock',
        scene: Dock,
        x: 800,
        y: 400
    },
    802: {
        name: 'Rink',
        scene: Rink,
        x: 570,
        y: 450
    }
}

export default rooms
