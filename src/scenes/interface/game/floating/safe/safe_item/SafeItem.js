/* START OF COMPILED CODE */

class SafeItem extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x, y);

        // item
        const item = scene.add.image(0, 0, "main", "list/small");
        this.add(item);

        this.item = item;

        /* START-USER-CTR-CODE */

        let nameStyle = {
            align: 'center',
            color: '#000000',
            fixedWidth: 532,
            fontFamily: 'Arial',
            fontSize: '28px',
            metrics: scene.interface.metrics.Arial28
        }

        // name
        this.name = scene.add.text(0, -15, '', nameStyle)
        this.name.setOrigin(0.5, 0)
        this.add(this.name)

        if (!scene.interface.metrics.Arial28) {
            scene.interface.metrics.Arial28 = this.name.getTextMetrics()
        }

        this.data
        this.column
        this.safeList
        this.frameName = 'list/small'

        item.on('pointerover', () => this.onOver())
        item.on('pointerout', () => this.onOut())

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get safe() {
        return this.parentContainer
    }

    init(item, column, wide) {
        this.data = item
        this.column = column

        this.name.text = item.name
        // Center name vertically instead of using origin to fix blurry text
        this.name.y = -Math.floor(this.name.height / 2)

        this.updateFrameName(item.menu, wide)
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default SafeItem
