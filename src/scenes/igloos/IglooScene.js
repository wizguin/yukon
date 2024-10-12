import RoomScene from '../rooms/RoomScene'

import FurnitureLoader from '@engine/loaders/FurnitureLoader'
import FurnitureSprite from '@engine/world/room/furniture/FurnitureSprite'
import IglooPet from '@engine/world/pet/IglooPet'
import IglooPetLoader from '@engine/loaders/IglooPetLoader'
import PhysicsMaskGraphics from '@engine/utils/mask/PhysicsMaskGraphics'
import RoomCrate from './crates/RoomCrate'
import WallCrate from './crates/WallCrate'


export default class IglooScene extends RoomScene {

    constructor(key) {
        super(`${key}-igloo`)

        this.isIgloo = true
        this.editBg
        this.roomCrate
        this.wallCrate

        // Igloo physics areas
        this.pet
        this.room
        this.trash
        this.wall

        // Selected furniture sprite
        this.selected
    }

    init(data) {
        this.args = data.args
        this.id = data.args.igloo
        this.music = data.args.music

        this.loader = new FurnitureLoader(this)
        this.petLoader = new IglooPetLoader(this)

        // Active furniture quantities
        this.quantities = {}

        this.pets = {}

        this.events.once('shutdown', () => this.onShutdown())

        super.init()
    }

    preload() {
        super.preload()

        this.load.image(`locations/${this.args.location}`, `/assets/media/igloos/locations/${this.args.location}.png`)

        if (this.args.flooring) this.loadFlooring(this.args.flooring)
    }

    get editing() {
        if (this.interface.iglooEdit.controls) {
            return this.interface.iglooEdit.controls.visible
        }
    }

    get furnitureSprites() {
        return this.children.list.filter(f => f instanceof FurnitureSprite)
    }

    get isClientIgloo() {
        return this.id === this.world.client.id
    }

    getQuantity(item) {
        let inventoryQuantity = this.world.client.furniture[item]
        let activeQuantity = (this.quantities[item]) ? this.quantities[item] : 0

        return Math.max(inventoryQuantity - activeQuantity, 0)
    }

    onShutdown() {
        this.interface.hideIglooEdit()
    }

    create() {
        if (this.isClientIgloo) {
            this.addEditBg()
            this.addCrates()
            this.interface.showIglooEdit()
        }

        super.create()
        if (this.floor) this.floor.depth = -2

        if (this.args.flooring) this.addFlooring(this.args.flooring)
        this.addLocation()
        this.loadAllFurniture()

        this.network.send('get_pets', { userId: this.id })
    }

    addEditBg() {
        this.editBg = this.add.image(786, 501, 'iglooedit', 'bg')
        this.editBg.depth = -3
        this.editBg.visible = false
    }

    addCrates() {
        this.roomCrate = new RoomCrate(this, this.floorSpawn[0], this.floorSpawn[1])
        this.roomCrate.depth = this.roomCrate.y

        this.wallCrate = new WallCrate(this, this.wallSpawn[0], this.wallSpawn[1])
        this.wallCrate.depth = this.wallCrate.y

        this.add.existing(this.roomCrate)
        this.add.existing(this.wallCrate)
    }

    addFlooring(flooring) {
        if (this.flooring) this.flooring.destroy()

        this.flooring = this.add.image(0, 0, `flooring/${flooring}`, `${this.floorFrame}_1`)
        this.flooring.depth = -1

        if (this.roomPhysics.mask) {
            let mask = this.createMask()

            this.flooring.setMask(mask)
        }
    }

    addLocation() {
        let location = this.add.image(760, 480, `locations/${this.args.location}`)
        location.depth = -4
    }

    showEditBg() {
        if (this.editBg) this.editBg.visible = true
    }

    hideEditBg() {
        if (this.editBg) this.editBg.visible = false
    }

    hideEntities() {
        for (let penguin of Object.values(this.penguins)) {
            penguin.visible = false
            penguin.nameTag.visible = false

            if (penguin.balloon) penguin.balloon.visible = false
        }

        for (let pet of Object.values(this.pets)) {
            pet.visible = false
        }
    }

    showEntities() {
        for (let penguin of Object.values(this.penguins)) {
            penguin.visible = true
            penguin.nameTag.visible = true
        }

        for (let pet of Object.values(this.pets)) {
            pet.visible = true
        }
    }

    loadFlooring(flooring) {
        if (this.textures.exists(`flooring/${flooring}`)) return
        let path = '/assets/media/igloos/flooring'

        this.load.multiatlas({
            key: `flooring/${flooring}`,
            atlasURL: `${path}/${flooring}.json`,
            path: path
        })
    }

