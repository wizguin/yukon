const rooms = {
    100: {
        name: 'Town',
        scene: require('@rooms/town/Town').default,
        x: 760,
        y: 660
    },
    110: {
        name: 'Coffee',
        scene: require('@rooms/coffee/Coffee').default,
        x: 640,
        y: 480
    },
    111: {
        name: 'Book',
        scene: require('@rooms/book/Book').default,
        x: 1260,
        y: 560
    },
    120: {
        name: 'Dance',
        scene: require('@rooms/dance/Dance').default,
        x: 360,
        y: 560
    },
    200: {
        name: 'Village',
        scene: require('@rooms/village/Village').default,
        x: 800,
        y: 640
    },
    220: {
        name: 'Lodge',
        scene: require('@rooms/lodge/Lodge').default,
        x: 760,
        y: 800
    },
    221: {
        name: 'Attic',
        scene: require('@rooms/attic/Attic').default,
        x: 966,
        y: 560
    },
    230: {
        name: 'Mtn',
        scene: require('@rooms/mtn/Mtn').default,
        x: 760,
        y: 440
    },
    300: {
        name: 'Plaza',
        scene: require('@rooms/plaza/Plaza').default,
        x: 760,
        y: 680
    },
    321: {
        name: 'DojoExt',
        scene: require('@rooms/dojoext/DojoExt').default,
        x: 780,
        y: 790
    },
    400: {
        name: 'Beach',
        scene: require('@rooms/beach/Beach').default,
        x: 840,
        y: 680
    },
    800: {
        name: 'Dock',
        scene: require('@rooms/dock/Dock').default,
        x: 800,
        y: 400
    },
    801: {
        name: 'Forts',
        scene: require('@rooms/forts/Forts').default,
        x: 960,
        y: 610
    },
    802: {
        name: 'Rink',
        scene: require('@rooms/rink/Rink').default,
        x: 770,
        y: 400
    },
    805: {
        name: 'Berg',
        scene: require('@rooms/berg/Berg').default,
        x: 652,
        y: 448
    },
    807: {
        name: 'Shack',
        scene: require('@rooms/shack/Shack').default,
        x: 760,
        y: 680
    },
    809: {
        name: 'Forest',
        scene: require('@rooms/forest/Forest').default,
        x: 760,
        y: 430
    },
    810: {
        name: 'Cove',
        scene: require('@rooms/cove/Cove').default,
        x: 840,
        y: 480
    }
}

export default rooms
