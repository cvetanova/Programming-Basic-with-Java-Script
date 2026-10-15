function newHome(input) {
    let typeFlower = input[0];
    let numFlowers = Number(input[1]);
    let budjet = Number(input[2]);
    let totalPrice = 0;
    switch (typeFlower) {
        case "Roses":
            totalPrice = numFlowers * 5;
            if (numFlowers > 80) {
                totalPrice = totalPrice - (totalPrice * 0.10);
            }
            break;
        case "Dahlias":
            totalPrice = numFlowers * 3.80;
            if (numFlowers > 90) {
                totalPrice = totalPrice - (totalPrice * 0.15);
            }
            break;
        case "Tulips":
            totalPrice = numFlowers * 2.80;
            if (numFlowers > 80) {
                totalPrice = totalPrice - (totalPrice * 0.15);
            }
            break;
        case "Narcissus":
            totalPrice = numFlowers * 3;
            if (numFlowers < 120) {
                totalPrice = totalPrice + (totalPrice * 0.15);
            }
            break;
        case "Gladiolus":
            totalPrice = numFlowers * 2.50;
            if (numFlowers < 80) {
                totalPrice = totalPrice + (totalPrice * 0.20);
            }
            break;
        default:
            break;
    }
    let muney = Math.abs(budjet - totalPrice);
    if (budjet >= totalPrice) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${typeFlower} and ${muney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${muney.toFixed(2)} leva more.`);
    }
}
newHome(["Tulips","88","260"])