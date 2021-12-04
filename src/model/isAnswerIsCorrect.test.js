import {isAnswerIsCorrect} from "./isAnswerIsCorrect.js"; 

describe ('isAnswerIsCorrect', () => {
    it('properly compares two good asnwers', () => {
        expect(isAnswerIsCorrect('A', 'A')).toBe(true);
      });

    it('properly compares two wrong answers', () => {
        expect(isAnswerIsCorrect('A', 'B')).toBe(false);
      });  

    it('check if both of types are strings', () => {
        expect(isAnswerIsCorrect({}, 'A')).toBe(false);
      });

    it('check if input is not equal null', () => {
        expect(isAnswerIsCorrect(null, 'A')).toBe(false);
      });  

    it('check if input is not equal undefined', () => {
        expect(isAnswerIsCorrect(undefined, 'A')).toBe(false);
      });     
      
    it('check if input is not empty', () => {
        expect(isAnswerIsCorrect()).toBe(false);
      });  

    it('check if there are not more than two inputs', () => {
        expect(isAnswerIsCorrect('A','B','C')).toBe(false);
      });  

    it('check if there are not less than two inputs', () => {
        expect(isAnswerIsCorrect('A')).toBe(false);
      });  
      
    });
