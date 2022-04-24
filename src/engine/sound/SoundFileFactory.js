import SoundFile from './SoundFile'

const GetFastValue = Phaser.Utils.Objects.GetFastValue


export default class SoundFileFactory {

    static create(loader, key, urls, xhrSettings) {
        let soundFile

        if (Array.isArray(key)) {
            for (let i = 0; i < key.length; i++) {
                soundFile = this.createSoundFile(loader, key[i])

                if (soundFile) {
                    loader.addFile(soundFile)
                }
            }

        } else {
            soundFile = this.createSoundFile(loader, key, urls, xhrSettings)

            if (soundFile) {
                loader.addFile(soundFile)
            }
        }

        return loader
    }

    static createSoundFile(loader, key, urls, xhrSettings) {
        // URL may be inside key, which may be an object
        if (Phaser.Utils.Objects.IsPlainObject(key)) {
            let config = key

            key = GetFastValue(config, 'key')
            urls = GetFastValue(config, 'url', [])
            xhrSettings = GetFastValue(config, 'xhrSettings')
        }

        let urlConfig = Phaser.Loader.FileTypes.AudioFile.getAudioURL(loader.systems.game, urls)

        if (urlConfig) {
            return new SoundFile(loader, key, urlConfig, xhrSettings)
        }
    }

}
