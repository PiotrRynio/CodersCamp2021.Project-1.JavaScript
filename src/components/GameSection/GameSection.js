import AnswerSection from '../AnswersSection/AnswersSection';
import MainImage from '../MainImage';
import TextQuestion from '../TextQuestion/TextQuestion';
import { GAME_MODE, RULES } from '../../model/constants';
import Timer from '../Timer';

const GameSection = (category, handleUserAnswer) => {
  const gameSection = document.createElement('div');
  gameSection.classList.add('gameSection');
  gameSection.timer = Timer();

  const question = {
    answers: ['', '', '', ''],
    questionObject: '',
    correctAnswer: '',
  };

  if (category === GAME_MODE.CHARACTERS) {
    gameSection.classList.add('gameSection--image');
  } else {
    gameSection.classList.add('gameSection--text');
  }

  const answerSection = AnswerSection(question, handleUserAnswer);
  const questionObject =
    category === GAME_MODE.CHARACTERS
      ? MainImage(question.questionObject)
      : TextQuestion(question.questionObject);
  const categoryQuestion = TextQuestion(RULES[category].question);

  const categoryQuestionWithTimer = document.createElement('div');
  categoryQuestionWithTimer.classList.add('gameSection__questionAndTimer');
  categoryQuestionWithTimer.append(categoryQuestion, gameSection.timer);

  gameSection.changeQuestion = (newQuestion) => {
    if (category === GAME_MODE.CHARACTERS) {
      questionObject.setImage(newQuestion.questionObject);
    } else {
      questionObject.setNewText(newQuestion.questionObject);
    }
    answerSection.setNewQuestionAnswers(newQuestion);
  };

  gameSection.append(categoryQuestionWithTimer, questionObject, answerSection);

  return gameSection;
};

export default GameSection;
