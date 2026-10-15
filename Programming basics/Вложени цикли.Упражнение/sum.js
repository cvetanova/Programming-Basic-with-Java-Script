function sum(input) {
    let index = 0;
    let comand = input[index];
    let sumPrime = 0;
    let sumNonPrime = 0;
    while (comand !== "stop") {
        let currentNum = Number(comand);
          if (currentNum < 0) {
        console.log(`Number is negative.`);
        index++;
        comand = input[index];
        continue;
          }
        while (currentNum >= 0) {
            if (currentNum>3 && (currentNum%2===0 || currentNum%3===0)) {
                sumNonPrime += currentNum;
            } else {
               sumPrime+= currentNum;
            }
            break;
        }
        index++;
        comand=input[index];
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
sum(["30","83","33","-1","20","stop"]);