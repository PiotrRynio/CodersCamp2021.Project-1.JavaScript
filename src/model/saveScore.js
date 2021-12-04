const saveScore = (gameType, userName, userScore) =>{

    const scoreTable = [];

    if(getScoresForGameType(gameType) !== null){
        scoreTable.push(JSON.parse(localStorage.getItem(gameType)));
    }

    const scoreObject = {
        'name': userName, 
        'score': userScore
    };

    scoreTable.push(scoreObject);

    let userScore_serialized = JSON.stringify(scoreTable);

    localStorage.setItem(gameType, userScore_serialized);

}

export default saveScore;


export const getScoresForGameType = (gameType)  => {

    const table = [];
    table.push(JSON.parse(localStorage.getItem(gameType)));

    return table;

}
