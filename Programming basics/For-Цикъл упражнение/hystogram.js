function hystogram(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3=0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i < input.length; i++) {
        let curentNum = input[i];
        if (curentNum < 200) {
            p1 += 1;
        } else if (curentNum >= 200 && curentNum < 400) {
            p2 += 1
        } else if (curentNum >= 400 && curentNum < 600) {
            p3 += 1;
        } else if (curentNum >= 600 && curentNum < 800) {
            p4 += 1;
        } else if (curentNum > 800) {
            p5 += 1;
        }
    }
    console.log(`${((p1 / n) * 100).toFixed(2)}%`);
    console.log(`${((p2 / n) * 100).toFixed(2)}%`);
    console.log(`${((p3 / n) * 100).toFixed(2)}%`);
    console.log(`${((p4 / n) * 100).toFixed(2)}%`);
    console.log(`${((p5 / n) * 100).toFixed(2)}%`);
}
hystogram(["3", "1", "2", "999"]);