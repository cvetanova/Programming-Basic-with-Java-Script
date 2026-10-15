function equalSum(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sumEven = 0;
    let sumOdd = 0;
    let printLIne="";
    for (let i = num1; i <= num2; i++) {
        let currentNum = i.toString();
        for (let j = 0; j < currentNum.length; j++) {
          let currentSymvol = Number(currentNum[j]);
            if (j % 2 === 0) {
              sumEven += currentSymvol;
            } else {
               sumOdd += currentSymvol;
          }
        }
        if (sumEven === sumOdd) {
          printLIne+=currentNum+" ";
        }
        sumEven = 0;
        sumOdd = 0;
    }
console.log(printLIne);
}
equalSum(["100000", "100050"]);