function hotelRoom(input) {
    let mounth = input[0];
    let overnaightStay = Number(input[1]);
    let priceStudio = 0;
    let priceApartament = 0;
    switch (mounth) {
        case "May":
        case "October":
            priceStudio = overnaightStay * 50;
            priceApartament = overnaightStay * 65;
            if (overnaightStay > 7 && overnaightStay <= 14) {
                priceStudio = priceStudio - (priceStudio * 0.05);
            } else if (overnaightStay > 14) {
                priceStudio = priceStudio - (priceStudio * 0.30);
            }
            break;
        case "Juni":
        case "September":
            priceStudio = overnaightStay * 75.20;
            priceApartament = overnaightStay * 68.70;
            if (overnaightStay > 14) {
                priceStudio = priceStudio - (priceStudio * 0.20);
            }
            break;
        case "July":
        case "August":
            priceStudio = overnaightStay * 76;
            priceApartament = overnaightStay * 77;
            break;
        default:
            break;
    }
    if (overnaightStay > 14) {
        priceApartament = priceApartament - (priceApartament * 0.10);
    }
    console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"])