function smallNum(input) {
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let comand = input[index];
    while (comand != "Stop") {
        let num = Number(comand);
        if (num < minNum) {
            minNum = num;
        }
        index++;
        comand = input[index];
    }
    console.log(minNum);
}
smallNum(["-10", "20", "-30", "Stop"]);