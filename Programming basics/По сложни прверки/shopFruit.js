function shopFruit(input) {
    let fruit = input[0];
    let day = input[1];
    let num = Number(input[2]);
    let sum = 0;
    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        switch (fruit) {
            case "banana":
                sum = num * 2.50;
                console.log(sum.toFixed(2));
                break;
            case "apple":
                sum = num * 1.20;
                console.log(sum.toFixed(2));
                break;
            case "orange":
                sum = num * 0.85;
                console.log(sum.toFixed(2));
                break;
            case "grapefruit":
                sum = num * 1.45;
                console.log(sum.toFixed(2));
                break;
            case "kiwi":
                sum = num * 2.70;
                console.log(sum.toFixed(2));
                break;
            case "pineapple":
                sum = num * 5.50;
                console.log(sum.toFixed(2));
                break;
            case "grapes":
                sum = num * 3.85;
                console.log(sum.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else if (day == "Saturday" || day == "Sunday") {
        switch (fruit) {
            case "banana":
                sum = num * 2.70;
                console.log(sum.toFixed(2));
                break;
            case "apple":
                sum = num * 1.25;
                console.log(sum.toFixed(2));
                break;
            case "orange":
                sum = num * 0.90;
                console.log(sum.toFixed(2));
                break;
            case "grapefruit":
                sum = num * 1.60;
                console.log(sum.toFixed(2));
                break;
            case "kiwi":
                sum = num * 3.00;
                console.log(sum.toFixed(2));
                break;
            case "pineapple":
                sum = num * 5.60;
                console.log(sum.toFixed(2));
                break;
            case "grapes":
                sum = num * 4.20;
                console.log(sum.toFixed(2));
                break;
            default:
                console.log("error");
                break;
        }
    } else {
        console.log("error");
    }
}
shopFruit(["grapes", "Saturday", "0.5"])