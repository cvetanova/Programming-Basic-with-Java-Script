function shoping(input) {
    let budjet = Number(input[0]);
    let numVideocard = Number(input[1]);
    let numProcessor = Number(input[2]);
    let numRam = Number(input[3]);
    let totalPriceVideocards = numVideocard * 250;
    let priceProcessor = totalPriceVideocards * 0.35;
    let priceRam = totalPriceVideocards * 0.10;
    let totalPriceProcessor = numProcessor * priceProcessor;
    let totalPriceRam = numRam * priceRam;
    let totalSum = totalPriceProcessor + totalPriceRam + totalPriceVideocards;
    if (numVideocard > numProcessor) {
        totalSum = totalSum - (totalSum * 0.15);
    }
    let muney = Math.abs(budjet - totalSum);
    if (budjet >= totalSum) {
        console.log(`You have ${muney.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${muney.toFixed(2)} leva more!`)
    }
}
shoping(["900", "2", "1", "3"])