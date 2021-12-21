import randomNumbers from './utilities/randomNumbers';
import randomValueFromArray from './utilities/randomValueFromArray';

const question = async (type, askedQuestionBefore) => {
  const data = await fetchData(type);
  let answersIndexes;
  let correctAnswerIndex;
  let areAnswersDifferent;
  do {
    answersIndexes = randomNumbers(0, data.length - 1, 4);
    correctAnswerIndex = randomValueFromArray(answersIndexes);
    const filtredAnswers = data.filter((_, index) => answersIndexes.includes(index));
    areAnswersDifferent = areAllDifferent(filtredAnswers);
  } while (!areAnswersDifferent || askedQuestionBefore.includes(correctAnswerIndex));
  askedQuestionBefore.push(correctAnswerIndex);
  return {
    answers: data.filter((_, index) => answersIndexes.includes(index)).map(({ answer }) => answer),
    correctAnswer: data[correctAnswerIndex].answer,
    questionObject: data[correctAnswerIndex].questionObject,
  };
};

const fetchData = async (type) => {
  let response = await fetch(`https://breakingbadapi.com/api/${type}`);
  let data = await response.json();
  if (type === 'characters') {
    return charactersTypeData(data);
  }
  if (type === 'quotes') {
    return quoteTypeData(data);
  }
  if (type === 'deaths') {
    return deathTypeData(data);
  }
};

const charactersTypeData = (data) => {
  return data.map(({ name, img }) => ({
    answer: name,
    questionObject: img,
  }));
};

const quoteTypeData = (data) => {
  return data.map(({ quote, author }) => ({
    answer: author,
    questionObject: quote,
  }));
};

const deathTypeData = (data) => {
  return data.map(({ death, cause }) => ({
    answer: death,
    questionObject: cause,
  }));
};

const areAllDifferent = (filtredAnswers) => {
  const answers = [...filtredAnswers.map(({ answer }) => answer)];
  while (answers.length != 1) {
    const answer = answers.pop();
    if (answers.includes(answer)) {
      return false;
    }
  }
  return true;
};

export default question;
