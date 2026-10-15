function steps(input) {
    let stepsDay = 10000;
    let numSteps = 0;
    let index = 0
    let comand = input[index];
    while (comand !== "Going home") {
        let curentSteps = Number(comand);
        numSteps += curentSteps;
        if (numSteps >= stepsDay) {
            console.log(`Goal reached! Good job!`);
            if (numSteps > stepsDay) {
                console.log(`${numSteps - stepsDay} steps over the goal!`);
                break;
            }
        }
        index++;
        comand = input[index];
    }
    if (comand === "Going home") {
        numSteps += Number(input[index + 1]);
        if (numSteps >= stepsDay) {
            console.log(`Goal reached! Good job!`);
            if (numSteps > stepsDay) {
                console.log(`${numSteps - stepsDay} steps over the goal!`);
            }
        } else {
            console.log(`${stepsDay - numSteps} more steps to reach goal.`);
        }
    }
}
steps(["1500", "300", "2500", "3000", "Going home", "200"]);