import { getScores } from '../../model/saveScore';
import RankRecord from '../RankRecord/RankRecord';

const RankSection = (categoryName) => {
  const rankSection = document.createElement('section');
  rankSection.classList.add('rankSection');

  const category = document.createElement('h2');
  category.classList.add('rankSection__category');
  category.textContent = `Ranking: ${categoryName}`;

  const ranks = document.createElement('div');
  ranks.classList.add('rankSection__ranks');

  const scores = getScores(categoryName);
  const rankRecords = scores
    .sort((thisPlayer, nextPlayer) => (thisPlayer.score > nextPlayer.score ? -1 : 1))
    .slice(0, scores.length > 20 ? 20 : scores.length)
    .map((playerScore, index) => RankRecord(index + 1, playerScore));

  ranks.append(...rankRecords);

  rankSection.append(category, ranks);

  return rankSection;
};

export default RankSection;
