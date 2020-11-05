import Attic from '@rooms/attic/Attic'
import Lodge from '@rooms/lodge/Lodge'
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
    802: {
        name: 'Rink',
        scene: Rink,
        x: 570,
        y: 450
    }
}

export default rooms
