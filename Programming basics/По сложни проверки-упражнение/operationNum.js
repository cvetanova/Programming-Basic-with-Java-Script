function operationNum(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    if (operator == "+" || operator == "-" || operator == "*") {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            default:
                break;
        }
        if (result % 2 == 0) {
            console.log(`${num1} ${operator} ${num2} = ${result} – even`);
        } else {
            console.log(`${num1} ${operator} ${num2} = ${result} – odd`);
        }
    } else if (operator == "/" || operator == "%") {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
            switch (operator) {
                case "/":
                    result = num1 / num2;
                    break;
                case "%":
                    result = num1 % num2;
                    break;
                default:
                    break;
            }
            console.log(`${num1} ${operator} ${num2} = ${result}`);
        }
    }
}
operationNum(["10", "0", "%"])