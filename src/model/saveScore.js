export const saveScore = (gameType, userName, userScore) =>{

    let scoreTable = localStorage.getItem(gameType);
    console.log(scoreTable);
    let scoreTableParse = JSON.parse(scoreTable);

    const scoreObject = {
        'name': userName, 
        'score': userScore
    };

    if(!scoreTable){
        scoreTable = [];
    }

    scoreTable.push(scoreObject);

    const userScore_serialized = JSON.stringify(scoreTable);

    localStorage.setItem(gameType, userScore_serialized);

}


export const getScores = (gameType)  => {

    const table = [];
    table.push(JSON.parse(localStorage.getItem(gameType)));

    return table;

}
