import { checkIfAnswerIsCorrect } from "./checkIfAnswerIsCorrect.js"; 

test('properly compares two good asnwers', ()=>{
    expect(checkIfAnswerIsCorrect('A','A')).toBe(1)})

test('properly compares two wrong answers', ()=>{
    expect(checkIfAnswerIsCorrect('A','B')).toBe(0)})

test('check if both of types are strings',()=>{
    let A = {}; 
    expect(checkIfAnswerIsCorrect(A,'A')).toBe(-2)})

test('check if input is not equal null ',()=>{
    let A = null; 
    expect(checkIfAnswerIsCorrect(A,'A')).toBe(-2)})

test('check if input is not equal undefined ',()=>{
    let A = undefined; 
    expect(checkIfAnswerIsCorrect(A,'A')).toBe(-2)})    

test('check if input is not empty ',()=>{
    expect(checkIfAnswerIsCorrect()).toBe(-1)}) 

test('check if there are not more than two inputs',()=>{
    expect(checkIfAnswerIsCorrect('A','B','C')).toBe(-1)}) 

test('check if there are not less than two inputs',()=>{
    expect(checkIfAnswerIsCorrect('A')).toBe(-1)}) 