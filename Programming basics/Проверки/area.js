function area(input) {
    let figure = input[0];
    let area = 0;
    if (figure === "square") {
        let a = Number(input[1]);
        area = (a * a).toFixed(3);
    } else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = (a * b).toFixed(3);
    } else if (figure === "circle") {
        let r = Number(input[1]);
        area = Math.PI * Math.pow(r, 2).toFixed(3);
    } else {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = ((a * h) / 2).toFixed(3);
    }
    console.log(area);
}
area(["square", "5"])