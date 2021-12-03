import { randomNumbers, randomValueFromArray } from "./utilities/utilites";

const generateQuestion = async (type, askedQuestion) => {
  const data = await fetchData(type);

  let answersIndexes;
  let correctAnswerIndex;
  do{
    answersIndexes = randomNumbers(0, data.length - 1, 4);
    correctAnswerIndex = randomValueFromArray(answersIndexes);
  }
  while(askedQuestion.includes(correctAnswerIndex));

  const dataForQuestion = {
    answersIndexes,
    correctAnswerIndex,
    data,
  };

  const question = questionForType(type, dataForQuestion);
  return question;

}

const fetchData = async (type) => {
  let response = await fetch(`https://breakingbadapi.com/api/${type}`);
  let data = await response.json();
  return data;
}

const questionForType = (type, dataForQuestion) => {
  if(type === 'characters'){
    return characterQuestion(dataForQuestion);
  }
  if(type === 'quotes') {
    return quoteQuestion(dataForQuestion);
  }
  if(type === 'deaths') {
    return deathQuestion(dataForQuestion);
  }
}

const characterQuestion = ({answersIndexes, correctAnswerIndex, data}) => {
  const answers = data.filter((character, index) => answersIndexes.includes(index))
    .map(character => character.name);
  const correctAnswer = data[correctAnswerIndex].name;
  const image = data[correctAnswerIndex].img;
  return ({
    answers,
    correctAnswer,
    image,
  });
}

const quoteQuestion = ({answersIndexes, correctAnswerIndex, data}) => {
  const answers = data.filter((quote, index) => answersIndexes.includes(index))
    .map(quote => quote.author);
  const correctAnswer = data[correctAnswerIndex].author;
  const quote = data[correctAnswerIndex].quote;
  return ({
    answers,
    correctAnswer,
    quote,
  });
}

const deathQuestion = ({answersIndexes, correctAnswerIndex, data}) => {
  const answers = data.filter((death, index) => answersIndexes.includes(index))
    .map(death => death.death);
  const correctAnswer = data[correctAnswerIndex].death;
  const cause = data[correctAnswerIndex].cause;
  return ({
    answers,
    correctAnswer,
    cause,
  });
}
export default generateQuestion;
