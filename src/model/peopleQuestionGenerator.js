import { LAST_CHARACTER_ID } from "../constants";
import { randomNumbers, randomValueFromArray } from "./utilities/utilites";

const askedQuestions = [];

const generatePeopleQuestion = async () => {
  const firstIndex = 1;
  const numberOfAnswers = 4;
  let randomIds;
  let correctAnswerId;
  do {
    randomIds = randomNumbers(firstIndex, LAST_CHARACTER_ID, numberOfAnswers);
    correctAnswerId = randomValueFromArray(randomIds);
  }
  while(askedQuestions.includes(correctAnswerId));
  askedQuestions.push(correctAnswerId);
  const allCharactersData = await getCharactersData();
  const questionCharactesData = allCharactersData.filter(({char_id}) => randomIds.includes(char_id));

  const question = {
    rightAnswer: '',
    answers: [],
    images: '',
  };

  questionCharactesData.forEach((character) => {
    if(character.char_id === correctAnswerId) {
      question.rightAnswer = character.name;
      question.images = character.img;
    }
    question.answers.push(character.name);
  });
  return question;
}

const getCharactersData = async () => {
  let response = await fetch(`https://breakingbadapi.com/api/characters`);
  let data = await response.json();
  return data;
}

export default generatePeopleQuestion;