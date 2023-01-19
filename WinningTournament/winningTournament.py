def tournamentWinner(competitions, results):
    # Write your code here.
    currentBestTeam = ""
    scores = {currentBestTeam:0}
    for indx, competition in enumerate(competitions):
        result = results[indx]
        homeTeam, awayTeam = competition
        winningTeam = homeTeam if result ==1 else awayTeam
        updateScore(winningTeam, 3, scores)
        if scores[winningTeam] > scores[currentBestTeam]:
            currentBestTeam = winningTeam
    return currentBestTeam

def updateScore(team, points, scores):
    if team not in scores:
        scores[team] = 0

    scores[team] += points
        
