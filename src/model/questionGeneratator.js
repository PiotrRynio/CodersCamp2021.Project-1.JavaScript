import { LAST_CHARACTER_ID as lastIndex} from "./constantVariables";
import { getRandomNumbers } from "./utilites";

const generateQuestion = async (type) => {
  if(type === "People")
    return await generatePeopleQuestion();
  if(type === "Quote")
    return await generateQuoteQuestion();
}

const generateQuoteQuestion = async ( ) => {

}

const generatePeopleQuestion = async ( ) => {
  const firstIndex = 1;
  const numberOfAnswers = 4;
  const randomIds = getRandomNumbers(firstIndex, lastIndex, numberOfAnswers);
  const correctAnswerId = getRandomId(randomIds);
  const answersData = await randomIds.map(getCharacterAnswer);
  const question = {
    answers: [],
  };

  await answersData.forEach((answer) => {
    answer.then(([data]) => {
      if(data.char_id === correctAnswerId) {
        question.rightAnswer = data.name;
        question.images = data.img;
      }
      question.answers.push(data.name);
    });
  });

  return question;
}

const getRandomId = (idArray) => {
  const correctIdIndex = Math.floor(Math.random() * idArray.length);
  return idArray[correctIdIndex];
}

const getCharacterAnswer = async (characterId) => {
  let response = await fetch(`https://breakingbadapi.com/api/characters/${characterId}`);
  let data = await response.json();
  return data;
}

export default generateQuestion;