    updateFlooring(flooring) {
        this.args.flooring = flooring

        // Close catalog
        for (let widget in this.interface.loadedWidgets) {
            widget = this.interface.loadedWidgets[widget]

            if (widget.isBook && widget.visible) {
                widget.close()
            }
        }

        if (flooring == 0 && this.flooring) {
            return this.flooring.destroy()
        }

        if (this.textures.exists(`flooring/${flooring}`)) {
            return this.addFlooring(flooring)
        }

        this.loadFlooring(flooring)
        this.load.start()
        this.load.once(`filecomplete-json-flooring/${flooring}`, () => {
            this.addFlooring(flooring)
        })
    }

    updateMusic(music) {
        this.stopMusic()

        this.music = music

        if (!music) {
            return
        }

        if (this.cache.audio.exists(music)) {
            return this.playMusic(music)
        }

        this.load.audio(music, `assets/media/music/${music}.mp3`)
        this.load.start()

        this.load.once(`filecomplete-audio-${music}`, () => {
            this.playMusic(music)
        })
    }

    loadAllFurniture() {
        for (let f of this.args.furniture) {
            this.updateQuantity(f.furnitureId)
            this.loader.loadFurniture(f.furnitureId, null, f.x, f.y, f.rotation, f.frame)
        }

        this.loader.start()
    }

    loadFurniture(item) {
        let crate = (this.crumbs.furniture[item].type == 2)
                        ? this.wallCrate
                        : this.roomCrate

        this.updateQuantity(item)
        this.loader.loadFurniture(item, crate, crate.defaultX, crate.defaultY)
        this.loader.start()
    }

    updateIgloo(type) {
        if (this.id != this.world.client.id || this.args.type == type || !(type in this.crumbs.scenes.igloos)) {
            return
        }

        let text = 'Are you sure you want to change your igloo? Your flooring will be lost. Igloo items will be saved in your inventory.'

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.interface.showLoading(this.getString('joining', 'igloo'))
            this.network.send('update_igloo', { type: type })

            this.interface.prompt.window.visible = false
        })
    }

    updateQuantity(item) {
        this.quantities[item] = (this.quantities[item]) ? this.quantities[item] + 1 : 1
    }

    loadPets(pets) {
        for (const pet of pets) {
            this.petLoader.loadPet(pet.typeId, (key) => this.addPet(key, pet))
        }
    }

    addPet(textureKey, pet) {
        const iglooPet = new IglooPet(textureKey, pet, this)

        this.pets[pet.id] = iglooPet
        this.add.existing(iglooPet)
    }

    /*========== Physics ==========*/

    get roomPhysics() {
        let key = this.key.toLowerCase()
        let baseKey = this.crumbs.scenes.igloos[this.id].key.toLowerCase()

        return this.cache.json.get(`${key}-physics`) || this.cache.json.get(`${baseKey}-physics`)
    }

    addPhysics() {
        super.addPhysics()

        this.pet = this.addBody('pet')
        this.room = this.addBody('room')
        this.trash = this.addBody('trash')
        this.wall = this.addBody('wall')
    }

    createMask() {
        let fixtures = this.roomPhysics.mask.fixtures
        let graphics = new PhysicsMaskGraphics(this, fixtures)

        return graphics.createGeometryMask()
    }

    /*========== Furniture input ==========*/

    enableFurnitureInput() {
        for (let f of this.furnitureSprites) {
            f.setInteractive()
        }
    }

    disableFurnitureInput() {
        for (let f of this.furnitureSprites) {
            f.disableInteractive()
        }
    }

    addInput() {
        super.addInput()

        // Only add editor input in client igloo
        if (this.id != this.world.client.id) return

        this.input.dragDistanceThreshold = 1

        this.input.on('pointerdown', (pointer, target) => this.onPointerDown(pointer, target))
        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))

        this.input.keyboard.on('keydown-UP', () => this.updateFrame(1, 1))
        this.input.keyboard.on('keydown-LEFT', () => this.updateFrame(0, 1))
        this.input.keyboard.on('keydown-DOWN', () => this.updateFrame(1, -1))
        this.input.keyboard.on('keydown-RIGHT', () => this.updateFrame(0, -1))
    }

    onPointerMove(pointer) {
        if (this.editing && this.selected) {
            this.selected.drag(pointer)
        }
    }

    onPointerDown(pointer, target) {
        if (pointer.button != 0 || !this.editing) {
            return
        }

        if (!this.selected && target[0] && target[0] instanceof FurnitureSprite) {
            target[0].hover(pointer)
        } else if (this.selected) {
            this.selected.drop()
        }
    }

    updateFrame(index, value) {
        if (this.editing && this.selected) {
            this.selected.updateFrame(index, value)
        }
    }

    setSelected(furniture = null) {
        this.selected = furniture
        this.interface.iglooEdit.setControlsInteractive(furniture == null)
    }

}
