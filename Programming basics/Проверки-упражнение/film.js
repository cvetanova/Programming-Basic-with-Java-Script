function film(input) {
    let budjet = Number(input[0]);
    let numStatist = Number(input[1]);
    let priceAutfit = Number(input[2]);
    let decor = budjet * 0.10;
    let totalPriceAutfits = numStatist * priceAutfit;
    if (numStatist > 150) {
       totalPriceAutfits= totalPriceAutfits- (totalPriceAutfits * 0.10);
    }
    let totalSum = totalPriceAutfits + decor;
    let muney = Math.abs(budjet - totalSum);
    if (totalSum > budjet) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${muney.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${muney.toFixed(2)} leva left.`)
    }
}
film(["20000", "120", "55.5"]);