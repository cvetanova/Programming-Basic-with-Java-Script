function traveling(input) {
    let necessaryMuney = Number(input[0]);
    let cashOnHand = Number(input[1]);
    let numDays = 0;
    let counter = 0;
    let index = 2;
    let comand = input[index];
    while (cashOnHand < necessaryMuney) {
        index++;
        let curentSum = Number(input[index]);
        numDays++;
        if (comand === "spend") {
            cashOnHand -= curentSum;
            counter++;
            if (cashOnHand < 0) {
                cashOnHand = 0;
            }
            if (counter === 5) {
                console.log(`You can't save the money.`);
                console.log(numDays);
                break;
            }
        } else if (comand === "save") {
            counter = 0;
            cashOnHand += curentSum;
        }
        index++;
        comand = input[index];
    }
    if (cashOnHand >= necessaryMuney) {
        console.log(`You saved the money for ${numDays} days.`);
    }
}
traveling(["2000", "1000", "spend", "1200", "save", "2000"]);