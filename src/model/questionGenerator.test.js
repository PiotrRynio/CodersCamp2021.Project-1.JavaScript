import generateQuestion from './questionGenerator';
import { charactersTestData, quotesTestData, deathsTestData } from './questionGeneratorTestData';

describe("generateQuestion", () => {
  test("if we ask for characters we should get object with answers, correctAnswer and questionObject", async () => {
    global.fetch = jest.fn(()=> Promise.resolve({json: () => charactersTestData,
      charactersTestData}));
    const {answers, correctAnswer, questionObject} = await generateQuestion('characters',[]);
    expect(answers).not.toBeUndefined();
    expect(correctAnswer).not.toBeUndefined();
    expect(questionObject).not.toBeUndefined();
  });

  test("if we ask for quotes we should get object with answers, correctAnswer and questionObject", async () => {
    global.fetch = jest.fn(()=> Promise.resolve({json: () => quotesTestData,
      quotesTestData}));
    const {answers, correctAnswer, questionObject} = await generateQuestion('quotes',[]);
    expect(answers).not.toBeUndefined();
    expect(correctAnswer).not.toBeUndefined();
    expect(questionObject).not.toBeUndefined();
  });

  test("if we ask for characters we should get object with answers, correctAnswer and questionObject", async () => {
    global.fetch = jest.fn(()=> Promise.resolve({json: () => deathsTestData,
      deathsTestData}));
    const {answers, correctAnswer, questionObject} = await generateQuestion('deaths',[]);
    expect(answers).not.toBeUndefined();
    expect(correctAnswer).not.toBeUndefined();
    expect(questionObject).not.toBeUndefined();
  });

  test("if we ask for question we should get object with 4 answers", async () => {
    global.fetch = jest.fn(()=> Promise.resolve({json: () => deathsTestData,
      deathsTestData}));
    const {answers} = await generateQuestion('deaths',[]);
    expect(answers.length).toBe(4);
  });

  test("if we ask for question we should get corectAnswer inside answers", async () => {
    global.fetch = jest.fn(()=> Promise.resolve({json: () => charactersTestData,
      charactersTestData}));
    const {answers, correctAnswer} = await generateQuestion('characters',[]);
    expect(answers.includes(correctAnswer)).toBeTruthy();
  });

  test("if we ask for question we should get different answers", async () => {
    global.fetch = jest.fn(()=> Promise.resolve({json: () => quotesTestData,
      quotesTestData}));
    const {answers} = await generateQuestion('quotes',[]);
    const answersSet = new Set(answers);
    expect(answersSet.size).toBe(4);
  });

})