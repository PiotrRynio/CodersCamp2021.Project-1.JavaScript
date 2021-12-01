import checkIfAnswerIsCorrect from './checkIfAnswerIsCorrect.js'; 

test('properly compares two asnwers', ()=>{
    expect(checkIfAnswerIsCorrect('A','A').toEqual(true))
}

)