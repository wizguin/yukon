import BaseScene from '@scenes/base/BaseScene'


export default class InterfaceScene extends BaseScene {

    loadPrefab(prefab, depth = 1, visible = false) {
        prefab.depth = depth
        prefab.visible = visible

        this.add.existing(prefab)

        return prefab
    }

}
