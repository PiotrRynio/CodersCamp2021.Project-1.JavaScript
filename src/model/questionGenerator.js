import randomNumbers from './utilities/randomNumbers';
import randomValueFromArray from './utilities/randomValueFromArray';

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

async function fetchData(category) {
  const response = await fetch(`https://breakingbadapi.com/api/${category}`);
  const data = await response.json();
  if (category === 'characters') {
    return charactersTypeData(data);
  }
  if (category === 'quotes') {
    return quoteTypeData(data);
  }
  if (category === 'deaths') {
    return deathTypeData(data);
  }
  return 'Wrong type';
}

const areAllDifferent = (filtredAnswers) => {
  const answers = [...filtredAnswers.map(({ answer }) => answer)];
  while (answers.length !== 1) {
    const answer = answers.pop();
    if (answers.includes(answer)) {
      return false;
    }
  }
  return true;
};

const questionGenerator = async (category) => {
  const generator = {};
  const data = await fetchData(category.toLowerCase());

  const askedQuestionIndexes = [];
  const askedQuestions = [];
  const playersIndexes = {};

  const addNewQuestion = () => {
    let answersIndexes;
    let correctAnswerIndex;
    let areAnswersDifferent;
    do {
      answersIndexes = randomNumbers(0, data.length - 1, 4);
      correctAnswerIndex = randomValueFromArray(answersIndexes);
      const filtredAnswers = answersIndexes.map((index) => data[index]);
      areAnswersDifferent = areAllDifferent(filtredAnswers);
    } while (!areAnswersDifferent || askedQuestionIndexes.includes(correctAnswerIndex));
    askedQuestionIndexes.push(correctAnswerIndex);
    askedQuestions.push({
      answers: data
        .filter((_, index) => answersIndexes.includes(index))
        .map(({ answer }) => answer),
      correctAnswer: data[correctAnswerIndex].answer,
      questionObject: data[correctAnswerIndex].questionObject,
    });
  };

  generator.getQuestion = (playerName) => {
    playersIndexes[playerName] =
      typeof playersIndexes[playerName] === 'undefined' ? 0 : playersIndexes[playerName] + 1;
    if (askedQuestions.length === playersIndexes[playerName]) {
      addNewQuestion();
    }
    return askedQuestions[playersIndexes[playerName]];
  };

  return generator;
};

export default questionGenerator;
