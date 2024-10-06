const totalQuestions = 8

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import QuizButton from "../button/QuizButton";
/* START-USER-IMPORTS */

import MultiChoiceQuiz from '@engine/interface/quiz/MultiChoiceQuiz'

/* END-USER-IMPORTS */

export default class TourQuiz extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {QuizButton} */
        this.option4;
        /** @type {QuizButton} */
        this.option3;
        /** @type {QuizButton} */
        this.option2;
        /** @type {QuizButton} */
        this.option1;
        /** @type {Phaser.GameObjects.Text} */
        this.questionText;
        /** @type {Phaser.GameObjects.Container} */
        this.question;
        /** @type {QuizButton} */
        this.infoButton;
        /** @type {Phaser.GameObjects.Text} */
        this.infoText;
        /** @type {Phaser.GameObjects.Text} */
        this.infoTitle;
        /** @type {Phaser.GameObjects.Container} */
        this.info;
        /** @type {QuizButton[]} */
        this.options;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.ninePatchContainer(760, 484, 708, 664, "prompt", "window");
        bg.marginLeft = 50;
        bg.marginTop = 50;
        bg.marginRight = 50;
        bg.marginBottom = 50;
        this.add(bg);

        // question
        const question = scene.add.container(760, 214);
        question.visible = false;
        this.add(question);

        // option4
        const option4 = new QuizButton(scene, 0, 497);
        question.add(option4);

        // option3
        const option3 = new QuizButton(scene, 0, 387);
        question.add(option3);

        // option2
        const option2 = new QuizButton(scene, 0, 277);
        question.add(option2);

        // option1
        const option1 = new QuizButton(scene, 0, 167);
        question.add(option1);

        // questionText
        const questionText = scene.add.text(0, 79, "", {});
        questionText.setOrigin(0.5, 0.5);
        questionText.text = "Text";
        questionText.setStyle({ "align": "center", "color": "#000", "fixedWidth":590,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        questionText.setWordWrapWidth(590, true);
        question.add(questionText);

        // questionTitle
        const questionTitle = scene.add.text(0, 0, "", {});
        questionTitle.setOrigin(0.5, 0.5);
        questionTitle.text = "Text";
        questionTitle.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":9,"shadow.color": "#003366", "shadow.blur":3,"shadow.stroke":true});
        question.add(questionTitle);

        // info
        const info = scene.add.container(760, 234);
        this.add(info);

        // infoButton
        const infoButton = new QuizButton(scene, 0, 401);
        info.add(infoButton);

        // infoText
        const infoText = scene.add.text(0, 59, "", {});
        infoText.setOrigin(0.5, 0);
        infoText.text = "Text";
        infoText.setStyle({ "align": "center", "color": "#000", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        infoText.setWordWrapWidth(600);
        info.add(infoText);

        // infoTitle
        const infoTitle = scene.add.text(0, 0, "", {});
        infoTitle.setOrigin(0.5, 0.5);
        infoTitle.text = "Text";
        infoTitle.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":9,"shadow.color": "#003366", "shadow.blur":3,"shadow.stroke":true});
        info.add(infoTitle);

        // lists
        const options = [option1, option2, option3, option4];

        // block (components)
        new Interactive(block);

        // option4 (prefab fields)
        option4.onClick = () => this.onOptionClick(4);

        // option3 (prefab fields)
        option3.onClick = () => this.onOptionClick(3);

        // option2 (prefab fields)
        option2.onClick = () => this.onOptionClick(2);

        // option1 (prefab fields)
        option1.onClick = () => this.onOptionClick(1);

        // infoButton (prefab fields)
        infoButton.onClick = () => this.onStartClick();

        this.option4 = option4;
        this.option3 = option3;
        this.option2 = option2;
        this.option1 = option1;
        this.questionText = questionText;
        this.question = question;
        this.infoButton = infoButton;
        this.infoText = infoText;
        this.infoTitle = infoTitle;
        this.info = info;
        this.options = options;

        /* START-USER-CTR-CODE */

        this.quiz = null

        questionTitle.text = this.getString('tour_question_title')

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        this.info.visible = true
        this.question.visible = false

        if (this.world.client.isTourGuide) {
            this.setAlready()

        } else if (this.world.client.daysOld < 45) {
            this.setTooYoung()

        } else {
            this.quiz = new MultiChoiceQuiz(this.crumbs.tour_quiz, totalQuestions, true)
            this.setStart()
        }

        super.show()
    }

    onStartClick() {
        this.nextQuestion()

        this.info.visible = false
        this.question.visible = true
    }

    onOptionClick(selectedOption) {
        const option = this.options[selectedOption - 1]

        this.quiz.submitAnswer(option.text)
        this.nextQuestion()
    }

    onReceiveClick() {
        this.interface.prompt.showItem(428)
        this.close()
    }

    nextQuestion() {
        const nextQuestion = this.quiz.nextQuestion()

        if (!nextQuestion) {
            this.endQuiz()
            return
        }

        this.questionText.text = nextQuestion.question

        for (const [i, answer] of Object.keys(nextQuestion.answers).entries()) {
            this.options[i].text = answer
        }
    }

    endQuiz() {
        if (this.quiz.correctAnswers > 6) {
            this.setSuccess()
        } else {
            this.setFailure()
        }

        this.question.visible = false
        this.info.visible = true
    }

    setStart() {
        this.infoTitle.text = this.getString('tour_start_title')
        this.infoText.text = this.getFormatString('tour_start_text', this.getString('game'))
        this.infoButton.text = this.getString('tour_start_button')

        this.infoButton.onClick = () => this.onStartClick()
    }

    setAlready() {
        this.infoTitle.text = this.getString('tour_fail_title')
        this.infoText.text = this.getString('tour_already_text')
        this.infoButton.text = this.getString('ok')

        this.infoButton.onClick = () => this.close()
    }

    setTooYoung() {
        const ageText = this.getString('tour_age_text')
        const daysOld = this.getFormatString('days_old', this.world.client.daysOld)

        this.infoTitle.text = this.getString('tour_fail_title')
        this.infoText.text = `${ageText}\n\n${daysOld}`
        this.infoButton.text = this.getString('ok')

        this.infoButton.onClick = () => this.close()
    }

    setSuccess() {
        this.infoTitle.text = this.getString('tour_success_title')
        this.infoText.text = this.getFormatString('tour_success_text', this.getString('game'))
        this.infoButton.text = this.getString('tour_success_button')

        this.infoButton.onClick = () => this.onReceiveClick()
    }

    setFailure() {
        this.infoTitle.text = this.getString('tour_fail_title')
        this.infoText.text = this.getString('tour_fail_text')
        this.infoButton.text = this.getString('done')

        this.infoButton.onClick = () => this.close()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
