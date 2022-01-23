import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Server extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.server;
        /** @type {Phaser.GameObjects.Image} */
        this.buddy;
        /** @type {Phaser.GameObjects.Image} */
        this.safe;
        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {Phaser.GameObjects.Image} */
        this.full;
        /** @type {Phaser.GameObjects.Image[]} */
        this.bars;
        /** @type {string} */
        this.name = "";
        /** @type {boolean} */
        this.safe = false;


        // server
        const server = scene.add.image(0, 0, "servers", "server");
        this.add(server);

        // bar_5
        const bar_5 = scene.add.image(322, 1, "servers", "bar_empty");
        bar_5.setOrigin(0.5161290322580645, 0.5098039215686274);
        this.add(bar_5);

        // bar_4
        const bar_4 = scene.add.image(277, 1, "servers", "bar_empty");
        bar_4.setOrigin(0.5161290322580645, 0.5098039215686274);
        this.add(bar_4);

        // bar_3
        const bar_3 = scene.add.image(232, 1, "servers", "bar_empty");
        bar_3.setOrigin(0.5161290322580645, 0.5098039215686274);
        this.add(bar_3);

        // bar_2
        const bar_2 = scene.add.image(187, 1, "servers", "bar_empty");
        bar_2.setOrigin(0.5161290322580645, 0.5098039215686274);
        this.add(bar_2);

        // bar_1
        const bar_1 = scene.add.image(142, 1, "servers", "bar_full");
        bar_1.setOrigin(0.5135135135135135, 0.5084745762711864);
        this.add(bar_1);

        // buddy
        const buddy = scene.add.image(-338, 0, "servers", "offline");
        buddy.setOrigin(0.509090909090909, 0.509090909090909);
        this.add(buddy);

        // safe
        const safe = scene.add.image(79, 1, "servers", "safe");
        safe.setOrigin(0.509090909090909, 0.5094339622641509);
        this.add(safe);

        // name
        const name = scene.add.text(-125, 0, "", {});
        name.setOrigin(0.5, 0.5);
        name.setStyle({ "fixedWidth":350,"fontFamily": "Arial", "fontSize": "50px" });
        this.add(name);

        // full
        const full = scene.add.image(240, 0, "servers", "full");
        full.setOrigin(0.5, 0.5076923076923077);
        full.visible = false;
        this.add(full);

        // lists
        const bars = [bar_1, bar_2, bar_3, bar_4, bar_5];

        // server (components)
        const serverButton = new Button(server);
        serverButton.spriteName = "server";
        serverButton.activeFrame = false;

        this.server = server;
        this.buddy = buddy;
        this.safe = safe;
        this.name = name;
        this.full = full;
        this.bars = bars;

        /* START-USER-CTR-CODE */

        this.button = serverButton

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setPopulation(population) {
        for (let [index, bar] of this.bars.entries()) {
            let frame = (index + 1 <= population) ? 'bar_full' : 'bar_empty'

            bar.setFrame(frame)

            this.full.visible = population >= 6
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
