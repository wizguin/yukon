export const preload = {
    key: 'agent_quiz-pack',
    url: 'assets/media/interface/quiz/agent/agent_quiz-pack.json',
    loadString: 'agent_quiz'
}

/* START OF COMPILED CODE */

import BaseContainer from "../../../base/BaseContainer";
import Interactive from "../../../components/Interactive";
import QuizButton from "../button/QuizButton";
import Button from "../../../components/Button";
/* START-USER-IMPORTS */

import MultiChoiceQuiz from '@engine/interface/quiz/MultiChoiceQuiz'

/* END-USER-IMPORTS */

export default class AgentQuiz extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {QuizButton} */
        this.option3;
        /** @type {QuizButton} */
        this.option2;
        /** @type {QuizButton} */
        this.option1;
        /** @type {Phaser.GameObjects.Text} */
        this.reward2;
        /** @type {Phaser.GameObjects.Text} */
        this.reward1;
        /** @type {Phaser.GameObjects.Text} */
        this.rewardsText;
        /** @type {Phaser.GameObjects.Container} */
        this.rewards;
        /** @type {Phaser.GameObjects.Text} */
        this.mission3;
        /** @type {Phaser.GameObjects.Text} */
        this.mission2;
        /** @type {Phaser.GameObjects.Text} */
        this.mission1;
        /** @type {Phaser.GameObjects.Text} */
        this.missionText;
        /** @type {Phaser.GameObjects.Container} */
        this.mission;
        /** @type {Phaser.GameObjects.Text} */
        this.doneText;
        /** @type {Phaser.GameObjects.Text} */
        this.questionText;
        /** @type {Phaser.GameObjects.Text} */
        this.infoText;
        /** @type {Phaser.GameObjects.Text} */
        this.title;
        /** @type {QuizButton[]} */
        this.options;
        /** @type {Array<Phaser.GameObjects.Container|Phaser.GameObjects.Text>} */
        this.components;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // agent
        const agent = scene.add.image(364, 370, "agent_quiz", "agent");
        agent.setOrigin(0.5012787723785166, 0.5008319467554077);
        this.add(agent);

        // bg
        const bg = scene.add.ninePatchContainer(760, 440, 704, 576, "prompt", "window");
        bg.marginLeft = 50;
        bg.marginTop = 50;
        bg.marginRight = 50;
        bg.marginBottom = 50;
        this.add(bg);

        // option3
        const option3 = new QuizButton(scene, 760, 636);
        option3.visible = true;
        this.add(option3);

        // option2
        const option2 = new QuizButton(scene, 760, 524);
        option2.visible = true;
        this.add(option2);

        // option1
        const option1 = new QuizButton(scene, 760, 412);
        option1.visible = true;
        this.add(option1);

        // rewards
        const rewards = scene.add.container(760, 279);
        rewards.visible = false;
        this.add(rewards);

        // reward2
        const reward2 = scene.add.text(-184, 159, "", {});
        reward2.text = "Text";
        reward2.setStyle({ "color": "#000", "fixedWidth":500,"fontFamily": "Arial Narrow", "fontSize": "28px" });
        reward2.setWordWrapWidth(500, true);
        rewards.add(reward2);

        // reward1
        const reward1 = scene.add.text(-184, 79, "", {});
        reward1.text = "Text";
        reward1.setStyle({ "color": "#000", "fixedWidth":500,"fontFamily": "Arial Narrow", "fontSize": "28px" });
        reward1.setWordWrapWidth(500, true);
        rewards.add(reward1);

        // hq
        const hq = scene.add.image(-250, 215, "agent_quiz", "hq");
        hq.setOrigin(0.5079365079365079, 0.5);
        rewards.add(hq);

        // phone
        const phone = scene.add.image(-250, 101, "agent_quiz", "phone");
        rewards.add(phone);

        // rewardsText
        const rewardsText = scene.add.text(0, 0, "", {});
        rewardsText.setOrigin(0.5, 0);
        rewardsText.text = "Text";
        rewardsText.setStyle({ "align": "center", "color": "#000", "fixedWidth":590,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        rewardsText.setWordWrapWidth(590, true);
        rewards.add(rewardsText);

        // mission
        const mission = scene.add.container(760, 279);
        mission.visible = false;
        this.add(mission);

        // mission3
        const mission3 = scene.add.text(-203, 210, "", {});
        mission3.text = "Text";
        mission3.setStyle({ "color": "#000", "fixedWidth":500,"fontFamily": "Arial Narrow", "fontSize": "28px" });
        mission3.setWordWrapWidth(500, true);
        mission.add(mission3);

        // mission2
        const mission2 = scene.add.text(-203, 134, "", {});
        mission2.text = "Text";
        mission2.setStyle({ "color": "#000", "fixedWidth":500,"fontFamily": "Arial Narrow", "fontSize": "28px" });
        mission2.setWordWrapWidth(500, true);
        mission.add(mission2);

        // mission1
        const mission1 = scene.add.text(-203, 58, "", {});
        mission1.text = "Text";
        mission1.setStyle({ "color": "#000", "fixedWidth":500,"fontFamily": "Arial Narrow", "fontSize": "28px" });
        mission1.setWordWrapWidth(500, true);
        mission.add(mission1);

        // number3
        const number3 = scene.add.text(-250, 236, "", {});
        number3.setOrigin(0.5, 0.5);
        number3.text = "(3)";
        number3.setStyle({ "align": "center", "color": "#003366", "fixedWidth":80,"fontFamily": "CCFaceFront", "fontSize": "36px", "fontStyle": "bold italic" });
        number3.setWordWrapWidth(590, true);
        mission.add(number3);

        // number2
        const number2 = scene.add.text(-250, 156, "", {});
        number2.setOrigin(0.5, 0.5);
        number2.text = "(2)";
        number2.setStyle({ "align": "center", "color": "#003366", "fixedWidth":80,"fontFamily": "CCFaceFront", "fontSize": "36px", "fontStyle": "bold italic" });
        number2.setWordWrapWidth(590, true);
        mission.add(number2);

        // number1
        const number1 = scene.add.text(-250, 76, "", {});
        number1.setOrigin(0.5, 0.5);
        number1.text = "(1)";
        number1.setStyle({ "align": "center", "color": "#003366", "fixedWidth":80,"fontFamily": "CCFaceFront", "fontSize": "36px", "fontStyle": "bold italic" });
        number1.setWordWrapWidth(590, true);
        mission.add(number1);

        // missionText
        const missionText = scene.add.text(0, 0, "", {});
        missionText.setOrigin(0.5, 0);
        missionText.text = "Text";
        missionText.setStyle({ "align": "center", "color": "#000", "fixedWidth":590,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        missionText.setWordWrapWidth(590, true);
        mission.add(missionText);

        // doneText
        const doneText = scene.add.text(760, 299, "", {});
        doneText.setOrigin(0.5, 0);
        doneText.visible = false;
        doneText.text = "Text";
        doneText.setStyle({ "align": "center", "color": "#000", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        doneText.setWordWrapWidth(600, true);
        this.add(doneText);

        // questionText
        const questionText = scene.add.text(760, 279, "", {});
        questionText.setOrigin(0.5, 0);
        questionText.visible = false;
        questionText.text = "Text";
        questionText.setStyle({ "align": "center", "color": "#000", "fixedWidth":590,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        questionText.setWordWrapWidth(590, true);
        this.add(questionText);

        // infoText
        const infoText = scene.add.text(760, 324, "", {});
        infoText.setOrigin(0.5, 0);
        infoText.visible = false;
        infoText.text = "Text";
        infoText.setStyle({ "align": "center", "color": "#000", "fixedWidth":600,"fontFamily": "Arial Narrow", "fontSize": "32px" });
        infoText.setWordWrapWidth(600, true);
        this.add(infoText);

        // title
        const title = scene.add.text(760, 235, "", {});
        title.setOrigin(0.5, 0.5);
        title.text = "Text";
        title.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":9,"shadow.color": "#003366", "shadow.blur":3,"shadow.stroke":true});
        this.add(title);

        // blueButton
        const blueButton = scene.add.image(1056, 206, "main", "blue-button");
        this.add(blueButton);

        // blueX
        const blueX = scene.add.image(1056, 204, "main", "blue-x");
        this.add(blueX);

        // lists
        const options = [option1, option2, option3];
        const components = [mission, rewards, infoText, questionText, doneText];

        // block (components)
        new Interactive(block);

        // option3 (prefab fields)
        option3.onClick = () => this.onOptionClick(3);

        // option2 (prefab fields)
        option2.onClick = () => this.onOptionClick(2);

        // option1 (prefab fields)
        option1.onClick = () => this.onOptionClick(1);

        // blueButton (components)
        const blueButtonButton = new Button(blueButton);
        blueButtonButton.spriteName = "blue-button";
        blueButtonButton.callback = () => this.close();

        this.option3 = option3;
        this.option2 = option2;
        this.option1 = option1;
        this.reward2 = reward2;
        this.reward1 = reward1;
        this.rewardsText = rewardsText;
        this.rewards = rewards;
        this.mission3 = mission3;
        this.mission2 = mission2;
        this.mission1 = mission1;
        this.missionText = missionText;
        this.mission = mission;
        this.doneText = doneText;
        this.questionText = questionText;
        this.infoText = infoText;
        this.title = title;
        this.options = options;
        this.components = components;

        /* START-USER-CTR-CODE */

        this.quiz = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show() {
        if (this.world.client.isSecretAgent) {
            this.setAlready()

        } else if (this.world.client.daysOld < 30) {
            this.setTooYoung()

        } else {
            this.quiz = new MultiChoiceQuiz(this.crumbs.agent_quiz)
            this.setStart()
        }

        super.show()
    }

    setStart() {
        this.clear()

        this.showText(this.title, this.getString('agent_start_title'))
        this.showText(this.infoText, this.getFormatString('agent_start_text', this.getString('game')))

        this.showOption(3, this.getString('agent_start_button'), () => this.setMission())
    }

    setTooYoung() {
        this.clear()

        const ageText = this.getString('agent_age_text')
        const daysOld = this.getFormatString('days_old', this.world.client.daysOld)

        this.showText(this.title, this.getString('agent_fail_title'))
        this.showText(this.infoText, `${ageText}\n\n${daysOld}`)

        this.showOption(3, this.getString('ok'), () => this.close())
    }

    setAlready() {
        this.clear()

        this.showText(this.title, this.getString('agent_already_title'))
        this.showText(this.infoText, this.getString('agent_already_text'))

        this.showOption(3, this.getString('ok'), () => this.close())
    }

    setMission() {
        this.clear()

        this.showText(this.title, this.getString('agent_mission_title'))
        this.showText(this.missionText, this.getString('agent_mission_text'))
        this.showText(this.mission1, this.getString('agent_mission1_text'))
        this.showText(this.mission2, this.getString('agent_mission2_text'))
        this.showText(this.mission3, this.getString('agent_mission3_text'))

        this.showOption(3, this.getString('agent_mission_button'), () => this.setRewards())

        this.mission.visible = true
    }

    setRewards() {
        this.clear()

        this.showText(this.title, this.getString('agent_rewards_title'))
        this.showText(this.rewardsText, this.getString('agent_rewards_text'))
        this.showText(this.reward1, this.getString('agent_reward1_text'))
        this.showText(this.reward2, this.getString('agent_reward2_text'))

        this.showOption(3, this.getString('agent_rewards_button'), () => this.setReady())

        this.rewards.visible = true
    }

    setReady() {
        this.clear()

        this.showText(this.title, this.getString('agent_ready_title'))
        this.showText(this.questionText, this.getString('agent_ready_text'))

        this.showOption(2, this.getString('yes'), () => this.startQuiz())
        this.showOption(3, this.getString('no'), () => this.close())
    }

    setDone() {
        this.clear()

        this.showText(this.title, this.getString('agent_done_title'))
        this.showText(this.doneText, this.getFormatString('agent_done_text', this.getString('game')))

        this.showOption(3, this.getString('done'), () => this.close())
    }

    startQuiz() {
        this.clear()
        this.showText(this.title, this.getString('agent_question_title'))
        this.nextQuestion()
    }

    nextQuestion() {
        const nextQuestion = this.quiz.nextQuestion()

        if (!nextQuestion) {
            this.endQuiz()
            return
        }

        this.showText(this.questionText, nextQuestion.question)

        for (const [i, answer] of Object.keys(nextQuestion.answers).entries()) {
            this.showOption(i + 1, answer, () => this.onOptionClick(answer))
        }
    }

    endQuiz() {
        if (this.quiz.correctAnswers === this.quiz.totalQuestions) {
            this.network.send('add_item', { item: 800 })
        }

        this.setDone()
    }

    onOptionClick(answer) {
        this.quiz.submitAnswer(answer)
        this.nextQuestion()
    }

    showOption(number, text, onClick) {
        const option = this.options[number - 1]

        option.text = text
        option.onClick = onClick

        option.show()
    }

    showText(textObject, text) {
        textObject.text = text
        textObject.visible = true
    }

    clear() {
        this.components.forEach(component => component.visible = false)
        this.options.forEach(option => option.close())
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
