export function checkIfAnswerIsCorrect(correctAnswer,userAnswer){
  if (arguments.length !== 2){return -1}
  else if ((typeof(arguments[0]) !== 'string')||(typeof(arguments[1])) !== 'string'){return -2}
  else {return ((correctAnswer===userAnswer) ? 1 : 0) }
}