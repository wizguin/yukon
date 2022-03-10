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

    sendMove(col) {
        if (!this.started) {
            return
        }

        // need to add checking player turn id here

        if (!this.isValidMove(col)) {
            return
        }

        let move = this.makeMove(col)
        this.client.handleSendMove(this.currentTurn, move[0], move[1])

        this.currentTurn = (this.currentTurn === 1) ? 2 : 1
    }

    isValidMove(col) {
        if (col < 0 || col > 6 || this.map[col][0] !== 0) {
            return false
        }

        return true
    }

    makeMove(col) {
        let row = this.map[col].lastIndexOf(0)
        this.map[col][row] = this.currentTurn

        this.isWin(col, row)
        this.isFull()

        return [col, row]
    }

    isWin(col, row) {
        for (let [deltaRow, deltaCol] of [[1, 0], [0, 1], [1, 1], [1, -1]]) {
            let streak = 1

            for (let delta of [1, -1]) {
                deltaRow *= delta
                deltaCol *= delta

                let nextRow = row + deltaRow
                let nextCol = col + deltaCol

                while (nextRow >= 0 && nextRow < 6 && nextCol >= 0 && nextCol < 7) {
                    if (this.map[nextCol][nextRow] === this.currentTurn) {
                        streak++
                    } else {
                        break
                    }

                    if (streak === 4) {
                        return true
                    }

                    nextRow += deltaRow
                    nextCol += deltaCol
                }
            }
        }

        return false
    }

    isFull() {
        for (let col of this.map) {
            if (!col[0]) {
                return false
            }
        }

        return true
    }

}
