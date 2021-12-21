const RankRecord = (rankingPlace, playerScore) => {
  const rankRecord = document.createElement('div');
  rankRecord.classList.add('rankRecord');

  const name = document.createElement('span');
  rankRecord.classList.add('rankRecord__name');
  const score = document.createElement('span');
  rankRecord.classList.add('rankRecord__score');

  name.textContent = `${rankingPlace}. ${playerScore.name}`;
  score.textContent = `${playerScore.score}`;

  rankRecord.append(name, score);

  return rankRecord;
};

export default RankRecord;
