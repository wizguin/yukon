import BaseLoader from './BaseLoader'


export default class PenguinLoader extends BaseLoader {

    constructor(world) {
        super(world)

        this.nameStyle = {
            fontFamily: 'Arial',
            fontSize: 23,
            color: '#000000',
            align: 'center'
        }
    }

    loadPenguin(penguin) {
        this.addPenguin(penguin)
        this.addShadow(penguin)
    }

    addPenguin(penguin) {
        this.loadSprite(penguin, 'penguin-body', 1)
        this.loadSprite(penguin, 'penguin', 2)
    }

    addShadow(penguin) {
        let shadow = penguin.room.add.image(0, 0, 'penguin-base', 'shadow')

        penguin.addAt(shadow, 0)
    }

    addRing(penguin) {
        let ring = penguin.room.add.image(0, 0, 'penguin-base', 'ring')

        penguin.addAt(ring, 0)
    }

    addName(penguin) {
        let x = penguin.x
        let y = penguin.y + 40
        let nameTag = penguin.room.add.text(x, y, penguin.username, this.nameStyle)

        nameTag.setOrigin(0.5)
        nameTag.depth = 2000 // Keep nametag above everything else

        return nameTag
    }

}
