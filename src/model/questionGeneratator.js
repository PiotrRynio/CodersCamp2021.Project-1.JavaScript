import { LAST_CHARACTER_ID, LAST_QUOTES_ID} from "../constants";
import { randomNumbers } from "./utilites";

const generateQuestion = async (type) => {
  if(type === "People")
    return await generatePeopleQuestion();
  if(type === "Quote")
    return await generateQuoteQuestion();
}

const generateQuoteQuestion = async () => {
  const firstIndex = 1;
  const numberOfAnswers = 4;
  const [correctAnswerId] = randomNumbers(firstIndex, LAST_QUOTES_ID, 1);
}

const generatePeopleQuestion = async () => {
  const firstIndex = 1;
  const numberOfAnswers = 4;
  const randomIds = randomNumbers(firstIndex, LAST_CHARACTER_ID, numberOfAnswers);
  const correctAnswerId = randomId(randomIds);
  const answersData = randomIds.map(await getCharacterAnswer);
  const question = {
    rightAnswer: '',
    answers: [],
    images: '',
  };

  answersData.forEach(([data]) => {
    if(data.char_id === correctAnswerId) {
      question.rightAnswer = data.name;
      question.images = data.img;
    }
    question.answers.push(data.name);
  });

  return question;
}

const randomId = (idArray) => {
  const correctIdIndex = Math.floor(Math.random() * idArray.length);
  return idArray[correctIdIndex];
}

const getCharacterAnswer = async (characterId) => {
  let response = await fetch(`https://breakingbadapi.com/api/characters/${characterId}`);
  let data = await response.json();
  return data;
}

export default generateQuestion;
