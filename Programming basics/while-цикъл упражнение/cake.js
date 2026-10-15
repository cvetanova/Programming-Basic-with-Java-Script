function cake(input) {
    let width = Number(input[0]);
    let haigth = Number(input[1]);
    let totalPieces = width * haigth;
    let index = 2;
    let comand = input[index];
    while (comand !== "STOP") {
        let curentPieces = Number(comand);
    if (totalPieces<=curentPieces) {
            console.log(`No more cake left! You need ${curentPieces - totalPieces} pieces more.`);
            break;
        }else{
        totalPieces-=curentPieces;
        }
        index++;
        comand=input[index];
    }
     if (comand==="STOP") {
        console.log(`${totalPieces} pieces are left.`);
}
}
cake(["10","2","2","4","6","STOP"]);