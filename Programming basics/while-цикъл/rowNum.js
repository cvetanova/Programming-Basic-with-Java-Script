function rowNum(input) {
    let num = Number(input[0]);
    let currentNum = 1;
    while (currentNum <= num) {
        console.log(currentNum);
        currentNum = (2 * currentNum) + 1;
    }
}
rowNum(["31"]);