function specilNumbers(input) {
    let n = Number(input[0]);
    let lineNumbers = "";
    for (let i = 1111; i <= 9999; i++) {
        let curentNum = i.toString();
        let counter = 0;
        for (let j = 0; j< 4; j++) {
            let curentSymvol = Number(curentNum[j]);
            if ( n%curentSymvol === 0) {
                counter++;
            }
        }
        if (counter === 4) {
            lineNumbers += curentNum + " ";
        }
        counter = 0;
    }
    console.log(lineNumbers);
}
specilNumbers(["11"]);