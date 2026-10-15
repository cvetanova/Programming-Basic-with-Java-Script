function oscars(input) {
    let nameActor = input[0];
    let pointsAcademies = Number(input[1]);
    let numEvaluate = Number(input[2]);
    let nameEvaluateLength = 0;
    let pointsEvaluate = 0;
    let totalpoints = pointsAcademies;
    for (let i = 3; i < input.length; i++) {
        if (i % 2 !== 0) {
            nameEvaluateLength = input[i].length;
        } else {
            pointsEvaluate = Number(input[i]);
            totalpoints += ((nameEvaluate * pointsEvaluate) / 2);
            if (totalpoints >= 1250.5) {
                console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${totalpoints.toFixed(1)}!`);
                break;
            }
        }
    }
    if (totalpoints < 1250.5) {
        console.log(`Sorry, ${nameActor} you need ${(1250.5 - totalpoints).toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);