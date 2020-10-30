import Attic from '@/world/room/rooms/attic/Attic'
import Lodge from '@/world/room/rooms/lodge/Lodge'
import Rink from '@/world/room/rooms/rink/Rink'


let rooms = {
    221: {
        name: 'Lodge',
        scene: Lodge,
        x: 760,
        y: 800
    },
    220: {
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
