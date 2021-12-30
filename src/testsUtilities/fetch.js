const charactersTestData = [
  { name: 'CharacterName 1', img: 'Character1.img' },
  { name: 'CharacterName 2', img: 'Character2.img' },
  { name: 'CharacterName 3', img: 'Character3.img' },
  { name: 'CharacterName 4', img: 'Character4.img' },
  { name: 'CharacterName 5', img: 'Character5.img' },
  { name: 'CharacterName 5', img: 'Character5.img' },
  { name: 'CharacterName 6', img: 'Character6.img' },
  { name: 'CharacterName 6', img: 'Character6.img' },
  { name: 'CharacterName 6', img: 'Character6.img' },
  { name: 'CharacterName 7', img: 'Character7.img' },
];

const fetch = jest.fn(() =>
  Promise.resolve({ json: () => charactersTestData, charactersTestData }),
);

export default fetch;
