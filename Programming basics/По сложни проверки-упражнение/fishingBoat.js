function fishingBoat(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let numFisherman = Number(input[2]);
    let priceRent = 0
    switch (season) {
        case "Spring":
            priceRent = 3000;
            break;
        case "Summer":
        case "Autumn":
            priceRent = 4200;
            break;
        case "Winter":
            priceRent = 2600;
            break;
        default:
            break;
    }
    if (numFisherman <= 6) {
        priceRent = priceRent - (priceRent * 0.10);
    } else if (numFisherman >= 7 && numFisherman <= 11) {
        priceRent = priceRent - (priceRent * 0.15);
    } else if (numFisherman >= 12) {
        priceRent = priceRent - (priceRent * 0.25);
    }
    if (numFisherman % 2 === 0 && season != "Autumn") {
        priceRent = priceRent - (priceRent * 0.05);
    }
    let muney = Math.abs(budjet - priceRent);
    if (budjet >= priceRent) {
        console.log(`Yes! You have ${muney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${muney.toFixed(2)} leva.`);
    }
}
fishingBoat(["2000", "Winter", "13"])