function worldRankingsTennis(input) {
    let numTournament = Number(input[0]);
    let initalNumPoints = Number(input[1]);
    let pointsTournament = 0;
    let numBundledTournament = 0;
    for (let i = 2; i < input.length; i++) {
        let currentTournament = input[i];
        switch (currentTournament) {
            case "W": pointsTournament += 2000; numBundledTournament += 1; break;
            case "F": pointsTournament += 1200; break;
            case "SF": pointsTournament += 720; break;
            default: break;
        }
    }
    console.log(`Final points: ${initalNumPoints + pointsTournament}`);
    console.log(`Average points: ${Math.floor(pointsTournament / numTournament)}`);
    console.log(`${((numBundledTournament / numTournament) * 100).toFixed(2)}%`);

}
worldRankingsTennis(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);