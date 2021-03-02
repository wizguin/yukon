import RoomScene from '../rooms/RoomScene'


export default class IglooScene extends RoomScene {

    constructor(key) {
        super(key)

        this.isIgloo = true
        this.editBg = null
    }

    init(data) {
        this.args = data.args
        this.id = data.args.igloo

        this.load.once('start', () => this.onStart())
        this.events.once('shutdown', () => this.onShutdown())
    }

    preload() {
        this._preload()

        this.load.image(`locations/${this.args.location}`, `/assets/media/igloos/locations/${this.args.location}.png`)

        if (this.args.flooring) {
            this.load.image(`flooring/${this.args.flooring}`, `/assets/media/igloos/flooring/${this.args.flooring}.png`)
        }
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

    addFlooring() {
        let flooring = this.add.image(760, 760, `flooring/${this.args.flooring}`)
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

}
