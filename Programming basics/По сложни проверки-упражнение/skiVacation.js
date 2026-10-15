function skiVacation(input) {
    let days = Number(input[0]);
    let room = input[1];
    let rating = input[2];
    let overnightStays = days - 1;
    let totalPrice = 0;
    switch (room) {
        case "room for one person":
            totalPrice = overnightStays * 18;
            break;
        case "apartment":
            totalPrice = overnightStays * 25;
            if (overnightStays < 10) {
                totalPrice = totalPrice - (totalPrice * 0.30);
            } else if (overnightStays >= 10 && overnightStays <= 15) {
                totalPrice = totalPrice - (totalPrice * 0.35);
            } else if (overnightStays > 15) {
                totalPrice = totalPrice - (totalPrice * 0.50);
            }
            break;
        case "president apartment":
            totalPrice = overnightStays * 35;
            if (overnightStays < 10) {
                totalPrice = totalPrice - (totalPrice * 0.10);
            } else if (overnightStays >= 10 && overnightStays <= 15) {
                totalPrice = totalPrice - (totalPrice * 0.15);
            } else if (overnightStays > 15) {
                totalPrice = totalPrice - (totalPrice * 0.20);
            }
            break;
        default:
            break;
    }
    if (rating == "positive") {
        totalPrice = totalPrice + (totalPrice * 0.25);
    } else if (rating = "negative") {
        totalPrice = totalPrice - (totalPrice * 0.10);
    }
    console.log(totalPrice.toFixed(2));
}
skiVacation(["2", "apartment", "positive"])