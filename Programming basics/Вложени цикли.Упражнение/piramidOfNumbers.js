function piramidOfNumbers(input) {
    let n = Number(input[0]);
    let currentNum = 1;
    let currentLineNumbers = "";
    let flag = false;
    for (let row = 1; row <= n; row++) {
        for (let colone = 1; colone <= row; colone++) {
            if (currentNum> n) {
                flag = true;
            }
            currentLineNumbers += currentNum + " ";
          currentNum++;
        }
        console.log(currentLineNumbers);
        currentLineNumbers = "";
        if (flag == true) {
            break;
        }
    }
}
piramidOfNumbers(["7"]);