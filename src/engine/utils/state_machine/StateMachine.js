export default class StateMachine {

    constructor(states) {
        this.states = states

        this.state

        for (let state of Object.values(states)) {
            state.stateMachine = this
        }
    }

    setState(state) {
        if (this.isRunningState(state)) {
            return
        }

        if (this.state) {
            this.state.exit()
        }

        this.state = this.states[state]
        this.state.enter()
    }

    isRunningState(state) {
        return this.state === this.states[state]
    }

}
