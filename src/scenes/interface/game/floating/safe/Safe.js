import FloatingMenu from '../FloatingMenu'

import SafeItem from './safe_item/SafeItem'


/* START OF COMPILED CODE */

export default class Safe extends FloatingMenu {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.close;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.safe;
        /** @type {Phaser.GameObjects.Image} */
        this.start;


        // close
        const close = scene.add.rectangle(0, 0, 80, 80);
        close.isFilled = true;
        close.fillColor = 65535;
        close.fillAlpha = 0.5;
        this.add(close);

        // safe
        const safe = scene.add.rectangle(0, -50, 256, 40);
        safe.isFilled = true;
        safe.fillColor = 65535;
        safe.fillAlpha = 0.5;
        this.add(safe);

        // start
        const start = scene.add.image(0, -90, "main", "list/small");
        start.visible = false;
        this.add(start);

        this.close = close;
        this.safe = safe;
        this.start = start;

        /* START-USER-CTR-CODE */

        this.initMenu()

        // Map of message ids to message text, used by networking and hotkeys
        this.safeMessagesMap = {}
        this.setSafeMessagesMap(this.crumbs.safe_messages)

        this.subItems = []

        this.cellHeight = 64
        this.cellWidth = {
            1: 268,
            2: 532
        }

        this.timer

        this.createSafeList(this.crumbs.safe_messages)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setSafeMessagesMap(messages) {
        for (let list of messages) {
            this.safeMessagesMap[list.id] = list.name

            if (list.menu) {
                this.setSafeMessagesMap(list.menu)
            }
        }
    }

    createSafeList(list, column = 0, wide = 1, parentX = 0, parentY = 0, parentWidth = 0) {
        let group = []

        let x = this.getListX(column, wide, parentX, parentWidth)
        let y = this.getListY(list.length - 1, parentY)

        for (let item of list) {
            let safeItem = new SafeItem(this.scene, x, y)

            safeItem.init(item, column, wide)

            if (column > 0) {
                this.subItems.push(safeItem)
            }

            this.add(safeItem)
            group.push(safeItem)

            y += this.cellHeight
        }

        return group
    }

    showSafeList(list) {
        for (let item of list) {
            item.visible = true
        }
    }

    closeLists(column = 0) {
        for (let item of this.subItems) {
            if (item.column > column) {
                item.visible = false
            }
        }
    }

    getListX(column, wide, parentX, parentWidth) {
        if (column < 1) {
            return 0
        } else {
            let cellWidth = this.cellWidth[wide]

            return parentX + (parentWidth / 2) + (cellWidth / 2)
        }
    }

    getListY(length, parentY) {
        let y = (parentY) ? parentY : this.start.y - (this.cellHeight * length)
        let lastY = y + (this.cellHeight * length)

        if (lastY > this.start.y) {
            y -= (lastY - this.start.y)
        }

        return y
    }

    onBackOver() {
        this.timer = this.scene.time.delayedCall(500, () => this.closeMenu())
    }

    onBackOut() {
        if (this.timer) {
            this.timer.remove()
            this.scene.time.removeEvent(this.timer)
            this.timer = null
        }
    }

    closeMenu() {
        this.visible = false
        this.closeLists()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
