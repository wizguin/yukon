import { Button } from '@components/components'


export default class GridViewSlot extends Phaser.GameObjects.Sprite {

    constructor(scene) {
        super(scene, 0, 0, 'iglooedit', 'box/box')

        this.world = scene.world
        this.gridView = this.scene.gridView

        this.item
        this.quantity
        this.filter

        this.textStyle = {
            fontFamily: 'Arial',
            fontSize: 70,
            fontStyle: 'bold',
            color: '#333333',
            align: 'right',
            fixedWidth: 100
        }

        // Add component
        let component = new Button(this)

        component.spriteName = 'box/box'
        component.callback = () => this.onClick()
        component.activeFrame = false
    }

    onClick() {
        if (!this.world.room.isIgloo || this.world.room.id != this.world.client.id) return

        this.gridView.visible = false
        this.scene.furniture.visible = false

        if (this.filter == 'igloo') {
            this.world.room.updateIgloo(this.item.id)
        } else {
            this.world.room.loadFurniture(this.item.id)
        }
    }

    addIcon(key, item) {
        if (this.item) {
            this.item.destroy()
        }

        let icon = this.scene.add.image(this.x, this.y, key)
        let scale = (key.split('/')[2] == '@5x') ? 1 : 2

        this.gridView.container.add(icon)

        icon.scale = scale
        icon.id = item
        this.item = icon

        if (this.filter != 'igloo') {
            let quantity = this.world.room.getQuantity(item)
            return this.setQuantity(quantity)
        }

        // Set igloo enable
        this.setEnable(this.world.room.args.type != item)
    }

    addError(item) {
        let icon = this.scene.add.image(this.x, this.y, 'iglooedit', 'box/x')
        this.gridView.container.add(icon)

        icon.id = item
        this.item = icon
    }

    addQuantity() {
        let x = this.x + (this.width / 2) - 75
        let y = this.y + (this.height / 2) - 55

        this.quantity = this.scene.add.text(x, y, '', this.textStyle)
        this.quantity.setOrigin(0.5)
        this.gridView.container.add(this.quantity)

        return this.quantity
    }

    setQuantity(value) {
        let quantity = (this.quantity) ? this.quantity : this.addQuantity()

        this.setEnable(value > 0)

        quantity.text = value
        quantity.visible = true

        this.gridView.container.bringToTop(quantity)
    }

    setEnable(check) {
        if (check) {
            this.enable()
        } else {
            this.disable()
        }
    }

    enable() {
        this.setInteractive()
        this.setFrame('box/box')
    }

    disable() {
        this.disableInteractive()
        this.setFrame('box/box-disabled')
    }

}
