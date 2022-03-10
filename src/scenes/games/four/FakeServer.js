export default class FakeServer {

    constructor(client) {
        this.client = client

        // mock implementation

        this.currentTurn = 1
        this.map = Array.from({ length: 7 }, () => Array(6).fill(0))
        this.mapTEST = Array.from({ length: 7 }, () => Array(6).fill(0))

        this.started = false

        this.players = []
    }

    getGame() {
        this.client.handleGetGame(this.mapTEST)
    }

    joinGame() {
        if (this.players.length >= 2) {
            this.started = true
            return this.client.handleStartGame()
        }

        this.players.push('test')

        let turnId = this.players.indexOf('test') + 1
        this.client.handleJoinGame(turnId)

        // this needs to be sent to both players
        this.client.handleAddPlayer('test', turnId)
    }

    sendMove(column) {
        if (!this.started) {
            return
        }

        // need to add checking player turn id here

        if (!this.isValidMove(column)) {
            return
        }

        let move = this.makeMove(column)
        this.client.handleSendMove(this.currentTurn, move[0], move[1])

        this.currentTurn = (this.currentTurn === 1) ? 2 : 1
    }

    isValidMove(column) {
        if (column < 0 || column > 6 || this.map[column][0] !== 0) {
            return false
        }

        return true
    }

    makeMove(column) {
        let row = this.map[column].lastIndexOf(0)
        this.map[column][row] = this.currentTurn

        return [column, row]
    }

}
