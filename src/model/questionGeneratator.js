import { randomNumbers, randomValueFromArray } from "./utilities/utilites";

const generateQuestion = async (type, askedQuestion) => {
  const data = await fetchData(type);
  let answersIndexes;
  let correctAnswerIndex;
  let areAnswersDifferent;
  do{
    answersIndexes = randomNumbers(0, data.length - 1, 4);
    correctAnswerIndex = randomValueFromArray(answersIndexes);
    const filtredAnswers = data.filter((_, index) => answersIndexes.includes(index));
    areAnswersDifferent = areAllDifferent(filtredAnswers);
  } while(!areAnswersDifferent || askedQuestion.includes(correctAnswerIndex));

  const dataForQuestion = {
    answersIndexes,
    correctAnswerIndex,
    data,
  };

  return getQuestion(dataForQuestion);
}

const fetchData = async (type) => {
  let response = await fetch(`https://breakingbadapi.com/api/${type}`);
  let data = await response.json();
  if(type === 'characters'){
    return charactersTypeData(data);
    }
  if(type === 'quotes') {
    return quoteTypeData(data);
  }
  if(type === 'deaths') {
    return deathTypeData(data);
  }
}

const charactersTypeData = (data) => {
  return data.map(({name, img}) => ({
    answer: name,
    questionObject: img,
  }));
}

const quoteTypeData = (data) => {
  return data.map(({quote, author}) => ({
    answer: author,
    questionObject: quote,
  }));
}

const deathTypeData = (data) => {
  return data.map(({death, cause})=> ({
    answer: death,
    questionObject: cause,
  }));
}

const areAllDifferent = (filtredAnswers) => {
  const answers = [...filtredAnswers.map(({answer})=> answer)];
  while(answers.length != 1){
    const answer = answers.pop();
    if(answers.includes(answer)) {
      return false;
    }
  }
  return true;
}

const getQuestion = ( {answersIndexes, correctAnswerIndex, data}) => ({
  answers: data.filter((_, index) => answersIndexes.includes(index)).map(({answer}) => answer),
  correctAnswer: data[correctAnswerIndex].answer,
  questionObject: data[correctAnswerIndex].questionObject,
});

export default generateQuestion;