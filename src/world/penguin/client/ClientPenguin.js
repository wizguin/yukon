import ClientActions from './ClientActions'
import Penguin from '../Penguin'


export default class ClientPenguin extends Penguin {

    constructor(data, room, x, y, penguinLoader) {
        super(data, room, x, y, penguinLoader)

        penguinLoader.addRing(this)
    }

    setActions() {
        return new ClientActions(this)
    }

}
