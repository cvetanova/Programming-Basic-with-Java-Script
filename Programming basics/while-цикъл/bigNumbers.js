function bigNum(input) {
    let numMax = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let comand = input[index];
    while (comand != "Stop") {
        let num=Number(comand);
        if (num > numMax) {
            numMax = num;
        }
        index++;
        comand=input[index];
    }
    console.log(numMax);
}
bigNum(["100", "99", "80", "70", "Stop"]);