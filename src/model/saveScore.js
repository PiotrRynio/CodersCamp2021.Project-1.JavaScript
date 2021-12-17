export const getScores = (gameType) => {
  const table = JSON.parse(localStorage.getItem(gameType));

  return table;
};

export const saveScore = (gameType, userName, userScore) => {
  let scoreTable = getScores(gameType);

  const scoreObject = {
    name: userName,
    score: userScore,
  };

  if (!scoreTable) {
    scoreTable = [];
  }

  scoreTable.push(scoreObject);

  const userScoreSerialized = JSON.stringify(scoreTable);

  localStorage.setItem(gameType, userScoreSerialized);
};
