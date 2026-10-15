function sumTwoNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magNum = Number(input[2]);
    let combination = 0;
    let flag = false;
    for (let i = num1; i <= num2; i++) {
        for (let j = num1; j <= num2; j++) {
            let sum = i + j;
            combination++;
            if (sum === magNum) {
                flag = true;
                console.log(`Combination N:${combination} (${i} + ${j} = ${magNum})`);
                break;
            }
        }
        if (flag == true) {
            break;
        }
    }
    if (flag == false) {
        console.log(`${combination} combinations - neither equals ${magNum}`);
    }
}
sumTwoNumbers(["1", "10", "5"]);