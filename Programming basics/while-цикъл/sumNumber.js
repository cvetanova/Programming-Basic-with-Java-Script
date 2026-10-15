function sumNumber(input) {
    let num = Number(input[0]);
    let totalSum = 0;
    let index = 1;
    let currentNum = Number(input[index]);
    while (totalSum <num) {
        totalSum += currentNum;
        index++;
        currentNum = Number(input[index]);
    }
    console.log(totalSum);
}
sumNumber(["20", "1", "2", "3", "4", "5", "6"]);