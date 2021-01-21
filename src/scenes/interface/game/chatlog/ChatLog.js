import BaseContainer from '@scenes/base/BaseContainer'

import { SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

class ChatLog extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x, y);

        // bg
        const bg = scene.add.image(0, -440, "main", "chatlog/bg");
        this.add(bg);

        // tab
        const tab = scene.add.container(0, 0);
        this.add(tab);

        // handle
        const handle = scene.add.image(0, 8, "main", "tab");
        tab.add(handle);

        // arrow
        const arrow = scene.add.image(0, 2, "main", "tab-arrow");
        tab.add(arrow);

        // handle (components)
        const handleSimpleButton = new SimpleButton(handle);
        handleSimpleButton.callback = () => { this.onTabClick() };

        this.bg = bg;
        this.handle = handle;
        this.arrow = arrow;

        /* START-USER-CTR-CODE */

        this.open = false
        this.dragging = false

        handle.input.draggable = true
        // Drag is not detected until cursor moves 10px
        scene.input.dragDistanceThreshold = 10

        handle.on('dragstart', () => { this.onTabDragStart() })
        handle.on('drag', (pointer) => { this.onTabDrag(pointer.y) })
        handle.on('dragend', () => { this.onTabDragEnd() })

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onTabClick() {
        // Log cannot be closed during a drag
        if (this.dragging) return

        if (this.open) {
            this.y = 2
        } else {
            this.y = 222
        }

        this.open = !this.open
        this.arrow.toggleFlipY()
    }

    onTabDragStart() {
        this.dragging = true
    }

    onTabDrag(y) {
        // Keep log inside boundary
        if (y > 840) y = 840
        if (y < 2) y = 2
        this.y = y

        // If log passes 222px then set open state to true
        if (!this.open && y > 222) {
            this.open = true
            this.arrow.flipY = true
        }
    }

    onTabDragEnd() {
        // Wait 200ms before drag ends to prevent pointerup from firing immediately after drag
        setTimeout(() => {
            this.dragging = false
        }, 200)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default ChatLog
