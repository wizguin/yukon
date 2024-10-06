import Balloon from './Balloon'


export default class EmoteBalloon extends Balloon {

    constructor(penguin) {
        super(penguin)

        const width = 128
        const height = 68

        this.emote = this.addEmote()

        this.addBalloon(width, height)
        this.addPointer(width, 'balloon-emote')
        this.add(this.emote)
    }

    show(emote) {
        const frame = `emotes/${emote}`

        // If emote frame doesn't exist, set to 1
        if (!this.world.textures.get('main').has(frame)) {
            frame = 'emotes/1'
        }

        this.emote.setFrame(frame)

        super.show()
    }

    addEmote() {
        const emoteSprite = this.scene.add.image(0, -25, 'main', 'emotes/1')

        return emoteSprite
    }

}
