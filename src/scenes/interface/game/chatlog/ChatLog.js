import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class ChatLog extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Image} */
        this.handle;
        /** @type {Phaser.GameObjects.Image} */
        this.arrow;


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

        // bg (components)
        new Interactive(bg);

        // handle (components)
        const handleSimpleButton = new SimpleButton(handle);
        handleSimpleButton.callback = () => { this.onTabClick() };

        this.bg = bg;
        this.handle = handle;
        this.arrow = arrow;

        /* START-USER-CTR-CODE */

        this.textStyle = {
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#000000',
            align: 'left',
            fixedWidth: 720
        }

        this.messages = []
        this.containers = this.createContainers()

        this.open = false
        this.dragging = false

        scene.events.once('update', () => this.addInput())

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    addInput() {
        this.handle.input.draggable = true
        // Drag is not detected until cursor moves 10px
        this.scene.input.dragDistanceThreshold = 10

        this.handle.on('dragstart', () => this.onTabDragStart())
        this.handle.on('drag', (pointer) => this.onTabDrag(pointer.y))
        this.handle.on('dragend', () => this.onTabDragEnd())
    }

    createContainers() {
        let containers = []
        let y = -17

        for (let i = 1; i <= 20; i++) {
            y -= 40

            let container = this.scene.add.image(0, y, 'main', 'chatlog/message')
            container.id = null
            container.text = this.scene.add.text(0, y, '', this.textStyle)
            container.text.setOrigin(0.5)

            this.add([ container, container.text ])
            containers.push(container)

            let component = new Button(container)
            component.spriteName = 'chatlog/message'
            component.activeFrame = false
            component.callback = () => this.onMessageClick(container.id)
        }

        return containers
    }

    addMessage(id, username, message) {
        if (this.messages.length == 20) this.messages.pop()

        this.messages.unshift({ id: id, message: `${username}: ${message}` })
        this.updateMessages()
    }

    updateMessages() {
        for (let [index, message] of this.messages.entries()) {
            let container = this.containers[index]

            container.id = message.id
            container.text.text = message.message
        }
    }

    clearMessages() {
        this.messages = []

        for (let container of this.containers) {
            container.id = null
            container.text.text = ''
        }
    }

    onMessageClick(id) {
        if (id) {
            this.interface.showCard(id)
        }
    }

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
        this.y = Math.round(y)

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
