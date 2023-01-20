function tournamentWinner(competitions, results) {
    // Write your code here.
    let currentBestTeam = "";
    const scores = {[currentBestTeam]: 0};
    for(let idx = 0; idx < competitions.length; idx++) {
      let result = results[idx];
      const [homeTeam, awayTeam] = competitions[idx];
      winningTeam = result == 1 ? homeTeam : awayTeam;
      updateScore(winningTeam, 3, scores);
      if (scores[winningTeam] > scores[currentBestTeam]) {
        currentBestTeam = winningTeam;
      }
      
    }
    return currentBestTeam;
  }
  
  function updateScore(team, points, scores){
    if (!(team in scores)) scores[team] = 0;
  
    scores[team] += points;
  }
    
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;
  