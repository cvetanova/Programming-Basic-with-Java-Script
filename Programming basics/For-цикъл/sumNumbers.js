function sumNumbers(input) {
    let num = input[0];
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let numCurent =Number(num.charAt(i));
        sum += numCurent;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumNumbers(["1234"])