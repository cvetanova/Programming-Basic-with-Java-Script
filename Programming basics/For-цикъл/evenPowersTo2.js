function evenPowersTo2(input) {
    let num = Number(input[0]);
    for (let i = 0; i <= 5; i++) {
        if (i % 2 === 0) {
            let pow = Math.pow(2, i);
            console.log(pow);
        }

    }
}
evenPowersTo2(["5"])