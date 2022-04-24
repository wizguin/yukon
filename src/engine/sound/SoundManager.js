import { Howl } from 'howler'


export default class SoundManager extends HowlerGlobal  {

    constructor(game) {
        super()

        this.cache = game.cache.audio

        // Active howl objects
        this.sounds = {}

        this.currentMusic
        this.muteMusic = false
    }

    play(key, config = {}) {
        if (!this.cache.exists(key)) {
            return
        }

        let sound

        if (key in this.sounds) {
            sound = this.sounds[key]
            sound.play()

        } else {
            sound = this.add(key, config)
        }

        return sound
    }

    playMusic(key) {
        if (this.muteMusic) {
            return
        }

        if (this.currentMusic && this.currentMusic.key == key) {
            return
        }

        this.stopMusic()

        let music = this.play(key, { loop: true })

        if (music) {
            this.currentMusic = music
        }
    }

    stopAll() {
        this.stopAllButMusic()
        this.stopMusic()
    }

    stopAllButMusic() {
        for (let howl of this._howls) {
            if (howl != this.currentMusic) {
                this.remove(howl)
            }
        }
    }

    stopMusic() {
        if (this.currentMusic) {
            this.remove(this.currentMusic)
            this.currentMusic = null
        }
    }

    add(key, config) {
        config = {
            src: this.cache.get(key),
            format: 'mp3',
            ...config
        }

        let sound = new Howl(config)

        sound.key = key
        this.sounds[key] = sound

        sound.once('load', () => {
            sound.play()
        })

        return sound
    }

    remove(howl) {
        howl.unload()
        delete this.sounds[howl.key]
    }

}
