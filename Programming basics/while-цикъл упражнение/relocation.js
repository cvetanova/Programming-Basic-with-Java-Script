function relocation(input) {
    let width = Number(input[0]);
    let cartonLength = Number(input[1]);
    let haight = Number(input[2]);
    let vaultedSpace = width * cartonLength * haight;
    let index = 3;
    let comand = input[index];
    while (comand !== "Done") {
        let curentCarton = Number(comand);
        if (curentCarton < vaultedSpace) {
         vaultedSpace-= curentCarton
        } else {
            console.log(`No more free space! You need ${curentCarton - vaultedSpace} Cubic meters more.`);
            break;
        }
        index++;
        comand = input[index];
    }
    if (comand==="Done") {
        console.log(`${ vaultedSpace} Cubic meters left.`);
    }
}
relocation(["10","10","2", "20", "20", "20", "20", "122"]);