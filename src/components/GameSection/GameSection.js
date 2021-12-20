import AnswerSection from '../AnswersSection/AnswersSection';
import MainImage from '../MainImage';
import TextQuestion from '../TextQuestion/TextQuestion';
import { GAME_MODE, RULES } from '../../model/constants';

const GameSection = (category, handleUserAnswer) => {
  const gameSection = document.createElement('div');
  gameSection.classList.add('gameSection');

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

  gameSection.changeQuestion = (newQuestion) => {
    if (category === GAME_MODE.CHARACTERS) {
      questionObject.setImage(newQuestion.questionObject);
    } else {
      questionObject.setNewText(newQuestion.questionObject);
    }
    answerSection.setNewQuestionAnswers(newQuestion);
  };

  gameSection.append(categoryQuestion, questionObject, answerSection);

  return gameSection;
};

export default GameSection;
