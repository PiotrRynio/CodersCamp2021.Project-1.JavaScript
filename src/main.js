import './scss/style.scss';
import Wrapper from './layouts/MainWrapper';
import player from './model/utilities/player';

function main() {
  document.querySelector('#app').appendChild(Wrapper());
  const PLayer1 = player(); 
  const Player2 = computerPlayer(player());
  const questionX = {
    answers: ["Declan's men and his cook.", 'Los Pollos driver', 'No-Doze', 'Max Arciniega'],
    //correctAnswer: 'No-Doze',
    questionObject: 'Beaten to death.',
  }

  const showQuestion=()=>{
    console.log('Pokazano pytanie');
  }

  const generateNewQuestion=()=>{
  }

    const handlePlayerAnswered=()=>{
      console.log("Wyswietlono poprawna odpowiedz");
      generateNewQuestion(); 
  }

  PLayer1.askQuestion(showQuestion, questionX); 
  Player2.askQuestion(showQuestion, questionX, handlePlayerAnswered);

}



main(
  


  
  //callback1pyt to jest funkcja ktora wyswietla pytanie (handlequestionasked)
  //callback2pyt to jest funkcja ktora NIC nie robi
  //calback1odp to jest funkcja ktora wyswietla odpowiedz i generuje nastepne(nowe) pytanie 
  //callback2odp to jjest funkcja ktora generuje nastepne(nowe)pytanie



  //w momencie gdy player kliknie na przycisk wywolamy player1.answer(callback1odp, odpowiedz)
  //nie wywolujemy player2.answer, computerMind sam to zrobi
);

/*
computerMind(player)=>{
  //computerMind powinien miec funkcje na obiekcie (askquestion) ktora z zewnatrz wywolamy 
  // w momencie wywolania wywolaj player'a ktory zostal przekazany player.askquestion(callbackDoLosowaniaPytania, questionX)
  // funkcja callbackDoLosowaniaPytania ktora przyjmuje argumenty jak powyzej, nastepnie losuje pytanie, 
  //wywoluje player.answer(callback2odp, odpowiedz)  

  //computerMind zwraca obiekt z a 

  player.answer()
};
