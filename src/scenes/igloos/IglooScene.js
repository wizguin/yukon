import RoomScene from '../rooms/RoomScene'


export default class IglooScene extends RoomScene {

    constructor(key) {
        super(key)

        this.isIgloo = true
    }

    init(data) {
        this.args = data.args
        this.id = data.args.igloo

        this.load.on('start', this.onStart, this)
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

    create() {
        super.create()

        this.floor.depth = -2

        this.addLocation()
        if (this.args.flooring) this.addFlooring()
    }

    addLocation() {
        let location = this.add.image(760, 480, `locations/${this.args.location}`)
        location.depth = -3
    }

    addFlooring() {
        let flooring = this.add.image(760, 760, `flooring/${this.args.flooring}`)
        flooring.depth = -1

        let mask = this.mask.createBitmapMask()
        flooring.setMask(mask)
    }

}
