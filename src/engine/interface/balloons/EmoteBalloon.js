import Balloon from './Balloon'


export default class EmoteBalloon extends Balloon {

    constructor(scene, x, y, emote) {
        super(scene, x, y)

        let width = 128
        let height = 68

        this.addBalloon(width, height)
        this.addPointer(width, 'balloon-emote')
        this.addEmote(emote)
    }

    addEmote(emote) {
        let frame = `emotes/${emote}`

        // If emote frame doesn't exist, set to 1
        if (!this.world.textures.get('main').has(frame)) frame = 'emotes/1'

        let emoteSprite = this.scene.add.image(0, -25, 'main', frame)

        this.add(emoteSprite)
    }

}
