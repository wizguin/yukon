// v1.2.0

import NinePatchContainer from './NinePatchContainer'


export default function registerNinePatchContainerFactory() {
    Phaser.GameObjects.GameObjectFactory.register('ninePatchContainer', function(x, y, width, height, key, frame) {
        return this.displayList.add(new NinePatchContainer(this.scene, x, y, width, height, key, frame))
    })
}
