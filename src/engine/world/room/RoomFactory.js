export default class RoomFactory {

    constructor(world) {
        this.world = world

        this.scene = world.scene

        this.rooms = world.crumbs.scenes.rooms
        this.igloos = world.crumbs.scenes.igloos
        this.games = world.crumbs.games
    }

    create(args) {
        this.unloadPrevious()

        if (args.room) {
            return this.createRoom(args)

        } else if (args.igloo) {
            return this.createIgloo(args)

        } else if (args.game) {
            return this.createGame(args)
        }
    }

    createRoom(args) {
        let config = this.rooms[args.room]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key)

            return this.scene.get(config.key)

        } else {
            return this.scene.add(config.key, config.scene, true, { id: args.room })
        }
    }

    createIgloo(args) {
        let config = this.igloos[args.type]

        if (config.key in this.scene.manager.keys) {
            this.scene.start(config.key, { args: args })

            return this.scene.get(config.key)

        } else {
            return this.scene.add(config.key, config.scene, true, { args: args })
        }
    }

    createGame(args) {
        let config = this.games[args.game]

        if (!config.flash) {
            return this.createRoom({ room: args.game })
        }

        this.scene.run(this.world.ruffle)

        this.world.ruffle.events.once('update', () => {
            this.world.ruffle.bootGame(config)
        })
    }

    unloadPrevious() {
        if (!this.world.room) return
        let textures = 0
        let json = 0
        let audio = 0
        let video = 0
        let anims = 0

        for (let item of this.world.loadedAssets) {
            if (Object.keys(this.world.room.textures.list).includes(item.id)) {
                textures++
                this.world.room.textures.remove(item.id)
            }

            if (Object.keys(this.world.cache.json.entries.entries).includes(item.id)) {
                this.world.room.cache.json.remove(item.id)
                json++
            }

            if (Object.keys(this.world.cache.audio.entries.entries).includes(item.id)) {
                this.world.room.cache.audio.remove(item.id)
                audio++
            }

            if (Object.keys(this.world.cache.video.entries.entries).includes(item.id)) {
                this.world.room.cache.video.remove(item.id)
            }

            for (let anim in this.world.room.anims.anims.entries) {
                if (this.world.room.anims.anims.entries[anim].frames[0].textureKey == item.id || this.world.room.anims.anims.entries[anim].key.startsWith(item.id)) {
                    anims++
                    delete this.world.room.anims.anims.entries[anim]
                }
            }
        }

        for (let item of Object.keys(this.world.room.textures.list)) {
            if (['clothing', 'head', 'face', 'neck', 'body', 'hand', 'feet', 'puffles', 'paper', 'secret_frames'].includes(item.split('/')[0])) {
                this.world.room.textures.remove(item)
                textures++
            }
        }

        for (let item in this.world.room.anims.anims.entries) {
            if (item.startsWith("clothing/sprites/")) {
                delete this.world.room.anims.anims.entries[item]
                anims++
            }

            // Remove secret frame animations
            if (['penguin'].includes(item.split('_')[0])) {
                if (item.split('/')[0].split('_')[1] == 'body' && parseInt(item.split('/')[0].split('_')[2]) > 26) {
                    delete this.world.room.anims.anims.entries[item]
                    anims++
                } else if (parseInt(item.split('/')[0].split('_')[1]) > 26) {
                    delete this.world.room.anims.anims.entries[item]
                    anims++
                }
            }
        }

        let stringArray = []
        if (textures > 0) stringArray.push(`${textures} texture${textures > 1 ? 's' : ''}`)
        if (json > 0) stringArray.push(`${json} json file${json > 1 ? 's' : ''}`)
        if (audio > 0) stringArray.push(`${audio} audio file${audio > 1 ? 's' : ''}`)
        if (video > 0) stringArray.push(`${video} video file${video > 1 ? 's' : ''}`)
        if (anims > 0) stringArray.push(`${anims} animation${anims > 1 ? 's' : ''}`)
        if (stringArray.length > 0) console.info(`[MemoryManager] Unloaded ${stringArray.join(', ')}`.replace(/,(?=[^,]+$)/, ', and'))

        this.world.itemsLoaded = []
    }
}
