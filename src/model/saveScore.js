const saveScore = (gameType, userName, userScore) =>{

    let scoreTable = JSON.parse(localStorage.getItem(gameType));

    const scoreObject = {
        'name': userName, 
        'score': userScore
    };

    if(!scoreTable){
        scoreTable = [];
    }

    scoreTable.push(scoreObject);

    let userScore_serialized = JSON.stringify(scoreTable);

    localStorage.setItem(gameType, userScore_serialized);

}

export default saveScore;


export const getScores = (gameType)  => {

    const table = [];
    table.push(JSON.parse(localStorage.getItem(gameType)));

    return table;

}
