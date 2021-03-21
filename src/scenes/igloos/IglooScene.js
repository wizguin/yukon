import RoomScene from '../rooms/RoomScene'

import FurnitureLoader from '@engine/world/room/loader/FurnitureLoader'
import FurnitureSprite from '@engine/world/room/furniture/FurnitureSprite'
import RoomCrate from './crates/RoomCrate'
import WallCrate from './crates/WallCrate'


export default class IglooScene extends RoomScene {

    constructor(key) {
        super(key)

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
        this.loader = new FurnitureLoader(this)

        this.load.once('start', () => this.onStart())
        this.events.once('shutdown', () => this.onShutdown())
    }

    preload() {
        this._preload()

        this.load.image(`locations/${this.args.location}`, `/assets/media/igloos/locations/${this.args.location}.png`)

        if (this.args.flooring) this.preloadFlooring(this.args.flooring)
    }

    preloadFlooring(flooring) {
        if (this.textures.exists(`flooring/${flooring}`)) return

        let path = '/assets/media/igloos/flooring/sprites'

        this.load.multiatlas({
            key: `flooring/${flooring}`,
            atlasURL: `${path}/${flooring}.json`,
            path: path
        })
    }

    get editing() {
        return this.interface.iglooEdit.controls.visible
    }

    onStart() {
        this.interface.showLoading('Loading Igloo')
    }

    onShutdown() {
        this.interface.hideIglooEdit()
    }

    create() {
        if (this.id == this.world.client.id) {
            this.addEditBg()
            this.addCrates()
            this.addInput()
            this.interface.showIglooEdit()
        }

        super.create()
        this.floor.depth = -2

        if (this.args.flooring) this.addFlooring()
        this.addLocation()
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

    addFlooring() {
        let flooring = this.add.image(0, 0, `flooring/${this.args.flooring}`, `${this.floorFrame}_1`)
        flooring.depth = -1

        let mask = this.mask.createBitmapMask()
        flooring.setMask(mask)
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

    hidePenguins() {
        for (let penguin of Object.values(this.penguins)) {
            penguin.visible = false
            penguin.nameTag.visible = false

            if (penguin.balloon) penguin.balloon.destroy()
        }
    }

    showPenguins() {
        for (let penguin of Object.values(this.penguins)) {
            penguin.visible = true
            penguin.nameTag.visible = true
        }
    }

    loadFurniture(item) {
        let crate = (this.crumbs.furniture[item].type == 2)
                        ? this.wallCrate
                        : this.roomCrate

        this.loader.loadFurniture(item, crate)
        this.loader.start()
    }

    /*========== Physics ==========*/

    addPhysics() {
        super.addPhysics()

        this.pet = this.addBody('pet')
        this.room = this.addBody('room')
        this.trash = this.addBody('trash')
        this.wall = this.addBody('wall')
    }

    /*========== Furniture input ==========*/

    addInput() {
        this.input.dragDistanceThreshold = 10

        this.input.on('pointermove', (pointer) => this.onPointerMove(pointer))
        this.input.on('pointerdown', (pointer, target) => this.onPointerDown(pointer, target))

        this.input.keyboard.on('keydown-LEFT', () => this.updateFrame(0, 1))
        this.input.keyboard.on('keydown-RIGHT', () => this.updateFrame(0, -1))
        this.input.keyboard.on('keydown-UP', () => this.updateFrame(1, 1))
        this.input.keyboard.on('keydown-DOWN', () => this.updateFrame(1, -1))
    }

    onPointerMove(pointer) {
        if (this.editing && this.selected) {
            this.selected.drag(pointer)
        }
    }

    onPointerDown(pointer, target) {
        if (!this.editing) return

        if (!this.selected && target && target[0] instanceof FurnitureSprite) {
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

}
