import { LAST_CHARACTER_ID as lastIndex} from "./constantVariables";
import { getRandomNumbers } from "./utilites";

const generateQuestion = () => {
  const firstIndex = 1;
  const numberOfAnswers = 4;
  const randomIds = getRandomNumbers(firstIndex, lastIndex, numberOfAnswers);
}

