import './scss/style.scss';
import Wrapper from './layouts/MainWrapper';
import player from './model/utilities/player';
import computerPlayer from './model/utilities/computerPlayer';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  const PLayer1 = player();
  const Player2 = computerPlayer(player);
  const questionX = {
    answers: ["Declan's men and his cook.", 'Los Pollos driver', 'No-Doze', 'Max Arciniega'],
    questionObject: 'Beaten to death.',
  };

  const showQuestion = () => {
    // eslint-disable-next-line no-console
    console.log('Pokazano pytanie');
  };

  const generateNewQuestion = () => {};

  const handlePlayerAnswered = () => {
    // eslint-disable-next-line no-console
    console.log('Wyswietlono poprawna odpowiedz');
    generateNewQuestion();
  };

  PLayer1.askQuestion(showQuestion, questionX);
  Player2.askQuestion(showQuestion, questionX, handlePlayerAnswered);
}

main();
