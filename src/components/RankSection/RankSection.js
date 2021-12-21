import { getScores } from '../../model/saveScore';
import RankRecord from '../RankRecord/RankRecord';

const RankSection = (categoryName) => {
  const rankSection = document.createElement('section');
  rankSection.classList.add('rankSection');

  const category = document.createElement('h2');
  category.classList.add('rankSection__category');

  const ranks = document.createElement('div');
  ranks.classList.add('rankSection__ranks');

  rankSection.changeRanks = (newCategoryName) => {
    category.textContent = `Ranking: ${newCategoryName}`;

    const scores = getScores(newCategoryName);
    const rankRecords = scores
      .sort((thisPlayer, nextPlayer) => (thisPlayer.score > nextPlayer.score ? -1 : 1))
      .slice(0, scores.length > 20 ? 20 : scores.length)
      .map((playerScore, index) => RankRecord(index + 1, playerScore));

    ranks.innerHTML = '';
    ranks.append(...rankRecords);
  };

  rankSection.changeRanks(categoryName);

  rankSection.append(category, ranks);

  return rankSection;
};

export default RankSection;
