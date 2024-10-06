import BaseContainer from '@scenes/base/BaseContainer'


/* START OF COMPILED CODE */

export default class SafeItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.item;


        // item
        const item = scene.add.image(0, 0, "main", "list/small");
        this.add(item);

        this.item = item;

        /* START-USER-CTR-CODE */

        let nameStyle = {
            align: 'center',
            color: '#000000',
            fontFamily: 'Arial',
            fontSize: '28px'
        }

        // name
        this.name = scene.add.text(0, -15, '', nameStyle)
        this.name.setOrigin(0.5, 0)
        this.add(this.name)

        this.data
        this.column
        this.safeList
        this.frameName = 'list/small'

        item.on('pointerover', () => this.onOver())
        item.on('pointerout', () => this.onOut())
        item.on('pointerup', (pointer) => this.onUp(pointer))

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get safe() {
        return this.parentContainer
    }

    init(item, column, wide) {
        this.data = item
        this.column = column

        this.updateFrameName(item.menu, wide)
        this.updateNameText(item.name)
    }

    updateFrameName(menu, wide) {
        let first = (wide > 1) ? 'list/wide' : 'list/small'
        let last = (menu) ? '_arrow': ''

        this.frameName = `${first}${last}`

        this.resetFrame()

        // Set interactive after set frame so bounds are correct
        this.item.setInteractive({ cursor: 'pointer' })
    }

    resetFrame() {
        this.item.setFrame(this.frameName)
    }

    updateNameText(name) {
        this.name.text = name

        let availableWidth = this.item.width - 30

        // Text too long
        if (this.name.width > availableWidth) {
            this.name.setFontSize(24)
        }

        // Center name vertically instead of using origin to fix blurry text
        this.name.y = -Math.floor(this.name.height / 2)

        // Set fixed width
        this.name.setFixedSize(availableWidth, 0)
    }

    onOver() {
        this.item.setFrame(`${this.frameName}-hover`)

        this.safe.closeLists(this.column)

        if (!this.data.menu) {
            return
        }

        if (this.safeList) {
            this.safe.showSafeList(this.safeList)
        } else {
            this.safeList = this.safe.createSafeList(this.data.menu, this.column + 1, this.data.wide, this.x, this.y, this.item.width)
        }
    }

    onOut() {
        this.resetFrame()
    }

    onUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.safe.closeMenu()

        switch (this.data.action) {
            case 'tour':
                this.world.client.sendTour()
                break;

            case 'joke':
                this.world.client.sendJoke()
                break

            default:
                this.world.client.sendSafe(this.data.id)
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
