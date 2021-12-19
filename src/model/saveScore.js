export const getScores = (gameType) => {
  const table = JSON.parse(localStorage.getItem(gameType));

  return table || [];
};

export const saveScore = (gameType, userName, userScore) => {
  const scoreTable = getScores(gameType);

  const scoreObject = {
    name: userName,
    score: userScore,
  };

  scoreTable.push(scoreObject);

  const userScoreSerialized = JSON.stringify(scoreTable);

  localStorage.setItem(gameType, userScoreSerialized);
};
