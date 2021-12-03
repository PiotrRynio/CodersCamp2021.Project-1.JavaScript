import { LAST_QUOTES_ID } from "../constants";
import { randomNumbers } from "./utilities/utilites";

const generateQuoteQuestion = async () => {
  const firstIndex = 1;
  const numberOfAnswers = 4;
  const [correctAnswerId] = randomNumbers(firstIndex, LAST_QUOTES_ID, 1);

}

export default generateQuoteQuestion;