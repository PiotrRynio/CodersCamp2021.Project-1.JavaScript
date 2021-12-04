import generateQuestion from "./questionGenerator";

describe("generateQuestion", () => {
  test("if we ask for characters we should get object with answers, correctAnswer and questionObject", async ()=>{
    const {answers, correctAnswer, questionObject} = await generateQuestion('characters',[]);
    expect(answers).not.toBeUndefined();
    expect(correctAnswer).not.toBeUndefined();
    expect(questionObject).not.toBeUndefined();
  })
})