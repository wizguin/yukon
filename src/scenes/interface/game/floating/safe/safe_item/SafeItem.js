import { Button } from '@components/components'


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
            fixedWidth: 300,
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

        item.setInteractive({ cursor: 'pointer' })

        item.on('pointerover', () => this.onOver())
        item.on('pointerout', () => this.onOut())

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    get safe() {
        return this.parentContainer
    }

    init(item, column) {
        this.data = item
        this.column = column

        this.name.text = item.name
        // Center name vertically instead of using origin to fix blurry text
        this.name.y = -Math.floor(this.name.height / 2)

        if (item.menu) {
            this.frameName = 'list/small_arrow'
            this.resetFrame()
        }
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
            this.safeList = this.safe.createSafeList(this.data.menu, this.column + 1, this.y)
        }
    }

    onOut() {
        this.resetFrame()
    }

    resetFrame() {
        this.item.setFrame(this.frameName)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default SafeItem
