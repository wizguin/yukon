import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive } from '@components/components'

import GridViewLoader from '@engine/interface/gridview/GridViewLoader'
import GridViewSlot from './gridview_slot/GridViewSlot'


/* START OF COMPILED CODE */

export default class GridView extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Container} */
        this.container;
        /** @type {Phaser.GameObjects.Container} */
        this.pageButtons;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.6;
        this.add(block);

        // grey_button
        const grey_button = scene.add.image(1472, 46, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(1472, 44, "main", "grey-x");
        this.add(grey_x);

        // container
        const container = scene.add.container(0, 0);
        this.add(container);

        // pageButtons
        const pageButtons = scene.add.container(1393, 125);
        pageButtons.visible = false;
        this.add(pageButtons);

        // down_button
        const down_button = scene.add.image(0, 688, "main", "grey-button");
        pageButtons.add(down_button);

        // grey_arrow_1
        const grey_arrow_1 = scene.add.image(0, 686, "main", "grey-arrow");
        grey_arrow_1.flipY = true;
        pageButtons.add(grey_arrow_1);

        // up_button
        const up_button = scene.add.image(0, 2, "main", "grey-button");
        pageButtons.add(up_button);

        // grey_arrow
        const grey_arrow = scene.add.image(0, 0, "main", "grey-arrow");
        pageButtons.add(grey_arrow);

        // block (components)
        new Interactive(block);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => this.visible = false;

        // down_button (components)
        const down_buttonButton = new Button(down_button);
        down_buttonButton.spriteName = "grey-button";
        down_buttonButton.callback = () => this.nextPage();

        // up_button (components)
        const up_buttonButton = new Button(up_button);
        up_buttonButton.spriteName = "grey-button";
        up_buttonButton.callback = () => this.prevPage();

        this.container = container;
        this.pageButtons = pageButtons;

        /* START-USER-CTR-CODE */

        this.scene = scene

        this.maxW = 1160
        this.maxH = 770
        this.cellSize = 418
        this.pad = 40
        this.offsetY = 30
        this.slots

        this.page = 1
        this.filter
        this.lastSize

        this.loader = new GridViewLoader(this)

        block.on('pointerup', () => this.visible = false)

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get items() {
        let items = Object.keys(this.world.client.furniture).map(item => parseInt(item))

        if (!this.filter) return items
        if (this.filter == 'igloo') return this.world.client.igloos.filter(igloo => igloo != 0)

        return items.filter(item => {
            if (this.crumbs.furniture[item].sort == this.filter) return item
        })
    }

    get pageSize() {
        return Math.min(this.items.length, this.maxPageSize)
    }

    get maxPage() {
        return Math.ceil(this.items.length / this.pageSize)
    }

    get maxPageSize() {
        return (this.filter == 'igloo') ? 6 : 54
    }

    startGrid(filter) {
        this.filter = filter
        this.page = 1

        if (this.pageSize == this.lastSize) return this.showPage()
        this.lastSize = this.pageSize

        this.container.removeAll(true)
        this.slots = this.createSlots()

        let cols = this.getColumns(this.pageSize)
        let rows = Math.ceil(this.pageSize / cols)

        this.createGrid(cols, rows)
        this.showPage()
    }

    showPage() {
        if (!this.visible) return

        this.pageButtons.visible = this.pageSize >= this.maxPageSize

        let page = this.items.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
        this.loader.loadPage(this.filter, page)
    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) return

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) return

        this.page = page
        this.showPage()
    }

    createSlots() {
        let slots = []

        for (let i = 0; i < this.pageSize; i++) {
            let slot = new GridViewSlot(this.scene)
            this.container.add(slot)
            slots.push(slot)
        }

        return slots
    }

    createGrid(cols, rows, cellSize = this.cellSize) {
        cellSize += this.pad

        Phaser.Actions.GridAlign(this.slots, {
            width: cols,
            height: rows,
            cellWidth: cellSize,
            cellHeight: cellSize,
            position: Phaser.Display.Align.CENTER,
            // Starting x and y position
            x: (cellSize) / 2,
            y: (cellSize) / 2
        })

        let totalW = cellSize * cols
        let totalH = cellSize * rows
        let scale = this.getScale(totalW, totalH)

        // Centers container
        let remainingW = 1520 - (totalW * scale)
        let remainingH = 960 - (totalH * scale)

        this.container.x = remainingW / 2
        this.container.y = remainingH / 2 - (this.offsetY * scale)
        this.container.scale = scale
    }

    /**
     * Returns the number of columns for the grid.
     *
     * @param {number} i - Items length
     */
    getColumns(i) {
        switch (true) {
            case (i <= 3): return i
            case (i == 4): return 2
            case (i <= 6): return 3
            case (i <= 12): return 4
            case (i <= 20): return 5
            case (i <= 30): return 6
            case (i <= 42): return 8
            case (i <= 54): return 9
            default: break
        }
    }

    /**
     * Returns the scale for the grid container. Will clamp width/height
     * to a maximum value and return the minimum.
     *
     * @param {number} totalW
     * @param {number} totalH
     */
    getScale(totalW, totalH) {
        let scaleX = 1
        let scaleY = 1

        if (totalW > this.maxW) scaleX = this.maxW / totalW
        if (totalH > this.maxH) scaleY = this.maxH / totalH

        return Math.min(scaleX, scaleY)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
