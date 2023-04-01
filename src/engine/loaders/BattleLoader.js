import BaseLoader from './BaseLoader'


export default class BattleLoader extends BaseLoader {

    constructor(scene) {
        super(scene)

        this.baseURL = '/assets/media/games/card/battles/'
        this.keyPrefix = ''
    }

    loadBattle(card, callback) {
        if (card.powerId == 0) {
            this.loadBattleSegment(`${card.elementId}_attack`)
            this.loadBattleSegment(`${card.elementId}_react`)
        }

        if (card.powerId != 0) {
            this.loadBattleSegment(`pow_${card.id}_attack`)
            this.loadBattleSegment(`pow_${card.id}_react`)
        }

        this.once('complete', () => callback())

        this.start()
    }

    loadBattleSegment(battle) {
        let key = this.getKey(battle)

        if (this.checkComplete('json', key, () => {
            this.onFileComplete(key)
        })) {
            return
        }

        this.multiatlas(key, `${battle}.json`)
    }

    onFileComplete(key) {
        if (!this.textureExists(key)) {
            return
        }

        console.log(key, 'completed')
    }

}
