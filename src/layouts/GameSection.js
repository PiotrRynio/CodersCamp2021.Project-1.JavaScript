import MenuArea from './MenuArea';

const GameSection = () => {
  const gameSection = document.createElement('div');
  gameSection.classList.add('gamesection');
  gameSection.id = 'gamesection';
  gameSection.appendChild(MenuArea());
  return gameSection;
};
export default GameSection;
