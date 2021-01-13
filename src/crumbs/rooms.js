import Attic from '@rooms/attic/Attic'
import Beach from '@rooms/beach/Beach'
import Cove from '@rooms/cove/Cove'
import Dock from '@rooms/dock/Dock'
import Forts from '@rooms/forts/Forts'
import Lodge from '@rooms/lodge/Lodge'
import Plaza from '@rooms/plaza/Plaza'
import Rink from '@rooms/rink/Rink'
import Town from '@rooms/town/Town'
import Village from '@rooms/village/Village'


const rooms = {
    100: {
        name: 'Town',
        scene: Town,
        x: 760,
        y: 660
    },
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
    400: {
        name: 'Beach',
        scene: Beach,
        x: 840,
        y: 680
    },
    800: {
        name: 'Dock',
        scene: Dock,
        x: 800,
        y: 400
    },
    801: {
        name: 'Forts',
        scene: Forts,
        x: 600,
        y: 600
    },
    802: {
        name: 'Rink',
        scene: Rink,
        x: 770,
        y: 400
    },
    810: {
        name: 'Cove',
        scene: Cove,
        x: 840,
        y: 480
    }
}

export default rooms
