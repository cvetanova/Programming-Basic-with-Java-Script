function cinema(input) {
    let projection = input[0];
    let rowsNum = Number(input[1]);
    let columns = Number(input[2]);
    let totalPlaces = rowsNum * columns;
    let income = 0;
    switch (projection) {
        case "Premiere":
            income = totalPlaces * 12;
            break;
        case "Normal":
            income = totalPlaces * 7.50;
            break;
        case "Discount":
            income = totalPlaces * 5;
            break;
        default:
            break;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
