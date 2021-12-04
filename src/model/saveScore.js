const saveScore = (gameType, userName, userScore) =>{
    const scoreObject = {
        'name': userName, 
        'score': userScore
    };

    let userScore_serialized = JSON.stringify(scoreObject);

    localStorage.setItem(gameType, userScore_serialized);
    
    //console.log(userScore_serialized);
}

export default saveScore;


export const getScoresForGameType = ()  => {

    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
    values.push( localStorage.getItem(keys[i]) );
    }

    return values;

}
