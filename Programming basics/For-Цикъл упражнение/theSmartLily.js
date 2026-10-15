function theSmartLily(input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let unitPriceToy = Number(input[2]);
    let muney = 0;
    let savedMuney = 0;
    let numberToy = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            muney += 10;
            savedMuney += (muney - 1);
        } else {
            numberToy += 1;
        }
    }
    savedMuney += (unitPriceToy * numberToy);
    if (savedMuney >= priceWashingMachine) {
        console.log(`Yes! ${(savedMuney - priceWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceWashingMachine - savedMuney).toFixed(2)}`)
    }
}
theSmartLily(["10", "170.00", "6"]);