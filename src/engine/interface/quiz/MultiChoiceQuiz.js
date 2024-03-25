export default class MultiChoiceQuiz {

    constructor(questions, totalQuestions = questions.length, randomize = false) {
        this.questions = questions
        this.totalQuestions = totalQuestions

        if (randomize) {
            Phaser.Utils.Array.Shuffle(questions)
        }

        this.remainingQuestions = questions.slice(0, totalQuestions)
        this.currentQuestion = null
        this.correctAnswers = 0
    }

    nextQuestion() {
        if (!this.remainingQuestions.length) {
            return null
        }

        this.currentQuestion = this.remainingQuestions.shift()

        return this.currentQuestion
    }

    submitAnswer(answerKey) {
        if (!(answerKey in this.currentQuestion.answers)) {
            return
        }

        const answer = this.currentQuestion.answers[answerKey]

        if (answer) {
            this.correctAnswers++
        }
    }

}
