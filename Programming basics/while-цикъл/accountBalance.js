function accountBalance(input) {
    let index = 0;
    let comand = input[index];
    let totalSum = 0;
    while (comand != "NoMoreMoney") {
        let currentSum = Number(comand);
        if (currentSum < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        console.log("Increase: " + currentSum.toFixed(2));
        totalSum += currentSum;
        index++;
        comand = input[index];
    }
    console.log("Total: " + totalSum.toFixed(2));
}
accountBalance(["120", "45.55", "-150"]);