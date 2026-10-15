function exam(input) {
    let numPoorGrades = Number(input[0]);
    let index = 1;
    let comand = input[index];
    let counter = 0;
    let numTask = 0;;
    let score = 0;
    while (comand !== "Enough") {
        let grade = Number(input[index + 1]);
        index++;
        if (grade <= 4) {
            counter++;
            if (counter === numPoorGrades) {
                console.log(`You need a break, ${numPoorGrades} poor grades.`);
                break;
            }
        }
        score += grade;
        numTask++;
        index++;
        comand = input[index];
    }
    if (comand === "Enough") {
        console.log(`Average score: ${(score / numTask).toFixed(2)}`);
        console.log(`Number of problems: ${numTask}`);
        console.log(`Last problem: ${input[index-2]}`);
    }
}
exam(["2","Income","3","Game Info","6","Best Player","4"]);