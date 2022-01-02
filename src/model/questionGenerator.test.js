import generateQuestion from './questionGenerator';

describe('generateQuestion', () => {
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

  const quotesTestData = [
    { author: 'CharacterName 1', quote: 'Quote1' },
    { author: 'CharacterName 2', quote: 'Quote2' },
    { author: 'CharacterName 3', quote: 'Quote3' },
    { author: 'CharacterName 4', quote: 'Quote4' },
    { author: 'CharacterName 5', quote: 'Quote5' },
    { author: 'CharacterName 5', quote: 'Quote6' },
    { author: 'CharacterName 6', quote: 'Quote7' },
    { author: 'CharacterName 6', quote: 'Quote8' },
    { author: 'CharacterName 6', quote: 'Quote9' },
    { author: 'CharacterName 7', quote: 'Quote10' },
  ];

  const deathsTestData = [
    { death: 'CharacterName 1', cause: 'Cause 1' },
    { death: 'CharacterName 2', cause: 'Cause 2' },
    { death: 'CharacterName 3', cause: 'Cause 3' },
    { death: 'CharacterName 4', cause: 'Cause 4' },
    { death: 'CharacterName 5', cause: 'Cause 5' },
    { death: 'CharacterName 5', cause: 'Cause 6' },
    { death: 'CharacterName 6', cause: 'Cause 7' },
    { death: 'CharacterName 6', cause: 'Cause 8' },
    { death: 'CharacterName 6', cause: 'Cause 9' },
    { death: 'CharacterName 7', cause: 'Cause 10' },
  ];

  test('if we ask for characters we should get object with answers, correctAnswer and questionObject', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => charactersTestData, charactersTestData }),
    );
    const generator = await generateQuestion('characters');
    const { answers, correctAnswer, questionObject } = generator.getQuestion('Kmicic');
    expect(answers).toBeTruthy();
    expect(correctAnswer).toBeTruthy();
    expect(questionObject).toBeTruthy();
  });

  test('if we ask for quotes we should get object with answers, correctAnswer and questionObject', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => quotesTestData, quotesTestData }));
    const generator = await generateQuestion('quotes');
    const { answers, correctAnswer, questionObject } = generator.getQuestion('Kmicic');
    expect(answers).toBeTruthy();
    expect(correctAnswer).toBeTruthy();
    expect(questionObject).toBeTruthy();
  });

  test('if we ask for deaths we should get object with answers, correctAnswer and questionObject', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => deathsTestData, deathsTestData }));
    const generator = await generateQuestion('deaths');
    const { answers, correctAnswer, questionObject } = generator.getQuestion('Kmicic');
    expect(answers).toBeTruthy();
    expect(correctAnswer).toBeTruthy();
    expect(questionObject).toBeTruthy();
  });

  test('if we ask for question we should get object with 4 answers', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => deathsTestData, deathsTestData }));
    const generator = await generateQuestion('deaths');
    const { answers } = generator.getQuestion('Kmicic');
    expect(answers).toHaveLength(4);
  });

  test('if we ask for question we should get corectAnswer inside answers', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => charactersTestData, charactersTestData }),
    );
    const generator = await generateQuestion('characters');
    const { answers, correctAnswer } = generator.getQuestion('Kmicic');
    expect(answers.includes(correctAnswer)).toBeTruthy();
  });

  test('if we ask for question we should get different answers', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => quotesTestData, quotesTestData }));
    const generator = await generateQuestion('quotes');
    const { answers } = generator.getQuestion('Kmicic');
    const answersSet = new Set(answers);
    expect(answersSet.size).toBe(4);
  });
});
