function traveling(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let price = 0;
    let distination = "";
    let typeHoliday = "";
    if (budjet <= 100) {
        distination = "Bulgaria";
        switch (season) {
            case "summer":
                price = budjet * 0.30;
                break;
            case "winter":
                price = budjet * 0.70;
                break;
            default:
                break;
        }
    } else if (budjet <= 1000) {
        distination = "Balkans";
        switch (season) {
            case "summer":
                price = budjet * 0.40;
                break;
            case "winter":
                price = budjet * 0.80;
                break;
            default:
                break;
        }
    } else if (budjet > 1000) {
        distination = "Europe";
        price = budjet * 0.90;
    }
    if (season == "winter" || distination == "Europe") {
        typeHoliday = "Hotel";
    } else {
        typeHoliday = "Camp";
    }
    console.log(`Somewhere in ${distination}`);
    console.log(`${typeHoliday} - ${price.toFixed(2)}`);
}
traveling(["1500", "summer"])