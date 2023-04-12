/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import SenseiMenuItem from "./SenseiMenuItem";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class SenseiMenu extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {NinePatchContainer} */
        this.bg;
        /** @type {SenseiMenuItem[]} */
        this.items;


        // bg
        const bg = scene.add.ninePatchContainer(0, -162, 848, 323, "sensei", "menu/bg");
        bg.marginLeft = 60;
        bg.marginTop = 40;
        bg.marginRight = 60;
        bg.marginBottom = 45;
        bg.ninePatchContainerOriginY = 0;
        this.add(bg);

        // senseiMenuItem4
        const senseiMenuItem4 = new SenseiMenuItem(scene, 0, 92);
        senseiMenuItem4.visible = false;
        this.add(senseiMenuItem4);

        // senseiMenuItem3
        const senseiMenuItem3 = new SenseiMenuItem(scene, 0, 30);
        senseiMenuItem3.visible = false;
        this.add(senseiMenuItem3);

        // senseiMenuItem2
        const senseiMenuItem2 = new SenseiMenuItem(scene, 0, -32);
        senseiMenuItem2.visible = false;
        this.add(senseiMenuItem2);

        // senseiMenuItem1
        const senseiMenuItem1 = new SenseiMenuItem(scene, 0, -94);
        senseiMenuItem1.visible = false;
        this.add(senseiMenuItem1);

        // lists
        const items = [senseiMenuItem1, senseiMenuItem2, senseiMenuItem3, senseiMenuItem4];

        this.bg = bg;
        this.items = items;

        /* START-USER-CTR-CODE */

        this.menus = {
            start: [
                {
                    text: 'Competition Mode',
                    callback: () => console.log('matchmaking'),
                    icon: 'menu/icon/belt'
                },
                {
                    text: 'Sensei Mode',
                    callback: () => console.log('sensei'),
                    icon: 'menu/icon/sensei'
                },
                // {
                //     text: 'Instructions',
                //     callback: () => console.log('instructions'),
                //     icon: 'menu/icon/instructions'
                // }
            ]
        }

        this.loadMenu('start')

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    loadMenu(menu) {
        if (!(menu in this.menus)) {
            return
        }

        this.menu = this.menus[menu]

        this.updateMenu()
    }

    updateMenu() {
        if (!this.menu) {
            return
        }

        for (let i = 0; i < this.menu.length; i++) {
            let config = this.menu[i]

            let item = this.items[i]

            item.show(config)
        }

        this.resizeMenu()
    }

    resizeMenu() {
        this.bg.height = (this.menu.length * 61) + 78
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
