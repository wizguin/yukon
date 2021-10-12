import BaseContainer from '@scenes/base/BaseContainer'


export default class FloatingMenu extends BaseContainer {

    initMenu() {
        if (this.safe) this.setupSafe()
        if (this.close) this.setupClose()

        this.back = this.createBack()
    }

    setupSafe() {
        this.safe.isFilled = false
        this.safe.setInteractive()
    }

    setupClose() {
        this.close.isFilled = false
        this.close.setInteractive({ cursor: 'pointer' })

        this.close.on('pointerup', () => this.closeMenu())
    }

    createBack() {
        let back = this.scene.add.rectangle(-this.x, -this.y, 1520, 960)

        back.setOrigin(0)
        back.setInteractive()

        this.add(back)
        this.sendToBack(back)

        back.on('pointerover', () => this.onBackOver())
        back.on('pointerout', () => this.onBackOut())
        back.on('pointerup', () => this.onBackUp())

        return back
    }

    onBackOver() {
        this.closeMenu()
    }

    onBackOut() {

    }

    onBackUp() {
        this.closeMenu()
    }

    closeMenu() {
        this.visible = false
    }

}
